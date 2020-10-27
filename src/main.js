// nav button
document.getElementById('nav-toggle').onclick = function() {
    document.getElementById("nav-content").classList.toggle("hidden");
}

const menus = [
    document.getElementById("menu-home"),
    document.getElementById("menu-services"), 
    document.getElementById("menu-contact-us"), 
]

window.addEventListener('scroll', function(e) {
    const home = document.getElementById("home");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact-us");

    if(isPartiallyInViewport(home)){
        toogleActive(menus[0]);
    } else if (isPartiallyInViewport(services)) {
       toogleActive(menus[1]);
    } else if (isPartiallyInViewport(contact)){
        toogleActive(menus[2]);
    }
});
// removes scroll hash hrefs
window.addEventListener('hashchange', function(e){
    window.history.pushState("", document.title, window.location.pathname); 
});

function toogleActive(menu){
    menus.forEach(element => {
        if(element != menu){
            element.classList.remove("active");
            element.classList.add("inactive");
        }
    });
    menu.classList.remove("inactive");
    menu.classList.add("active");
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

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// more than 50%
function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    const mid = (window.innerHeight || document.documentElement.clientHeight) / 2;
    //console.log(rect);
    return (
        rect.top < mid &&
        rect.left >= 0 &&
        rect.bottom > mid &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
