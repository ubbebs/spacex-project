scrollpointer = document.querySelectorAll(".section-scroller");

function scrollpointer_move(e) {
    e.style.opacity = "1";
    setTimeout(function() {
        e.style.transform = "translate3d(0px, -30px, 0px)";
        e.style.opacity = "0";
    }, 1000);
    setTimeout(function() {
        e.style.transform = "translate3d(0px, -40px, 0px)";
    }, 2000);
}

function scrollpointer_foreach() {
    scrollpointer.forEach(scrollpointer_move);
}

setInterval(scrollpointer_foreach, 3000);