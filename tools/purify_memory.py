import psutil
import os
import sys

def clean_memory_safe():
    print("🚨 ACTIVATING SAFE MEMORY PURGE PROTOCOL (v2)")
    
    current_pid = os.getpid()
    myself = psutil.Process(current_pid)
    parents = [p.pid for p in myself.parents()]
    
    print(f"🛡️ Identifying Friendly Forces (DO NOT KILL):")
    print(f"   - Me: {current_pid}")
    print(f"   - Parents: {parents}")

    deleted_mem = 0
    killed_count = 0
    
    # Target Loop
    for proc in psutil.process_iter(['pid', 'name', 'memory_info', 'cmdline']):
        try:
            pid = proc.info['pid']
            
            # 1. SAFETY CHECK: Skip myself and my parents
            if pid == current_pid or pid in parents:
                continue
                
            p_name = proc.info['name'].lower()
            p_cmd = (proc.info.get('cmdline') or [])
            p_cmd_str = " ".join(p_cmd).lower()
            
            # 2. SAFETY CHECK: Explicitly protect Agent related names
            if "antigravity" in p_name or "antigravity" in p_cmd_str:
                continue
                
            p_mem = proc.info['memory_info'].rss / (1024 * 1024) # MB
            
            # 3. SELECTIVE TARGETING
            # Only kill confirmed language servers or specific heavy zombies
            is_target = False
            reason = ""
            
            if "language_server" in p_name or "language_server" in p_cmd_str:
                is_target = True
                reason = "Language Server"
            
            # NOTE: Removed generic 'node' killing to prevent suicide
            # Only kill node if it explicitly looks like a language server wrapper
            # elif "node" in p_name and p_mem > 1000: ... (Too risky right now)
            
            if is_target:
                print(f"🔫 Killing PID {pid} ({p_name}) - Used: {p_mem:.2f} MB [{reason}]")
                proc.kill()
                deleted_mem += p_mem
                killed_count += 1
                
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass
            
    print(f"\n✨ PURGE COMPLETE")
    print(f"💀 Killed Processes: {killed_count}")
    print(f"📉 Reclaimed Memory: {deleted_mem:.2f} MB")
    
    mem = psutil.virtual_memory()
    print(f"📊 Current System RAM: {mem.percent}%")

if __name__ == "__main__":
    clean_memory_safe()
