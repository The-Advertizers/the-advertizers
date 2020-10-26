// nav button
document.getElementById('nav-toggle').onclick = function() {
    document.getElementById("nav-content").classList.toggle("hidden");
}

// preloader
window.onload = function() {
    document.getElementsByTagName("BODY")[0].classList.add("body-default");
    fadeOut(document.getElementById("preloader"), 50);
}

function fadeOut(element, timeout) {
    var fadeEffect = setInterval(function() {
        if (!element.style.opacity) {
            element.style.opacity = 1;
        }
        if (element.style.opacity > 0) {
            element.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            document.getElementById("preloader").remove();
        }
    }, timeout);
}