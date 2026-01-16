import psutil
import os
import sys

def diagnose_top_consumers():
    # Write to file explicitly with utf-8
    log_path = r"d:\test\multiverse-creature-lab\mem_log.txt"
    
    with open(log_path, "w", encoding="utf-8") as f:
        f.write("🔍 DIAGNOSING MEMORY HOGS (TOP 10)\n")
        
        procs = []
        for proc in psutil.process_iter(['pid', 'name', 'memory_info', 'cmdline']):
            try:
                # Filter out system idle/system
                if proc.info['pid'] < 4: continue
                procs.append(proc)
            except: pass
                
        # Sort
        procs.sort(key=lambda p: p.info['memory_info'].rss, reverse=True)
        
        f.write(f"{'PID':<8} {'MEM (MB)':<12} {'NAME':<25} {'COMMAND'}\n")
        f.write("-" * 80 + "\n")
        
        count_antigravity = 0
        count_lsp = 0
        
        for p in procs[:15]:
            try:
                pid = p.info['pid']
                name = p.info['name']
                mem = p.info['memory_info'].rss / (1024 * 1024)
                cmd = " ".join(p.info.get('cmdline') or [])
                
                if "Antigravity" in name: count_antigravity += 1
                if "language_server" in name: count_lsp += 1
                
                f.write(f"{pid:<8} {mem:<12.2f} {name:<25} {cmd[:100]}...\n")
            except: continue

        total_mem = psutil.virtual_memory()
        f.write("-" * 80 + "\n")
        f.write(f"📉 Total System Memory Used: {total_mem.percent}%\n")
        f.write(f"🤖 Antigravity Count: {count_antigravity}\n")
        f.write(f"🧠 Language Server Count: {count_lsp}\n")

    print(f"✅ Log saved to {log_path}")

if __name__ == "__main__":
    diagnose_top_consumers()
