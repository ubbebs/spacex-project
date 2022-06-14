
const navToggle = document.querySelector(".hamburger");
const navBox = document.querySelector(".menu");
const navBg = document.querySelector(".menu-background");

navToggle.addEventListener('click', () => {
    const visibility = navBox.getAttribute('data-visible');
    
    if (visibility === "false") {
        navBox.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navBg.style.background = "rgba(0,0,0,0.5)";
        navBg.style.visibility = "visible";
        navBg.addEventListener("transitionend", () => {
            navBg.style.visibility = "visible";
        });
    }
    else {
        navBox.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navBg.style.background = "rgba(0,0,0,0)";
        navBg.addEventListener("transitionend", () => {
            navBg.style.visibility = "hidden";
        });
    }
})