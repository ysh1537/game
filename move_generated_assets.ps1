
$sourceDir = "C:\Users\yesol_asus\.gemini\antigravity\brain\08d40a2f-b773-4280-ad0a-463daa587c0c"
$destDir = ".\images\temp"
$files = @(
    "creature_poseidon_victory",
    "creature_poseidon_defeat",
    "creature_hades_victory",
    "creature_hades_defeat",
    "creature_hades_gallery_lv1",
    "creature_hades_gallery_lv2",
    "creature_hades_gallery_lv3"
)

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

foreach ($baseName in $files) {
    # Find the file with timestamp
    $sourceFile = Get-ChildItem -Path $sourceDir -Filter "${baseName}_*.png" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    
    if ($sourceFile) {
        $destPath = Join-Path $destDir "${baseName}.png"
        Write-Host "Copying $($sourceFile.Name) to $destPath"
        Copy-Item -Path $sourceFile.FullName -Destination $destPath -Force
    }
    else {
        Write-Warning "Source file for $baseName not found in $sourceDir"
    }
}
