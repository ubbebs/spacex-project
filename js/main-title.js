const content = document.querySelector(".main-home-content");
const title = document.querySelector(".main-home-content-title");
const subtitle = document.querySelector(".main-home-content-subtitle");

function title_opacity_0() {
    title.style.opacity = "0";
}

function title_show() {
    content.style.marginTop = "140px";
    title.style.opacity = "1";
    title.style.fontSize = "1.5rem";
    subtitle.style.opacity = "1";
}

function title_exec() {
    setTimeout(title_opacity_0, 2300);
    setTimeout(title_show, 3300);
}

window.onload = title_exec();