// nav button
document.getElementById('nav-toggle').onclick = function () {
    toogleNav(null);
}

function toogleNav(e) {
    document.getElementById("nav-content").classList.toggle("hidden");
}

let menus = [
    document.getElementById("menu-home"),
    document.getElementById("menu-services"),
    document.getElementById("menu-contact-us"),
    document.getElementById("menu-portfolio"),
]

menus.forEach(e => {
    e.addEventListener('click', toogleNav);
});

window.addEventListener('scroll', () => {
    const home = document.getElementById("home");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact-us");
    const portfolio = document.getElementById("portfolio");

    if (isPartiallyInViewport(home)) {
        toogleActive(menus[0]);
    } else if (isPartiallyInViewport(services)) {
        toogleActive(menus[1]);
    } else if (isPartiallyInViewport(contact)) {
        toogleActive(menus[2]);
    } else if (isPartiallyInViewport(portfolio)) {
        toogleActive(menus[3]);
    }
});

// removes hash hrefs
window.addEventListener('hashchange', function (e) {
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
window.onload = function () {
    loadDynamicContent(()=>{
        initiateAnimator();
        document.getElementsByTagName("BODY")[0].classList.add("body-default");
        fadeOut(document.getElementById("preloader"), 50);
    });
}

function fadeOut(element, timeout) {
    var fadeEffect = setInterval(function () {
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
    return rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + window.screen.availHeight / 6);
}

// covers more than 50% screen (only height wise)
function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    const mid = (window.innerHeight || document.documentElement.clientHeight) / 2;
    return rect.top < mid && rect.bottom > mid;
}

// contact us
const cnbdy = document.getElementById("cu-body");
const cnsub = document.getElementById("cu-subj");
const cnbtn = document.getElementById("cu-send");

cnbtn.addEventListener('click', (e) => {
    window.open(encodeURI(
        'mailto:info@theadvertizers.com?subject=' +
        ((cnsub.value == "") ? cnsub.placeholder : cnsub.value) +
        '&body=' + cnbdy.value
    ));
});

// Dynamic content
function loadDynamicContent(onCompleteListener) {
    function addService(service) {
        /* <div class="card flex flex-col items-center w-64 max-h-16 p-4 slide-up my-6 mx-4"> */
        const card = document.createElement("DIV");
        card.classList = "card flex flex-col items-center w-64 max-h-16 p-4 slide-up my-6 mx-4 bg-secondary";

        // <div class="h-12 w-12 text-accent mb-4">
        const icon = document.createElement("DIV");
        icon.classList = "h-12 w-12 text-accent mb-4";
        let svg = getIconElement(service.icon);
        if(svg != null)
            icon.appendChild(svg);
        card.appendChild(icon);

        // <h6 class="text-secondary font-semibold text-lg text-center mb-4">Social Media Marketing</h6>
        const heading = document.createElement("H6");
        heading.classList = "text-primary font-semibold text-lg text-center mb-4";
        heading.innerText = service.title;
        card.appendChild(heading);

        // <p class="text-secondary overflow-hidden">Sample Description</p>
        const desc = document.createElement("P");
        desc.classList = "text-primary overflow-hidden";
        desc.innerText = service.desc;
        card.appendChild(desc);

        document.getElementById("services-grid").appendChild(card);
    }

    function addPortfolio(portfolio) {
        // TODO: code
    }

    function readJSON(path, callback) {
        var request = new XMLHttpRequest();
        request.open("GET", path, false);
        request.send(null)
        callback(JSON.parse(request.responseText));
    }

    function getIconElement(name) {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "./data/icon/" + name, false);
        xhr.overrideMimeType("image/svg+xml");
        xhr.send(null);
        return xhr.responseXML.documentElement;
    }

    readJSON("./data/services.json", (data) => {
        data.forEach(service => { addService(service) });
        readJSON("./data/portfolio.json", (data) => {
            addPortfolio(data);
            onCompleteListener();
        });
    });
}


function initiateAnimator() {
    window.addEventListener('scroll', objRevealScroll);
    window.addEventListener('scroll', shadowScroll);

    // object animations
    const slideupobjs = [...document.getElementsByClassName("slide-up")];
    const slidedownobjs = [...document.getElementsByClassName("slide-down")];
    const slideleftobjs = [...document.getElementsByClassName("slide-left")];
    const sliderightobjs = [...document.getElementsByClassName("slide-right")];
    const fadeinobjs = [...document.getElementsByClassName("fade-in")];

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

    //shadow scroll animator
    const shadowElements = [...document.getElementsByClassName("scrolling-shadow")];
    const textShadow = [...document.getElementsByClassName("scrolling-shadow-text")];

    const hoffsetout = 150;
    const hoffsetin = 150;
    const navh = 72;

    textShadow.forEach(e => {
        const r = e.getBoundingClientRect();
        e.style.textShadow =
            "0px " +
            hoffsetout * ((r.top >= (window.innerHeight || document.documentElement.clientHeight)) ? 1 : -1) +
            "px 6px rgba(0, 0, 0, 0.15)";
    });

    shadowElements.forEach(e => {
        const r = e.getBoundingClientRect();
        e.style.boxShadow =
            "inset 0px " +
            hoffsetin * ((r.top >= (window.innerHeight || document.documentElement.clientHeight)) ? 1 : -1) +
            "px 12px 6px rgba(0, 0, 0, 0.15)";
    });

    function shadowScroll() {
        shadowElements.forEach(e => {
            const r = e.getBoundingClientRect();
            var winp = (window.innerHeight || document.documentElement.clientHeight);
            var winh = window.screen.availHeight - navh;
            var midw = winh / 2;
            var mide = (r.bottom + r.top) / 2;
            if (mide <= winp - navh && mide >= (winp - winh)) {
                var offset = (-((Math.abs(mide - winp) / (midw)) - 1));
                e.style.boxShadow =
                    "inset 0px " + offset * hoffsetin + "px 12px 6px rgba(0, 0, 0, 0.15)";
            }
        });
        textShadow.forEach(e => {
            const r = e.getBoundingClientRect();
            var winp = (window.innerHeight || document.documentElement.clientHeight);
            var winh = window.screen.availHeight - navh;
            var midw = winh / 2;
            var mide = (r.bottom + r.top) / 2;
            if (mide <= winp - navh && mide >= (winp - winh)) {
                var offset = (-((Math.abs(mide - winp) / (midw)) - 1));
                e.style.textShadow =
                    "0px " + offset * hoffsetout + "px 6px rgba(0, 0, 0, 0.15)";
            }
        });
    }
}