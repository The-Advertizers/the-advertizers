// preloader
window.onload = function () {
    initiateAnimator();
    document.getElementsByTagName("BODY")[0].classList.add("body-default");
    fadeOut(document.getElementById("preloader"), 50);

    var services = document.getElementById("services");
    fetch('../data/services.json').then(res => res.json()).then(data => {
            for (var service of data) {
                var opt = document.createElement('option');
                opt.value = service.title;
                opt.innerText = service.title;
                services.appendChild(opt)
            }
        }
    );
}

function scrollToQuotation() {
    var quote = document.getElementById('quotation');
    quote.scrollIntoView();
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

// update year text
document.getElementById("tx-year").innerHTML = new Date().getFullYear();

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
