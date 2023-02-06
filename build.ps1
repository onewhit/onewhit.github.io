Write-Output "Building the vite app"

npm run build --prefix "vite-app"

if (Test-Path "docs") {
    Remove-Item "docs" -Recurse -Force
    Write-Output "Deleted old `"docs`" folder"
}

Move-Item "vite-app/dist" "docs"
Write-Output "Moved vite dist to top level and renamed to `"docs`""