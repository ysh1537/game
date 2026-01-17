import os
import sys

def check_system_health():
    try:
        import psutil
    except ImportError:
        print("STATUS: YELLOW")
        print("REASON: 'psutil' library not found. Cannot verify memory. Please install it using 'pip install psutil'")
        return

    # 1. Memory Check (Threshold: 85%)
    mem = psutil.virtual_memory()
    mem_percent = mem.percent
    
    # 2. Zombie/Heavy Process Check (Antigravity specific)
    # Checks for 'language_server' or 'node' processes consuming high resources
    heavy_processes = 0
    for proc in psutil.process_iter(['pid', 'name', 'memory_percent']):
        try:
            # Check for node or language_server in the process name (case-insensitive for robustness)
            proc_name = proc.info['name'].lower()
            if 'node' in proc_name or 'language_server' in proc_name:
                if proc.info['memory_percent'] > 5.0:  # Single process eating >5% RAM
                    heavy_processes += 1
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            pass

    # 3. Output Status for Agent
    print(f"--- SYSTEM HEALTH REPORT ---")
    print(f"RAM Usage: {mem_percent}%")
    print(f"Heavy Processes: {heavy_processes}")
    
    if mem_percent > 90:
        print("STATUS: RED")
        print("REASON: CRITICAL_MEMORY_PRESSURE. Risk of 'terminate' crash is HIGH.")
    elif mem_percent > 75 or heavy_processes > 3:
        print("STATUS: YELLOW")
        print("REASON: MODERATE_PRESSURE. Proceed with caution. Micro-tasking required.")
    else:
        print("STATUS: GREEN")
        print("REASON: Stable. Systems nominal.")

if __name__ == "__main__":
    # Ensure psutil is installed or fallback
    try:
        check_system_health()
    except ImportError:
        print("STATUS: YELLOW") # Default to caution if psutil is missing
        print("REASON: 'psutil' library not found. Cannot verify memory.")
