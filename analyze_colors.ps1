
Add-Type -AssemblyName System.Drawing

$path = "C:\Users\yesol_asus\.gemini\antigravity\brain\08d40a2f-b773-4280-ad0a-463daa587c0c\original_hades.png"
if (-not (Test-Path $path)) {
    Write-Error "File not found: $path"
    exit
}

$img = [System.Drawing.Bitmap]::FromFile($path)
$rTotal = 0
$gTotal = 0
$bTotal = 0
$count = 0

# Sample every 10th pixel to speed up
for ($x = 0; $x -lt $img.Width; $x += 10) {
    for ($y = 0; $y -lt $img.Height; $y += 10) {
        $pixel = $img.GetPixel($x, $y)
        if ($pixel.A -gt 240) {
            # Ignore transparent pixels
            $rTotal += $pixel.R
            $gTotal += $pixel.G
            $bTotal += $pixel.B
            $count++
        }
    }
}

if ($count -eq 0) {
    Write-Host "No opaque pixels found."
    exit
}

$avgR = [math]::Round($rTotal / $count)
$avgG = [math]::Round($gTotal / $count)
$avgB = [math]::Round($bTotal / $count)

Write-Host "Average RGB: ($avgR, $avgG, $avgB)"
$brightness = ($avgR + $avgG + $avgB) / 3
Write-Host "Brightness: $brightness"

if ($brightness -gt 180) { Write-Host "Theme: Very Light (White/High Key)" }
elseif ($brightness -gt 120) { Write-Host "Theme: Light/Medium" }
elseif ($brightness -gt 60) { Write-Host "Theme: Dark/Medium" }
else { Write-Host "Theme: Very Dark (Black/Low Key)" }

# Color Dominance
$diff = 15
if ($avgR -gt $avgG + $diff -and $avgR -gt $avgB + $diff) { Write-Host "Dominant Color: RED" }
elseif ($avgG -gt $avgR + $diff -and $avgG -gt $avgB + $diff) { Write-Host "Dominant Color: GREEN" }
elseif ($avgB -gt $avgR + $diff -and $avgB -gt $avgG + $diff) { Write-Host "Dominant Color: BLUE" }
elseif ($avgR -gt $avgB + $diff -and $avgG -gt $avgB + $diff) { Write-Host "Dominant Color: YELLOW" }
elseif ($avgR -gt $avgG + $diff -and $avgB -gt $avgG + $diff) { Write-Host "Dominant Color: PURPLE/MAGENTA" }
elseif ($avgG -gt $avgR + $diff -and $avgB -gt $avgR + $diff) { Write-Host "Dominant Color: CYAN" }
else { Write-Host "Dominant Color: NEUTRAL (Grey/White/Black)" }

$img.Dispose()
