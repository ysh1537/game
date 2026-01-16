
import sys
from PIL import Image
import os

def analyze_image(path):
    try:
        if not os.path.exists(path):
            print(f"File not found: {path}")
            return

        img = Image.open(path)
        img = img.resize((50, 50)) # Small resize for speed
        pixels = list(img.getdata())
        
        r_total, g_total, b_total = 0, 0, 0
        count = len(pixels)
        
        for p in pixels:
            # Handle RGBA
            if len(p) >= 3:
                r_total += p[0]
                g_total += p[1]
                b_total += p[2]
                
        avg_r = r_total // count
        avg_g = g_total // count
        avg_b = b_total // count
        
        print(f"Average RGB: ({avg_r}, {avg_g}, {avg_b})")
        
        # Brightness
        brightness = (avg_r + avg_g + avg_b) / 3
        print(f"Brightness (0-255): {brightness:.2f}")
        
        if brightness > 180:
            print("Theme: Very Light (White/High Key)")
        elif brightness > 120:
            print("Theme: Light/Medium")
        elif brightness > 60:
            print("Theme: Dark/Medium")
        else:
            print("Theme: Very Dark (Black/Low Key)")
            
        # Dominant Channel
        if avg_r > avg_g + 20 and avg_r > avg_b + 20:
            print("Dominant Color: RED")
        elif avg_g > avg_r + 20 and avg_g > avg_b + 20:
            print("Dominant Color: GREEN")
        elif avg_b > avg_r + 20 and avg_b > avg_g + 20:
            print("Dominant Color: BLUE")
        elif avg_r > avg_b + 20 and avg_g > avg_b + 20:
            print("Dominant Color: YELLOW")
        elif avg_r > avg_g + 20 and avg_b > avg_g + 20:
            print("Dominant Color: PURPLE/MAGENTA")
        elif avg_g > avg_r + 20 and avg_b > avg_r + 20:
            print("Dominant Color: CYAN")
        else:
            print("Dominant Color: NEUTRAL (Grey/White/Black)")

    except Exception as e:
        print(f"Error: {e}")

analyze_image(r"C:\Users\yesol_asus\.gemini\antigravity\brain\08d40a2f-b773-4280-ad0a-463daa587c0c\original_hades.png")
