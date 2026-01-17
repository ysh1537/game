import os
import json
import sys
import argparse

# Config
HEAVY_THRESHOLD_MB = 100
COMMON_HEAVY_DIRS = ["node_modules", "dist", "build", "venv", "env", ".git", ".hg", ".svn"]
COMMON_ASSET_DIRS = ["images", "assets", "videos", "audio", "models", "textures"]
AGENT_DIRS = [".agent", ".gemini", "backups", "_backup"]

def get_dir_size(start_path):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(start_path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            try:
                total_size += os.path.getsize(fp)
            except: 
                pass
    return total_size / (1024 * 1024) # MB

def detect_project_type(root):
    types = []
    if os.path.exists(os.path.join(root, "package.json")): types.append("Node.js")
    if os.path.exists(os.path.join(root, "requirements.txt")) or os.path.exists(os.path.join(root, "pyproject.toml")): types.append("Python")
    if os.path.exists(os.path.join(root, "project.godot")): types.append("Godot")
    return types

def scan_heavy_dirs(root):
    heavy = []
    try:
        subdirs = [d for d in os.listdir(root) if os.path.isdir(os.path.join(root, d))]
        for d in subdirs:
            if d.startswith(".") and d not in AGENT_DIRS: continue
            
            full_path = os.path.join(root, d)
            is_suspicious = d.lower() in COMMON_HEAVY_DIRS or d.lower() in COMMON_ASSET_DIRS or d in AGENT_DIRS
            
            if is_suspicious:
                 heavy.append(d)
                 continue
            
            size = get_dir_size(full_path)
            if size > HEAVY_THRESHOLD_MB:
                heavy.append(d)
    except Exception as e:
        print(f"Error scanning dirs: {e}")
        
    return list(set(heavy))

def update_vscode_settings(root, heavy_dirs):
    vscode_dir = os.path.join(root, ".vscode")
    if not os.path.exists(vscode_dir):
        os.makedirs(vscode_dir)
        
    settings_path = os.path.join(vscode_dir, "settings.json")
    
    try:
        if os.path.exists(settings_path):
            with open(settings_path, 'r', encoding='utf-8') as f:
                settings = json.load(f)
        else:
            settings = {}
            
        if "files.watcherExclude" not in settings: settings["files.watcherExclude"] = {}
        if "search.exclude" not in settings: settings["search.exclude"] = {}
        
        for d in heavy_dirs:
            pattern = f"**/{d}/**"
            search_pattern = f"**/{d}"
            settings["files.watcherExclude"][pattern] = True
            settings["search.exclude"][search_pattern] = True
            
        settings["files.watcherExclude"]["**/.git/objects/**"] = True
        
        with open(settings_path, 'w', encoding='utf-8') as f:
            json.dump(settings, f, indent=4)
            
        print(f"✅ Updated .vscode/settings.json with ignores for: {heavy_dirs}")
        
    except Exception as e:
        print(f"❌ Failed to update VS Code settings: {e}")

def update_jsconfig(root, heavy_dirs):
    config_path = os.path.join(root, "jsconfig.json")
    if not os.path.exists(config_path) and "Node.js" not in detect_project_type(root):
        return

    try:
        if os.path.exists(config_path):
            with open(config_path, 'r', encoding='utf-8') as f:
                config = json.load(f)
        else:
            config = {"compilerOptions": {"target": "ES6"}, "exclude": []}
            
        if "exclude" not in config: config["exclude"] = []
        
        current_excludes = set(config["exclude"])
        for d in heavy_dirs:
            if d in COMMON_HEAVY_DIRS or d in COMMON_ASSET_DIRS or d in AGENT_DIRS:
                if d not in current_excludes:
                    config["exclude"].append(d)
        
        with open(config_path, 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=4)
            
        print(f"✅ Updated jsconfig.json")
        
    except Exception as e:
        print(f"❌ Failed to update jsconfig.json: {e}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--analyze", action="store_true")
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    
    root_dir = os.getcwd()
    
    print(f"🔍 Analyzing workspace: {root_dir}")
    project_types = detect_project_type(root_dir)
    print(f"   Detected Types: {', '.join(project_types)}")
    
    heavy_dirs = scan_heavy_dirs(root_dir)
    print(f"   Heavy/Ignorable Dirs Found: {', '.join(heavy_dirs)}")
    
    if args.apply:
        print("\n⚙️  Applying Optimizations...")
        update_vscode_settings(root_dir, heavy_dirs)
        update_jsconfig(root_dir, heavy_dirs)
        print("✨ Done. Please restart IDE.")
    elif args.analyze:
        print("\n💡 Recommendation: Run with --apply to enforce these ignore rules.")

if __name__ == "__main__":
    main()
