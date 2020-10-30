// nav button
document.getElementById('nav-toggle').onclick = function() {
    toogleNav(null);
}

function toogleNav(e) {
    document.getElementById("nav-content").classList.toggle("hidden");
}

let menus = [
    document.getElementById("menu-home"),
    document.getElementById("menu-services"),
    document.getElementById("menu-contact-us"),
]

menus.forEach(e => {
    e.addEventListener('click', toogleNav);
});

window.addEventListener('scroll', onScroll);

function onScroll(e) {
    objRevealScroll();

    const home = document.getElementById("home");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact-us");

    if (isPartiallyInViewport(home)) {
        toogleActive(menus[0]);
    } else if (isPartiallyInViewport(services)) {
        toogleActive(menus[1]);
    } else if (isPartiallyInViewport(contact)) {
        toogleActive(menus[2]);
    }
}

// removes hash hrefs
window.addEventListener('hashchange', function(e) {
    window.history.pushState("", document.title, window.location.pathname);
});

function toogleActive(menu) {
    menus.forEach(element => {
        if (element != menu) {
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
            document.getElementsByTagName('html')[0].classList += "smoothscroll";
        }
    }, timeout);
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// covers more than 50% screen (only height wise)
function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    const mid = (window.innerHeight || document.documentElement.clientHeight) / 2;
    return rect.top < mid && rect.bottom > mid;
}

// object animations
const slideupobjs = [
    ...document.getElementsByClassName("slide-up")
];

const slidedownobjs = [
    ...document.getElementsByClassName("slide-down")
];

const slideleftobjs = [
    ...document.getElementsByClassName("slide-left")
];

const sliderightobjs = [
    ...document.getElementsByClassName("slide-right")
];

const fadeinobjs = [
    ...document.getElementsByClassName("fade-in")
];

[
    ...slideupobjs,
    ...slidedownobjs,
    ...slideleftobjs,
    ...sliderightobjs,
    ...fadeinobjs
].forEach(element => {
    element.classList.add("opacity-0");
    element.classList.remove("animate-slideup_fadein");
    element.classList.remove("animate-slidedown_fadein");
    element.classList.remove("animate-slideleft_fadein");
    element.classList.remove("animate-slideright_fadein");
    element.classList.remove("animate-fadein");
});

function objRevealScroll() {
    slideupobjs.forEach(element => {
        if (isInViewport(element)) {
            element.classList.remove("opacity-0");
            element.classList.add("animate-slideup_fadein");
        }
    });
    slidedownobjs.forEach(element => {
        if (isInViewport(element)) {
            element.classList.remove("opacity-0");
            element.classList.add("animate-slidedown_fadein");
        }
    });
    slideleftobjs.forEach(element => {
        if (isInViewport(element)) {
            element.classList.remove("opacity-0");
            element.classList.add("animate-slideleft_fadein");
        }
    });
    sliderightobjs.forEach(element => {
        if (isInViewport(element)) {
            element.classList.remove("opacity-0");
            element.classList.add("animate-slideright_fadein");
        }
    });
    fadeinobjs.forEach(element => {
        if (isInViewport(element)) {
            element.classList.remove("opacity-0");
            element.classList.add("animate-fadein");
        }
    });
}