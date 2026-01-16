
# Fix Mismatches based on deep_audit_data.json
$ErrorActionPreference = "Stop"
$json = Get-Content "deep_audit_data.json" -Raw | ConvertFrom-Json

$mismatches = $json.mismatch

foreach ($item in $mismatches) {
    $expectedRaw = $item.path
    $actualRaw = $item.actualPath
    
    # Paths in JSON might use forward slashes. Ensure system uses backslashes if needed, primarily for display.
    # PowerShell commands usually handle forward slashes fine.
    
    $source = $actualRaw
    $dest = $expectedRaw
    
    Write-Host "Moving: $source -> $dest"
    
    # Check if logic is sound: mismatched means file exists at $source and we want it at $dest.
    
    if (Test-Path $source) {
        $destDir = Split-Path -Parent $dest
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Force -Path $destDir | Out-Null
        }
        
        Move-Item -Path $source -Destination $dest -Force
        Write-Host "  Success"
    } else {
        Write-Warning "Source file not found: $source"
    }
}
Write-Host "Mismatch fix complete."
