import os
import shutil
import time
import gc
import psutil

SOURCE_PATH = r"d:\test\multiverse-creature-lab\.agent\skills\runtime-guardian"
ROOT_DIR = r"D:\test"
EXCLUDE_DIRS = {".tmp.drivedownload", ".tmp.driveupload", "System Volume Information", "$RECYCLE.BIN"}

def get_memory_usage():
    process = psutil.Process(os.getpid())
    return process.memory_info().rss / 1024 / 1024  # MB

def deploy_safe():
    if not os.path.exists(SOURCE_PATH):
        print(f"❌ Source path not found: {SOURCE_PATH}")
        return

    print(f"🚀 Starting Safe Deployment (Initial Memory: {get_memory_usage():.2f} MB)")
    
    projects = [d for d in os.listdir(ROOT_DIR) if os.path.isdir(os.path.join(ROOT_DIR, d)) and d not in EXCLUDE_DIRS]
    total = len(projects)
    
    print(f"📋 Found {total} targets in {ROOT_DIR}")

    for idx, project in enumerate(projects):
        target_dir = os.path.join(ROOT_DIR, project, ".agent", "skills", "runtime-guardian")
        
        try:
            # 1. Clean existing if needed
            if os.path.exists(target_dir):
                shutil.rmtree(target_dir)
            
            # 2. Copy new skill
            shutil.copytree(SOURCE_PATH, target_dir)
            print(f"[{idx+1}/{total}] ✅ Deployed to: {project}")
            
        except Exception as e:
            print(f"[{idx+1}/{total}] ⚠️ Failed {project}: {e}")

        # 3. MEMORY SAFETY MEASURES
        gc.collect()  # Force Garbage Collection
        time.sleep(0.5)  # Cool-down to prevent I/O spike
        
        # Optional: Check memory mid-flight
        if idx % 5 == 0:
            print(f"   ⏳ Memory Check: {get_memory_usage():.2f} MB")

    print(f"✨ Deployment Complete. Final Memory: {get_memory_usage():.2f} MB")

if __name__ == "__main__":
    deploy_safe()
