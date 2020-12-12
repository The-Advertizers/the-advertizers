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

    //document.getElementById("menu-portfolio"),
]

menus.forEach(e => {
    e.addEventListener('click', toogleNav);
});

function scrollToServices() {
    services.scrollIntoView();
}

window.addEventListener('scroll', () => {
    const home = document.getElementById("home");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact-us");
    //const portfolio = document.getElementById("portfolio");

    if (isPartiallyInViewport(home)) {
        toogleActive(menus[0]);
    } else if (isPartiallyInViewport(services)) {
        toogleActive(menus[1]);
    } else if (isPartiallyInViewport(contact)) {
        toogleActive(menus[2]);
    // } else if (isPartiallyInViewport(portfolio)) {
    //     toogleActive(menus[3]);
    }
});

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
    loadDynamicContent(() => {
        initiateAnimator();
        document.getElementsByTagName("BODY")[0].classList.add("body-default");
        fadeOut(document.getElementById("preloader"), 50);
    });
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

    const contactSectionElement = document.getElementById("contact-us");

    function removeAnimator(elementInnerHtml){
        elementInnerHtml = elementInnerHtml.replace(/slide-down/g, "animate-slidedown_fadein");
        elementInnerHtml = elementInnerHtml.replace(/slide-up/g, "animate-slideup_fadein");
        elementInnerHtml = elementInnerHtml.replace(/slide-left/g, "animate-slideleft_fadein");
        elementInnerHtml = elementInnerHtml.replace(/slide-right/g, "animate-slideright_fadein");
        elementInnerHtml = elementInnerHtml.replace(/fade-in/g, "animate-fadein");
        elementInnerHtml = elementInnerHtml.replace(/opacity-0/g, "");
        return elementInnerHtml;
    }

    function onServiceClick(service){
        //TODO: open overlay window and show details
        const frame = document.createElement("DIV");
        // frame.classList = "fixed top-0 left-0 right-0 bottom-0 max-w-screen w-full min-h-screen z-50 bg-secondary overflow-y-auto overflow-x-hidden";
        frame.classList = "fixed top-0 left-0 right-0 bottom-0 w-screen max-h-screen min-h-screen lg:min-h-0 z-50 bg-primary overflow-x-hidden overflow-y-auto";
        // frame.style = "height: 700px;";
        const div = document.createElement("DIV");
        div.classList = "relative";

        const nav = document.createElement("DIV");
        nav.classList = "sticky top-0 flex items-center w-full p-8 bg-secondary h-16 top-0 left-0 right-0 ";
        nav.style = "z-index:99;";
        const close = document.createElement("div");
        close.innerHTML = "<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\r\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" \/>\r\n<\/svg>";
        close.classList = "w-8 h-8 p-1 cursor-pointer text-primary hover:text-accent"
        close.addEventListener('click', (e) => {
            document.body.classList -= "noScrollBar noscroll";
                document.body.removeChild(frame);
        });
        const logo = document.createElement("img");
        logo.src = "./assets/img/logo-white.png";
        logo.classList = "w-auto ml-4 h-10 justify-self-center";
        logo.addEventListener('click', (e) => {
            document.body.classList -= "noScrollBar noscroll";
                document.body.removeChild(frame);
        });
        nav.appendChild(close);
        nav.appendChild(logo);
        div.appendChild(nav);

        const detailsSection = document.createElement("DIV");
        detailsSection.classList = "min-h-screen w-full";
        div.appendChild(detailsSection);

        const contactSection = document.createElement("DIV");
        contactSection.style = "background-image: url(./assets/img/World_map.png); height: 100%;background-repeat: no-repeat; background-position: center bottom; background-size: cover;"
        contactSection.classList = "relative flex flex-col bg-fixed device-width min-h-screen bg-secondary";
        contactSection.innerHTML = removeAnimator(contactSectionElement.innerHTML);

        div.appendChild(contactSection);
        frame.appendChild(div);

        document.body.classList = "noScrollBar noscroll";
        document.body.appendChild(frame);
    }

    function addService(service) {
        /* <div class="card flex flex-col items-center w-64 max-h-16 p-4 slide-up my-6 mx-4"> */
        const card = document.createElement("DIV");
        card.classList = "card "/*cursor-pointer*/ + " flex flex-col items-center max-h-16 p-4 slide-up my-6 mx-4 bg-secondary";
        card.style = "width: 20rem";
        // TODO: implement service on click
        // card.addEventListener('click', (e) => {
        //     onServiceClick(service);
        // });

        // <div class="h-12 w-12 text-accent mb-4">
        const icon = document.createElement("DIV");
        icon.classList = "h-12 w-12 text-accent mb-4";
        let svg = getIconElement(service.icon);
        if (svg != null)
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
        // TODO: add portfolio
    }

    function readJSON(path, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(request.responseText));
            }
        }
        request.open("GET", path, false);
        request.send(null)
    }

    function getIconElement(name) {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "./data/icon/" + name, false);
        xhr.overrideMimeType("image/svg+xml");
        xhr.send(null);
        return xhr.responseXML.documentElement;
    }

    readJSON("./data/services.json", (data) => {
        data.forEach(service => {
            addService(service)
        });
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