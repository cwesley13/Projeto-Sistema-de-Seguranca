let time = 8000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#picture img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("img2")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("img2")
}

function start() {
    setInterval(() => {
        
        nextImage()
    }, time)
}

window.addEventListener("load", start)