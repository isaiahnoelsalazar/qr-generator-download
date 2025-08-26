fetch("https://isaiahnoelsalazar.github.io/qr-generator-download/QRGenerator.apk")
.then(response => {
    blob = response.blob();
    return blob;
})
.then(blob => {
    document.getElementById("filesize").textContent = (blob.size / 1024 / 1024).toFixed(2) + " MB";
});