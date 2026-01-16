import os
import shutil
import time

SOURCE_PATH = r"d:\test\multiverse-creature-lab\.agent\skills\self-optimizer"
ROOT_DIR = r"D:\test"
EXCLUDE_DIRS = {".tmp.drivedownload", ".tmp.driveupload", "System Volume Information", "$RECYCLE.BIN"}

def distribute_skill():
    if not os.path.exists(SOURCE_PATH):
        print(f"❌ Source skill not found: {SOURCE_PATH}")
        return

    print(f"🚀 Distributing 'Project-Optimizer' Skill to {ROOT_DIR}")
    
    projects = [d for d in os.listdir(ROOT_DIR) if os.path.isdir(os.path.join(ROOT_DIR, d)) and d not in EXCLUDE_DIRS]
    total = len(projects)

    for idx, project in enumerate(projects):
        # SKIP SOURCE PROJECT (Don't delete yourself!)
        if project == "multiverse-creature-lab":
            print(f"[{idx+1}/{total}] ⏭️ Skipping source project: {project}")
            continue

        target_dir = os.path.join(ROOT_DIR, project, ".agent", "skills", "self-optimizer")
        
        try:
            # 1. Clean existing
            if os.path.exists(target_dir):
                shutil.rmtree(target_dir)
            
            # 2. Copy new skill
            shutil.copytree(SOURCE_PATH, target_dir)
            print(f"[{idx+1}/{total}] ✅ Installed in: {project}")
            
        except Exception as e:
            print(f"[{idx+1}/{total}] ⚠️ Failed {project}: {e}")
            
    print("✨ Skill distribution complete. Each project can now run 'python .agent/skills/self-optimizer/scripts/optimize.py --apply'")

if __name__ == "__main__":
    distribute_skill()
