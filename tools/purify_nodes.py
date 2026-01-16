import psutil
import os
import sys

def purge_heavy_nodes():
    print("🚨 ACTIVATING TARGETED NODE PURGE PROTOCOL")
    
    current_pid = os.getpid()
    myself = psutil.Process(current_pid)
    parents = [p.pid for p in myself.parents()]
    children = myself.children(recursive=True)
    
    print(f"🛡️ Protected Core Agent (PID: {current_pid})")
    
    deleted_mem = 0
    killed_count = 0
    
    # 1. Kill My Children (Likely MCP Servers accumulating memory)
    print("👾 Scanning Child Processes (MCP Servers)...")
    for child in children:
        try:
            c_name = child.name().lower()
            c_mem = child.memory_info().rss / (1024 * 1024)
            
            if "node" in c_name or "python" in c_name: # MCPs can be python too
                print(f"   🔫 Restarting Handler PID {child.pid} ({c_name}) - Used: {c_mem:.2f} MB")
                child.kill()
                deleted_mem += c_mem
                killed_count += 1
        except:
            pass

    # 2. Kill Global Heavy Nodes & Language Servers
    print("🌍 Scanning System-wide Heavy Processes...")
    for proc in psutil.process_iter(['pid', 'name', 'memory_info', 'cmdline']):
        try:
            pid = proc.info['pid']
            if pid == current_pid or pid in parents: continue # Safety
            
            p_name = proc.info['name'].lower()
            p_mem = proc.info['memory_info'].rss / (1024 * 1024)
            p_cmd = " ".join(proc.info.get('cmdline') or []).lower()
            
            is_target = False
            reason = ""
            
            # Target: Language Servers
            if "language_server" in p_name or "language_server" in p_cmd:
                is_target = True
                reason = "Language/LSP Server"
                
            # Target: Heavy Node processes (MCPs often run as node)
            # Threshold lowered to 300MB to catch leaky semantic servers
            elif "node" in p_name and p_mem > 300: 
                is_target = True
                reason = "Heavy Node Process (>300MB)"
                
            if is_target:
                print(f"   🔫 Killing PID {pid} ({p_name}) - Used: {p_mem:.2f} MB [{reason}]")
                proc.kill()
                deleted_mem += p_mem
                killed_count += 1
                
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass

    print(f"\n✨ PURGE COMPLETE")
    print(f"💀 Killed Targets: {killed_count}")
    print(f"📉 Reclaimed Memory: {deleted_mem:.2f} MB")
    
    mem = psutil.virtual_memory()
    print(f"📊 Current System RAM: {mem.percent}%")

if __name__ == "__main__":
    purge_heavy_nodes()
