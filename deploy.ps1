$winrarPath = "C:\Program Files\WinRAR\WinRAR.exe"
$filesToZip = @("resources\", "index.html", "ads.txt", "secret.txt")

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$outputZip = "Portal-$timestamp.zip" # Output ZIP file name with timestamp

$flags = "a -afzip $outputZip $($filesToZip -join ' ')"

Start-Process -FilePath $winrarPath -ArgumentList $flags -Wait 
Write-Host "Zip archive created: $outputZip"