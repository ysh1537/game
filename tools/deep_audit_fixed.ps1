# Deep Resource Audit Script (Fixed Relative Paths)
$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path $MyInvocation.MyCommand.Path -Parent
$PROJECT_ROOT = Resolve-Path (Join-Path $ScriptDir "..")
$OUTPUT_FILE = Join-Path $PROJECT_ROOT "DEEP_AUDIT_REPORT.md"
$JSON_FILE = Join-Path $PROJECT_ROOT "deep_audit_data.json"

Write-Host "============================================================"
Write-Host "Deep Resource Audit Starting..."
Write-Host "============================================================"
Write-Host "Project Root: $PROJECT_ROOT"

# Rarity Priority
$RARITY_PRIORITY = @{
    'UR' = 7; 'SSR' = 6; 'SR' = 5; 'Special' = 4; 'Rare' = 3; 'Unique' = 2; 'Normal' = 1
}

# Data Files to Scan
$dataFiles = @(
    @{ name = 'Asgard'; file = 'AsgardData.js' },
    @{ name = 'Olympus'; file = 'OlympusData.js' },
    @{ name = 'ShangriLa'; file = 'ShangriLaData.js' },
    @{ name = 'Abyss'; file = 'AbyssData.js' },
    @{ name = 'Wild'; file = 'WildData.js' }
)

$allPaths = @()
$creatures = @()

# 1. Parse Data Files
Write-Host "`nLoading creature data..."

foreach ($world in $dataFiles) {
    $filePath = Join-Path $PROJECT_ROOT "js\data\creatures\$($world.file)"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Regex Extraction
        $ids = [regex]::Matches($content, 'id:\s*["\x27]([^"\x27]+)["\x27]') | ForEach-Object { $_.Groups[1].Value }
        $names = [regex]::Matches($content, 'name:\s*["\x27]([^"\x27]+)["\x27]') | ForEach-Object { $_.Groups[1].Value }
        $rarities = [regex]::Matches($content, 'rarity:\s*(?:RANKS\.)?(\w+)') | ForEach-Object { $_.Groups[1].Value }
        $images = [regex]::Matches($content, 'image:\s*["\x27]([^"\x27]+)["\x27]') | ForEach-Object { $_.Groups[1].Value }
        
        $spritePattern = '["\x27](idle|joy|sad|angry|skill|victory|defeat)["\x27]:\s*["\x27]([^"\x27]+)["\x27]'
        $galleryPattern = '["\x27](lv[123])["\x27]:\s*["\x27]([^"\x27]+)["\x27]'
        
        for ($i = 0; $i -lt $ids.Count; $i++) {
            $creature = @{
                id     = $ids[$i]
                name   = if ($i -lt $names.Count) { $names[$i] } else { "Unknown" }
                rarity = if ($i -lt $rarities.Count) { $rarities[$i] } else { "Unknown" }
                image  = if ($i -lt $images.Count) { $images[$i] } else { $null }
                world  = $world.name
            }
            $creatures += $creature
            
            if ($creature.image) {
                $allPaths += @{
                    id     = $creature.id
                    name   = $creature.name
                    rarity = $creature.rarity
                    world  = $creature.world
                    type   = 'main'
                    path   = $creature.image
                }
            }
        }
        
        [regex]::Matches($content, $spritePattern) | ForEach-Object {
            $allPaths += @{
                id     = 'sprite'
                name   = ''
                rarity = 'Unknown'
                world  = $world.name
                type   = "sprite:$($_.Groups[1].Value)"
                path   = $_.Groups[2].Value
            }
        }
        
        [regex]::Matches($content, $galleryPattern) | ForEach-Object {
            $allPaths += @{
                id     = 'gallery'
                name   = ''
                rarity = 'Unknown'
                world  = $world.name
                type   = "gallery:$($_.Groups[1].Value)"
                path   = $_.Groups[2].Value
            }
        }
        
        Write-Host "  $($world.name): $($ids.Count) creatures"
    }
    else {
        Write-Host "  $($world.name): File not found ($filePath)"
    }
}

Write-Host "`nTotal creatures: $($creatures.Count)"
Write-Host "Total paths: $($allPaths.Count)"

# 2. Scan Physical Files
Write-Host "`nScanning physical files..."

$creaturesDir = Join-Path $PROJECT_ROOT "images\creatures"
$productionFiles = @()

if (Test-Path $creaturesDir) {
    $productionFiles = Get-ChildItem -Path $creaturesDir -Recurse -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp)$' } | ForEach-Object {
        @{
            fullPath     = $_.FullName
            relativePath = $_.FullName.Replace("$PROJECT_ROOT\", "").Replace("\", "/")
            filename     = $_.Name
            size         = $_.Length
        }
    }
}

Write-Host "  creatures/: $($productionFiles.Count)"

# 3. Validation
Write-Host "`nVerifying paths..."

$results = @{
    ok       = @()
    mismatch = @()
    missing  = @()
    orphan   = @()
}

$matchedFiles = @{}

foreach ($entry in $allPaths) {
    $targetPath = $entry.path
    $found = $false
    
    foreach ($file in $productionFiles) {
        if ($file.relativePath -eq $targetPath) {
            $results.ok += $entry
            $matchedFiles[$file.fullPath] = $true
            $found = $true
            break
        }
    }
    
    if (-not $found) {
        $targetName = [System.IO.Path]::GetFileNameWithoutExtension($targetPath).ToLower()
        foreach ($file in $productionFiles) {
            $fileName = [System.IO.Path]::GetFileNameWithoutExtension($file.filename).ToLower()
            if ($fileName -eq $targetName) {
                $entry['actualPath'] = $file.relativePath
                $item = $entry.Clone()
                $item['matchType'] = 'name_only'
                $results.mismatch += $item
                $matchedFiles[$file.fullPath] = $true
                $found = $true
                break
            }
        }
    }
    
    if (-not $found) {
        $results.missing += $entry
    }
}

foreach ($file in $productionFiles) {
    if (-not $matchedFiles.ContainsKey($file.fullPath)) {
        $results.orphan += $file
    }
}

# 4. Report Generation
Write-Host "`n=== RESULTS ==="
Write-Host "OK: $($results.ok.Count)"
Write-Host "Mismatch: $($results.mismatch.Count)"
Write-Host "Missing: $($results.missing.Count)"
Write-Host "Orphan: $($results.orphan.Count)"

Write-Host "`nGenerating report..."
$md = @"
# Deep Resource Audit Report

**Date**: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
**Creatures**: $($creatures.Count)
**Paths**: $($allPaths.Count)

## Summary
| Status | Count |
|--------|-------|
| OK | $($results.ok.Count) |
| Mismatch | $($results.mismatch.Count) |
| Missing | $($results.missing.Count) |
| Orphan | $($results.orphan.Count) |

## Missing Assets (Top 50)
| Rarity | World | Type | Path |
|--------|-------|------|------|
"@

foreach ($e in ($results.missing | Select-Object -First 50)) {
    $md += "`n| $($e.rarity) | $($e.world) | $($e.type) | $($e.path) |"
}

$md += "`n`n... and more."

$md | Out-File -FilePath $OUTPUT_FILE -Encoding UTF8
$results | ConvertTo-Json -Depth 5 | Out-File -FilePath $JSON_FILE -Encoding UTF8

Write-Host "Report saved: $OUTPUT_FILE"
