$PROJECT_ROOT = Resolve-Path ".."
$DATA_DIR = Join-Path $PROJECT_ROOT "js\data\creatures"
$IMAGE_DIR = Join-Path $PROJECT_ROOT "images\creatures"
$WORLDS = @("Asgard", "Olympus", "Abyss", "ShangriLa", "Wild")

Write-Host "--- Starting Asset Normalization (Removing 'god_' prefix) ---"
Write-Host "Project Root: $PROJECT_ROOT"

# --- Step 1: Update Data Files ---
Write-Host "`n--- Step 1: Updating World Data Files ---"

foreach ($world in $WORLDS) {
    $filePath = Join-Path $DATA_DIR "${world}Data.js"
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        $originalContent = $content

        # Regex 1: Fix IDs (id: "god_name" -> id: "name")
        $content = $content -replace '(id:\s*["''])god_([^"'']*)(["''])', '$1$2$3'

        # Regex 2: Fix Image Paths (src: ".../creature_god_name.png" -> src: ".../creature_name.png")
        $content = $content -replace '(["''])images/creatures/([^/]+)/creature_god_([^"'']*)(["''])', '$1images/creatures/$2/creature_$3$4'

        if ($content -ne $originalContent) {
            Set-Content -Path $filePath -Value $content -Encoding UTF8
            Write-Host "Updated ${world}Data.js"
        }
        else {
            Write-Host "No legacy patterns found in ${world}Data.js"
        }
    }
    else {
        Write-Warning "Data file not found: $filePath"
    }
}

# --- Step 2: Rename Image Files ---
Write-Host "`n--- Step 2: Renaming Image Files ---"

if (Test-Path $IMAGE_DIR) {
    # Find all files with "creature_god_" in the name recursively
    $files = Get-ChildItem -Path $IMAGE_DIR -Recurse -File | Where-Object { $_.Name -like "*creature_god_*" }
    
    foreach ($file in $files) {
        $newName = $file.Name -replace "creature_god_", "creature_"
        $newPath = Join-Path $file.Directory.FullName $newName
        
        if (Test-Path $newPath) {
            Write-Warning "Collision detected: Cannot rename $($file.Name) to $newName. Target exists."
        }
        else {
            try {
                Rename-Item -Path $file.FullName -NewName $newName -ErrorAction Stop
                Write-Host "Renamed: $($file.Name) -> $newName"
            }
            catch {
                Write-Error "Failed to rename $($file.Name): $_"
            }
        }
    }
}
else {
    Write-Error "Image directory not found: $IMAGE_DIR"
}

Write-Host "`n--- Normalization Complete ---"
