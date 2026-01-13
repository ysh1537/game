
# Recover Orphans based on known mappings
$ErrorActionPreference = "Continue"

$json = Get-Content "deep_audit_data.json" -Raw | ConvertFrom-Json
$missing = $json.missing
$orphans = $json.orphan

# Map Expected Key -> Orphan Key
# We'll match if expected path contains Key A and orphan filename contains Key B
$mappings = @{
    "god_cthulhu"      = "cthulhu"
    "void_emperor"     = "erebus"
    "dragon_chaos"     = "tiamat"
    "god_shub"         = "shub_niggurath"
    "god_nyarlathotep" = "nyarlathotep" # Might be identical but good to have
    "demon_king"       = "baal"
    "vampire_lord"     = "vampire" # careful
}

# Pre-process orphans for faster lookup
$orphanFiles = @{}
foreach ($o in $orphans) {
    if (-not $orphanFiles.ContainsKey($o.filename)) {
        $orphanFiles[$o.filename] = $o
    }
}

foreach ($m in $missing) {
    $expectedPath = $m.path
    $expectedName = [System.IO.Path]::GetFileName($expectedPath)
    
    # Check mappings
    foreach ($key in $mappings.Keys) {
        if ($expectedPath -match $key) {
            $orphanKey = $mappings[$key]
            # specific expected logic: creature_god_cthulhu_joy.png -> creature_cthulhu_joy.png
            # Replace $key with $orphanKey in filenames
            
            # Simple replace in filename
            # e.g. creature_god_cthulhu_joy.png -> creature_cthulhu_joy.png ??
            # Wait, god_cthulhu -> cthulhu replacement:
            # creature_god_cthulhu_joy.png -> creature_cthulhu_joy.png
            
            # Strategy: Construct hypothetical orphan filename
            # Remove "god_" if Present? No, replacement is better.
            
            # Try 1: Direct replacement of ID part
            # But the ID part in filename isn't always clean. "creature_god_cthulhu_..."
            
            $hypotheticalOrphan = $expectedName.Replace("creature_$key", "creature_$orphanKey")
            # Also try without "creature_" prefix change just in case
            $hypotheticalOrphan2 = $expectedName.Replace($key, $orphanKey)
            
            $foundOrphan = $null
            if ($orphanFiles.ContainsKey($hypotheticalOrphan)) {
                $foundOrphan = $orphanFiles[$hypotheticalOrphan]
            }
            elseif ($orphanFiles.ContainsKey($hypotheticalOrphan2)) {
                $foundOrphan = $orphanFiles[$hypotheticalOrphan2]
            }
            
            if ($foundOrphan) {
                Write-Host "Recovering: $($foundOrphan.relativePath) -> $expectedPath"
                
                $destDir = Split-Path -Parent $expectedPath
                if (-not (Test-Path $destDir)) {
                    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
                }
                
                # Copy or Move? Move is better for cleanup.
                Move-Item -Path $foundOrphan.fullPath -Destination $expectedPath -Force
            }
        }
    }
}

Write-Host "Recovery Scan Complete."
