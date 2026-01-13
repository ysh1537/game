
import re

file_path = "js/data/creatures/WildData.js"

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    id_pattern = re.compile(r'id:\s*["\']([^"\']+)["\']')
    
    seen_ids = {}
    duplicates = []
    kraken_lines = []

    for i, line in enumerate(lines):
        match = id_pattern.search(line)
        if match:
            creature_id = match.group(1)
            if creature_id in seen_ids:
                duplicates.append((creature_id, i + 1, seen_ids[creature_id]))
            seen_ids[creature_id] = i + 1
        
        if "kraken" in line.lower():
            kraken_lines.append((i + 1, line.strip()))

    print("=== DUPLICATES ===")
    for dup in duplicates:
        print(f"ID: {dup[0]} found at Line {dup[1]} (Previous at line {dup[2]})")

    print("\n=== KRAKEN ENTRIES ===")
    for k in kraken_lines:
        print(f"Line {k[0]}: {k[1]}")

except Exception as e:
    print(f"Error: {e}")
