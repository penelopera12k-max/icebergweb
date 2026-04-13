$targetDir = "public/images/site"
if (!(Test-Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir
}
$images = @(
    @{ url = "https://www.iceberg.com.co/img/logo_full_transp.gif"; name = "logo.gif" },
    @{ url = "https://www.iceberg.com.co/img/6.jpg"; name = "nosostros.jpg" },
    @{ url = "https://www.iceberg.com.co/img/1.jpg"; name = "1.jpg" },
    @{ url = "https://www.iceberg.com.co/img/2.jpg"; name = "2.jpg" },
    @{ url = "https://www.iceberg.com.co/img/3.jpg"; name = "3.jpg" },
    @{ url = "https://www.iceberg.com.co/img/5.jpg"; name = "5.jpg" },
    @{ url = "https://www.iceberg.com.co/img/6.jpg"; name = "6.jpg" },
    @{ url = "https://www.iceberg.com.co/img/15.jpg"; name = "15.jpg" }
)
foreach ($img in $images) {
    $path = Join-Path $targetDir $img.name
    Write-Host "Downloading $($img.url) to $path..."
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $path -TimeoutSec 30
    } catch {
        Write-Host "Failed to download $($img.url)"
    }
}
