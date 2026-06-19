function changeImage(imageFile, captionText) {
    document.getElementById("featured-image").src = imageFile;
    document.getElementById("caption").textContent = captionText;
}