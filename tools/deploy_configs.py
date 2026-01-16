import os
import json
import time

ROOT_DIR = r"D:\test"
EXCLUDE_DIRS = {".tmp.drivedownload", ".tmp.driveupload", "System Volume Information", "$RECYCLE.BIN"}

# 1. Standard .vscode/settings.json content
SETTINGS_TEMPLATE = {
    "files.watcherExclude": {
        "**/.git/objects/**": True,
        "**/.git/subtree-cache/**": True,
        "**/node_modules/**": True,
        "**/dist/**": True,
        "**/build/**": True,
        "**/images/**": True,       # Heavy images
        "**/assets/**": True,
        "**/backups/**": True,
        "**/_backup/**": True,
        "**/.agent/**": True,       # Agent logs/artifacts
        "**/.gemini/**": True
    },
    "search.exclude": {
        "**/node_modules": True,
        "**/dist": True,
        "**/build": True,
        "**/.agent": True,
        "**/.gemini": True,
        "**/images": True,
        "**/backups": True
    },
    "files.exclude": {
        "**/.git": True,
        "**/.DS_Store": True
    }
}

# 2. Critical excludes for jsconfig.json
CRITICAL_EXCLUDES = [
    ".agent",
    ".gemini",
    "node_modules",
    "dist",
    "build",
    "images",
    "assets",
    "backups",
    "_backup",
    "**/*.json"  # Prevent analyzing massive JSON data
]

def update_jsconfig(project_path):
    config_path = os.path.join(project_path, "jsconfig.json")
    
    # Load existing or create new
    if os.path.exists(config_path):
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                config = json.load(f)
        except:
            config = {"compilerOptions": {"target": "ES6"}, "exclude": []}
    else:
        config = {"compilerOptions": {"target": "ES6"}, "exclude": []}

    # Ensure 'exclude' list exists
    if "exclude" not in config:
        config["exclude"] = []

    # Merge critical excludes (prevent duplicates)
    current_excludes = set(config["exclude"])
    for item in CRITICAL_EXCLUDES:
        if item not in current_excludes:
            config["exclude"].append(item)
            
    # Write back
    with open(config_path, 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=4)

def deploy_configs():
    print(f"🚀 Starting Configuration Deployment to {ROOT_DIR}")
    
    projects = [d for d in os.listdir(ROOT_DIR) if os.path.isdir(os.path.join(ROOT_DIR, d)) and d not in EXCLUDE_DIRS]
    total = len(projects)

    for idx, project in enumerate(projects):
        project_path = os.path.join(ROOT_DIR, project)
        vscode_dir = os.path.join(project_path, ".vscode")
        settings_path = os.path.join(vscode_dir, "settings.json")

        try:
            # 1. Update .vscode/settings.json
            if not os.path.exists(vscode_dir):
                os.makedirs(vscode_dir)
            
            with open(settings_path, 'w', encoding='utf-8') as f:
                json.dump(SETTINGS_TEMPLATE, f, indent=4)

            # 2. Update jsconfig.json
            update_jsconfig(project_path)

            print(f"[{idx+1}/{total}] ✅ Configured: {project}")
            
        except Exception as e:
            print(f"[{idx+1}/{total}] ⚠️ Failed {project}: {e}")
            
    print("✨ All configurations updated. Please RESTART IDE to apply changes.")

if __name__ == "__main__":
    deploy_configs()
