# Deep Audit - 상대 경로만 사용
$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "============================================================"
Write-Host "Deep Resource Audit Starting..."
Write-Host "============================================================"

# 현재 디렉토리 기준으로 작업
$dataFiles = @(
    @{ name = 'Asgard'; file = 'js/data/creatures/AsgardData.js' },
    @{ name = 'Olympus'; file = 'js/data/creatures/OlympusData.js' },
    @{ name = 'ShangriLa'; file = 'js/data/creatures/ShangriLaData.js' },
    @{ name = 'Abyss'; file = 'js/data/creatures/AbyssData.js' },
    @{ name = 'Wild'; file = 'js/data/creatures/WildData.js' }
)

$allPaths = [System.Collections.ArrayList]@()
$creatures = [System.Collections.ArrayList]@()

Write-Host "Loading creature data..."

foreach ($world in $dataFiles) {
    $filePath = $world.file
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # id 추출
        $pattern = 'id:\s*["\x27]([^"\x27]+)["\x27]'
        $ids = [regex]::Matches($content, $pattern) | ForEach-Object { $_.Groups[1].Value }
        
        # name 추출
        $namePattern = 'name:\s*["\x27]([^"\x27]+)["\x27]'
        $names = [regex]::Matches($content, $namePattern) | ForEach-Object { $_.Groups[1].Value }
        
        # rarity 추출
        $rarityPattern = 'rarity:\s*(?:RANKS\.)?(\w+)'
        $rarities = [regex]::Matches($content, $rarityPattern) | ForEach-Object { $_.Groups[1].Value }
        
        # image 추출
        $imagePattern = 'image:\s*["\x27]([^"\x27]+)["\x27]'
        $images = [regex]::Matches($content, $imagePattern) | ForEach-Object { $_.Groups[1].Value }
        
        for ($i = 0; $i -lt $ids.Count; $i++) {
            $creature = @{
                id     = $ids[$i]
                name   = if ($i -lt $names.Count) { $names[$i] } else { "Unknown" }
                rarity = if ($i -lt $rarities.Count) { $rarities[$i] } else { "Unknown" }
                image  = if ($i -lt $images.Count) { $images[$i] } else { $null }
                world  = $world.name
            }
            [void]$creatures.Add($creature)
            
            if ($creature.image) {
                [void]$allPaths.Add(@{
                        id     = $creature.id
                        name   = $creature.name
                        rarity = $creature.rarity
                        world  = $creature.world
                        type   = 'main'
                        path   = $creature.image
                    })
            }
        }
        
        # sprites 추출
        $spritePattern = '["\x27](idle|joy|sad|angry|skill|victory|defeat)["\x27]:\s*["\x27]([^"\x27]+)["\x27]'
        $spriteMatches = [regex]::Matches($content, $spritePattern)
        foreach ($match in $spriteMatches) {
            [void]$allPaths.Add(@{
                    id     = 'sprite'
                    name   = ''
                    rarity = 'Unknown'
                    world  = $world.name
                    type   = "sprite:$($match.Groups[1].Value)"
                    path   = $match.Groups[2].Value
                })
        }
        
        # gallery 추출
        $galleryPattern = '["\x27](lv[123])["\x27]:\s*["\x27]([^"\x27]+)["\x27]'
        $galleryMatches = [regex]::Matches($content, $galleryPattern)
        foreach ($match in $galleryMatches) {
            [void]$allPaths.Add(@{
                    id     = 'gallery'
                    name   = ''
                    rarity = 'Unknown'
                    world  = $world.name
                    type   = "gallery:$($match.Groups[1].Value)"
                    path   = $match.Groups[2].Value
                })
        }
        
        Write-Host "  $($world.name): $($ids.Count) creatures"
    }
}

Write-Host "Total creatures: $($creatures.Count)"
Write-Host "Total paths: $($allPaths.Count)"

# 실제 파일 스캔
Write-Host "Scanning physical files..."

$productionFiles = @()
if (Test-Path "images/creatures") {
    $productionFiles = Get-ChildItem -Path "images/creatures" -Recurse -File -Include *.png, *.jpg, *.jpeg, *.webp | ForEach-Object {
        @{
            fullPath     = $_.FullName
            relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace("\", "/")
            filename     = $_.Name
            size         = $_.Length
        }
    }
}

$tempFiles = @()
if (Test-Path "images/temp") {
    $tempFiles = Get-ChildItem -Path "images/temp" -Recurse -File -Include *.png, *.jpg, *.jpeg, *.webp -ErrorAction SilentlyContinue | ForEach-Object {
        @{
            fullPath     = $_.FullName
            relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace("\", "/")
            filename     = $_.Name
            size         = $_.Length
        }
    }
}

$archiveFiles = @()
if (Test-Path "images/_unused_archive") {
    $archiveFiles = Get-ChildItem -Path "images/_unused_archive" -Recurse -File -Include *.png, *.jpg, *.jpeg, *.webp -ErrorAction SilentlyContinue | ForEach-Object {
        @{
            fullPath     = $_.FullName
            relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace("\", "/")
            filename     = $_.Name
            size         = $_.Length
        }
    }
}

Write-Host "  creatures/: $($productionFiles.Count)"
Write-Host "  temp/: $($tempFiles.Count)"  
Write-Host "  archive/: $($archiveFiles.Count)"

# 경로 검증 및 분류
Write-Host "Verifying paths..."

$results = @{
    ok          = [System.Collections.ArrayList]@()
    mismatch    = [System.Collections.ArrayList]@()
    missing     = [System.Collections.ArrayList]@()
    recoverable = [System.Collections.ArrayList]@()
    orphan      = [System.Collections.ArrayList]@()
}

$matchedFiles = @{}

foreach ($entry in $allPaths) {
    $targetPath = $entry.path
    $found = $false
    
    # Production에서 완전 일치
    foreach ($file in $productionFiles) {
        if ($file.relativePath -eq $targetPath) {
            [void]$results.ok.Add($entry)
            $matchedFiles[$file.fullPath] = $true
            $found = $true
            break
        }
    }
    
    if (-not $found) {
        # 파일명으로 매칭
        $targetName = [System.IO.Path]::GetFileNameWithoutExtension($targetPath).ToLower()
        foreach ($file in $productionFiles) {
            $fileName = [System.IO.Path]::GetFileNameWithoutExtension($file.filename).ToLower()
            if ($fileName -eq $targetName) {
                $entry['actualPath'] = $file.relativePath
                [void]$results.mismatch.Add($entry)
                $matchedFiles[$file.fullPath] = $true
                $found = $true
                break
            }
        }
    }
    
    if (-not $found) {
        # recovery에서 찾기
        $allRecovery = $tempFiles + $archiveFiles
        foreach ($file in $allRecovery) {
            $targetName = [System.IO.Path]::GetFileNameWithoutExtension($targetPath).ToLower()
            $fileName = [System.IO.Path]::GetFileNameWithoutExtension($file.filename).ToLower()
            if ($fileName -eq $targetName) {
                $entry['recoveryPath'] = $file.relativePath
                [void]$results.recoverable.Add($entry)
                $matchedFiles[$file.fullPath] = $true
                $found = $true
                break
            }
        }
    }
    
    if (-not $found) {
        [void]$results.missing.Add($entry)
    }
}

# 고아 파일
foreach ($file in $productionFiles) {
    if (-not $matchedFiles.ContainsKey($file.fullPath)) {
        [void]$results.orphan.Add($file)
    }
}

# 결과 출력
Write-Host ""
Write-Host "=== RESULTS ==="
Write-Host "OK: $($results.ok.Count)"
Write-Host "Mismatch: $($results.mismatch.Count)"
Write-Host "Missing: $($results.missing.Count)"
Write-Host "Recoverable: $($results.recoverable.Count)"
Write-Host "Orphan: $($results.orphan.Count)"

# 리포트 생성
$total = $allPaths.Count
$now = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'

$md = "# Deep Resource Audit Report`n`n"
$md += "**Date**: $now`n"
$md += "**Creatures**: $($creatures.Count)`n"
$md += "**Paths**: $total`n`n"
$md += "## Summary`n`n"
$md += "| Status | Count | Ratio |`n"
$md += "|--------|-------|-------|`n"
$md += "| OK | $($results.ok.Count) | $([math]::Round($results.ok.Count / $total * 100, 1))% |`n"
$md += "| Mismatch | $($results.mismatch.Count) | $([math]::Round($results.mismatch.Count / $total * 100, 1))% |`n"
$md += "| Missing | $($results.missing.Count) | $([math]::Round($results.missing.Count / $total * 100, 1))% |`n"
$md += "| Recoverable | $($results.recoverable.Count) | $([math]::Round($results.recoverable.Count / $total * 100, 1))% |`n"
$md += "| Orphan | $($results.orphan.Count) | - |`n`n"

$md += "---`n`n## UR/SSR Priority (Missing)`n`n"
$md += "| Rarity | ID | Name | Type | Path |`n"
$md += "|--------|-----|------|------|------|`n"

$highPriority = $results.missing | Where-Object { $_.rarity -eq 'UR' -or $_.rarity -eq 'SSR' } | Select-Object -First 50
foreach ($e in $highPriority) {
    $md += "| $($e.rarity) | $($e.id) | $($e.name) | $($e.type) | $($e.path) |`n"
}

$md += "`n---`n`n## Mismatch ($($results.mismatch.Count))`n`n"
$md += "| Rarity | ID | Name | Type | Expected | Actual |`n"
$md += "|--------|-----|------|------|----------|--------|`n"
foreach ($e in ($results.mismatch | Select-Object -First 100)) {
    $md += "| $($e.rarity) | $($e.id) | $($e.name) | $($e.type) | $($e.path) | $($e.actualPath) |`n"
}

$md += "`n---`n`n## Recoverable ($($results.recoverable.Count))`n`n"
$md += "| Rarity | ID | Name | Type | Recovery Path |`n"
$md += "|--------|-----|------|------|---------------|`n"
foreach ($e in ($results.recoverable | Select-Object -First 50)) {
    $md += "| $($e.rarity) | $($e.id) | $($e.name) | $($e.type) | $($e.recoveryPath) |`n"
}

$md += "`n---`n`n## Orphan Files ($($results.orphan.Count))`n`n"
$md += "| Filename | Path | Size |`n"
$md += "|----------|------|------|`n"
foreach ($e in $results.orphan) {
    $sizeKB = [math]::Round($e.size / 1024, 1)
    $md += "| $($e.filename) | $($e.relativePath) | ${sizeKB}KB |`n"
}

$md += "`n---`n`n## All Missing ($($results.missing.Count))`n`n"
$md += "| Rarity | World | ID | Name | Type |`n"
$md += "|--------|-------|-----|------|------|`n"
foreach ($e in $results.missing) {
    $md += "| $($e.rarity) | $($e.world) | $($e.id) | $($e.name) | $($e.type) |`n"
}

$md | Out-File -FilePath "DEEP_AUDIT_REPORT.md" -Encoding UTF8
Write-Host "Report saved: DEEP_AUDIT_REPORT.md"

$results | ConvertTo-Json -Depth 5 | Out-File -FilePath "deep_audit_data.json" -Encoding UTF8
Write-Host "JSON saved: deep_audit_data.json"

Write-Host "`n============================================================"
Write-Host "Audit Complete!"
Write-Host "============================================================"
