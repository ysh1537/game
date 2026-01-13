# Deep Resource Audit Script (PowerShell Version)
# 한글 경로에서 Node.js 크래시 문제 우회

$ErrorActionPreference = "Stop"

$PROJECT_ROOT = "g:\다른 컴퓨터\PC\test\multiverse-creature-lab"
$OUTPUT_FILE = "$PROJECT_ROOT\DEEP_AUDIT_REPORT.md"
$JSON_FILE = "$PROJECT_ROOT\deep_audit_data.json"

Write-Host "============================================================"
Write-Host "Deep Resource Audit Starting..."
Write-Host "============================================================"
Write-Host "Project Root: $PROJECT_ROOT"

# 등급 우선순위
$RARITY_PRIORITY = @{
    'UR' = 7; 'SSR' = 6; 'SR' = 5; 'Special' = 4; 'Rare' = 3; 'Unique' = 2; 'Normal' = 1
}

# Data.js 파일들
$dataFiles = @(
    @{ name = 'Asgard'; file = 'AsgardData.js' },
    @{ name = 'Olympus'; file = 'OlympusData.js' },
    @{ name = 'ShangriLa'; file = 'ShangriLaData.js' },
    @{ name = 'Abyss'; file = 'AbyssData.js' },
    @{ name = 'Wild'; file = 'WildData.js' }
)

# 결과 저장용
$allPaths = @()
$creatures = @()

# 1. 모든 Data.js 파일 파싱
Write-Host "`nLoading creature data..."

foreach ($world in $dataFiles) {
    $filePath = "$PROJECT_ROOT\js\data\creatures\$($world.file)"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # id, name, rarity, image 추출
        $pattern = 'id:\s*["\x27]([^"\x27]+)["\x27]'
        $ids = [regex]::Matches($content, $pattern) | ForEach-Object { $_.Groups[1].Value }
        
        $namePattern = 'name:\s*["\x27]([^"\x27]+)["\x27]'
        $names = [regex]::Matches($content, $namePattern) | ForEach-Object { $_.Groups[1].Value }
        
        $rarityPattern = 'rarity:\s*(?:RANKS\.)?(\w+)'
        $rarities = [regex]::Matches($content, $rarityPattern) | ForEach-Object { $_.Groups[1].Value }
        
        $imagePattern = 'image:\s*["\x27]([^"\x27]+)["\x27]'
        $images = [regex]::Matches($content, $imagePattern) | ForEach-Object { $_.Groups[1].Value }
        
        # sprites 경로들 추출 (idle, joy, sad, angry, skill, victory, defeat)
        $spritePattern = '["\x27](idle|joy|sad|angry|skill|victory|defeat)["\x27]:\s*["\x27]([^"\x27]+)["\x27]'
        
        # gallery 경로들 추출
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
            
            # 메인 이미지 경로 추가
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
        
        # 스프라이트 경로 추가
        $spriteMatches = [regex]::Matches($content, $spritePattern)
        foreach ($match in $spriteMatches) {
            $allPaths += @{
                id     = 'sprite'
                name   = ''
                rarity = 'Unknown'
                world  = $world.name
                type   = "sprite:$($match.Groups[1].Value)"
                path   = $match.Groups[2].Value
            }
        }
        
        # 갤러리 경로 추가
        $galleryMatches = [regex]::Matches($content, $galleryPattern)
        foreach ($match in $galleryMatches) {
            $allPaths += @{
                id     = 'gallery'
                name   = ''
                rarity = 'Unknown'
                world  = $world.name
                type   = "gallery:$($match.Groups[1].Value)"
                path   = $match.Groups[2].Value
            }
        }
        
        Write-Host "  $($world.name): $($ids.Count) creatures"
    }
    else {
        Write-Host "  $($world.name): File not found"
    }
}

Write-Host "`nTotal creatures: $($creatures.Count)"
Write-Host "Total paths: $($allPaths.Count)"

# 2. 실제 파일 스캔
Write-Host "`nScanning physical files..."

$creaturesDir = "$PROJECT_ROOT\images\creatures"
$tempDir = "$PROJECT_ROOT\images\temp"
$archiveDir = "$PROJECT_ROOT\images\_unused_archive"

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

$tempFiles = @()
if (Test-Path $tempDir) {
    $tempFiles = Get-ChildItem -Path $tempDir -Recurse -File -ErrorAction SilentlyContinue | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp)$' } | ForEach-Object {
        @{
            fullPath     = $_.FullName
            relativePath = $_.FullName.Replace("$PROJECT_ROOT\", "").Replace("\", "/")
            filename     = $_.Name
            size         = $_.Length
        }
    }
}

$archiveFiles = @()
if (Test-Path $archiveDir) {
    $archiveFiles = Get-ChildItem -Path $archiveDir -Recurse -File -Include *.png, *.jpg, *.jpeg, *.webp -ErrorAction SilentlyContinue | ForEach-Object {
        @{
            fullPath     = $_.FullName
            relativePath = $_.FullName.Replace("$PROJECT_ROOT\", "").Replace("\", "/")
            filename     = $_.Name
            size         = $_.Length
        }
    }
}

Write-Host "  creatures/: $($productionFiles.Count)"
Write-Host "  temp/: $($tempFiles.Count)"
Write-Host "  archive/: $($archiveFiles.Count)"

# 3. 경로 검증 및 분류
Write-Host "`nVerifying paths..."

$results = @{
    ok          = @()
    mismatch    = @()
    missing     = @()
    recoverable = @()
    orphan      = @()
}

$matchedFiles = @{}

foreach ($entry in $allPaths) {
    $targetPath = $entry.path
    $found = $false
    
    # Production에서 완전 일치 찾기
    foreach ($file in $productionFiles) {
        if ($file.relativePath -eq $targetPath) {
            $results.ok += $entry
            $matchedFiles[$file.fullPath] = $true
            $found = $true
            break
        }
    }
    
    if (-not $found) {
        # 파일명만으로 찾기
        $targetName = [System.IO.Path]::GetFileNameWithoutExtension($targetPath).ToLower()
        foreach ($file in $productionFiles) {
            $fileName = [System.IO.Path]::GetFileNameWithoutExtension($file.filename).ToLower()
            if ($fileName -eq $targetName) {
                $entry['actualPath'] = $file.relativePath
                $entry['matchType'] = 'name_only'
                $results.mismatch += $entry
                $matchedFiles[$file.fullPath] = $true
                $found = $true
                break
            }
        }
    }
    
    if (-not $found) {
        # temp/archive에서 찾기
        $allRecovery = $tempFiles + $archiveFiles
        foreach ($file in $allRecovery) {
            $targetName = [System.IO.Path]::GetFileNameWithoutExtension($targetPath).ToLower()
            $fileName = [System.IO.Path]::GetFileNameWithoutExtension($file.filename).ToLower()
            if ($fileName -eq $targetName) {
                $entry['recoveryPath'] = $file.relativePath
                $results.recoverable += $entry
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

# 4. 고아 파일 찾기
foreach ($file in $productionFiles) {
    if (-not $matchedFiles.ContainsKey($file.fullPath)) {
        $results.orphan += $file
    }
}

# 5. 결과 출력
Write-Host "`n=== RESULTS ==="
Write-Host "OK: $($results.ok.Count)"
Write-Host "Mismatch: $($results.mismatch.Count)"
Write-Host "Missing: $($results.missing.Count)"
Write-Host "Recoverable: $($results.recoverable.Count)"
Write-Host "Orphan: $($results.orphan.Count)"

# 6. 리포트 생성
Write-Host "`nGenerating report..."

$total = $allPaths.Count
$md = @"
# Deep Resource Audit Report

**Date**: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
**Creatures**: $($creatures.Count)
**Paths**: $total

## Summary

| Status | Count | Ratio |
|--------|-------|-------|
| OK | $($results.ok.Count) | $([math]::Round($results.ok.Count / $total * 100, 1))% |
| Mismatch | $($results.mismatch.Count) | $([math]::Round($results.mismatch.Count / $total * 100, 1))% |
| Missing | $($results.missing.Count) | $([math]::Round($results.missing.Count / $total * 100, 1))% |
| Recoverable | $($results.recoverable.Count) | $([math]::Round($results.recoverable.Count / $total * 100, 1))% |
| Orphan | $($results.orphan.Count) | - |

---

## UR/SSR Priority (Missing)

| Rarity | ID | Name | Type | Path |
|--------|-----|------|------|------|
"@

# UR/SSR 누락 항목 추가 (상위 50개)
$highPriority = $results.missing | Where-Object { $_.rarity -eq 'UR' -or $_.rarity -eq 'SSR' } | Select-Object -First 50
foreach ($e in $highPriority) {
    $md += "`n| $($e.rarity) | $($e.id) | $($e.name) | $($e.type) | $($e.path) |"
}

$md += @"

---

## Mismatch ($($results.mismatch.Count))

| Rarity | ID | Name | Type | Expected | Actual |
|--------|-----|------|------|----------|--------|
"@

foreach ($e in ($results.mismatch | Select-Object -First 100)) {
    $md += "`n| $($e.rarity) | $($e.id) | $($e.name) | $($e.type) | $($e.path) | $($e.actualPath) |"
}

$md += @"

---

## Recoverable ($($results.recoverable.Count))

| Rarity | ID | Name | Type | Recovery Path |
|--------|-----|------|------|---------------|
"@

foreach ($e in ($results.recoverable | Select-Object -First 50)) {
    $md += "`n| $($e.rarity) | $($e.id) | $($e.name) | $($e.type) | $($e.recoveryPath) |"
}

$md += @"

---

## Orphan Files ($($results.orphan.Count))

| Filename | Path | Size |
|----------|------|------|
"@

foreach ($e in $results.orphan) {
    $sizeKB = [math]::Round($e.size / 1024, 1)
    $md += "`n| $($e.filename) | $($e.relativePath) | ${sizeKB}KB |"
}

$md += @"

---

## All Missing ($($results.missing.Count))

| Rarity | World | ID | Name | Type |
|--------|-------|-----|------|------|
"@

foreach ($e in $results.missing) {
    $md += "`n| $($e.rarity) | $($e.world) | $($e.id) | $($e.name) | $($e.type) |"
}

# 파일 저장
$md | Out-File -FilePath $OUTPUT_FILE -Encoding UTF8
Write-Host "Report saved: $OUTPUT_FILE"

# JSON 저장
$results | ConvertTo-Json -Depth 5 | Out-File -FilePath $JSON_FILE -Encoding UTF8
Write-Host "JSON saved: $JSON_FILE"

Write-Host "`n============================================================"
Write-Host "Audit Complete!"
Write-Host "============================================================"
