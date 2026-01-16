
$path = "C:\Users\yesol_asus\.gemini\antigravity\brain\08d40a2f-b773-4280-ad0a-463daa587c0c\original_hades.png"
if (Test-Path $path) {
    $bytes = Get-Content -Path $path -Encoding Byte -TotalCount 2048
    $string = [System.Text.Encoding]::ASCII.GetString($bytes)
    # Look for common prompt markers
    if ($string -match "parameters") {
        Write-Host "Found parameters:"
        # Extract a chunk of text around "parameters"
        $regex = [regex]"(parameters.*?)ID" 
        $match = $regex.Match($string)
        if ($match.Success) {
            Write-Host $match.Value
        }
        else {
            # Fallback crude dump
            Write-Host $string
        }
    }
    else {
        Write-Host "No explicit 'parameters' keyword found in header. Dumping first 1000 chars:"
        Write-Host $string.Substring(0, [math]::Min(1000, $string.Length))
    }
}
