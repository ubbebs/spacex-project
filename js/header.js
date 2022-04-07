// FUNKCJE BOTH

function nav_backgroundColor_1() {
    nav.style.backgroundColor = "var(--clr-black1)";
}

function nav_backgroundColor_0() {
    nav.style.backgroundColor = "var(--clr-black)";
}

// NAV1

// ZMIENNE NAV1

const nav = document.querySelector('.header-nav-m');
const navBox = document.querySelector('.header-nav-m-box');
const navBoxBar = document.querySelector('.header-nav-m-box-bar');
const navBoxBarResult = document.querySelector('.header-nav-m-box-result');
const navBoxBarSearchBar = document.querySelector('.header-nav-m-box-bar-search-searchbar');
const navBoxBarSearchBarInput = document.querySelector('.header-nav-m-box-bar-search-searchbar-input');
const navBoxBarCancel = document.querySelector('.header-nav-m-box-bar-search-cancel');
const navChart = document.querySelector(".header-nav-m-chart");
const navToggleButton = document.querySelector('.header-nav-m-toggle-button');
const navToggleButtonL1 = document.querySelector('.header-nav-m-toggle-button-line-1');
const navToggleButtonL2 = document.querySelector('.header-nav-m-toggle-button-line-2');

// ROZWIJANE MENU GŁÓWNE

function show_headerNavM() {
    navBox.setAttribute('data-visible', true);
    navToggleButton.setAttribute('aria-expanded', true);
    navToggleButtonL1.style.marginTop = "0px";
    navToggleButtonL1.style.transform = "rotate(45deg)";
    navToggleButtonL2.style.marginTop = "0px";
    navToggleButtonL2.style.transform = "rotate(-45deg)";
    navChart.style.opacity = "0";
    hide_secheaderNavM();
}

function hide_headerNavM() {
    navBox.setAttribute('data-visible', false);
    navToggleButton.setAttribute('aria-expanded', false);
    navToggleButtonL1.style.marginTop = "-5px";
    navToggleButtonL1.style.transform = "rotate(0deg)";
    navToggleButtonL2.style.marginTop = "5px";
    navToggleButtonL2.style.transform = "rotate(0deg)";
    navChart.style.display = "flex";
}

function navChart_display_n() {
    navChart.style.display = "none";
}

function navChart_opacity_1() {
    navChart.style.opacity = "1";
}

navToggleButton.addEventListener('click', () => {
    const visibilityNav = navBox.getAttribute('data-visible');

    if (visibilityNav === "false") {
        show_headerNavM();
        nav_backgroundColor_0();
        setTimeout(navChart_display_n, 500);
        secnavItems.setAttribute('data-visible', false);
    } else if (visibilityNav === "true") {
        hide_headerNavM();
        setTimeout(nav_backgroundColor_1, 200);
        setTimeout(navChart_opacity_1, 200);
    }
});


// SEARCHBAR CLICK

function navBox_inset_0() {
    navBox.style.inset = "0px 0px 0px 0px";
}

function navBox_inset_1() {
    navBox.style.inset = "48px 0px 0px 0px";
}


// LISTA QUICK LINKS

navBoxBarSearchBarInput.addEventListener('focus', () => {
    const visibilityNav = navBox.getAttribute('data-visible');

    if (visibilityNav === "true") {
        navBox_inset_0();
        nav.style.transform = "translateY(-44px)";
        navBoxBarSearchBar.style.width = "calc(100% - 5.5rem - 8px)";
        navBoxBarCancel.style.opacity = "1";
        navBoxBarResult.style.transform = "translateY(0)"
    } 
})


// CANCEL QUICK LINKS

navBoxBarCancel.addEventListener('click', () => {
    const visibilityNav = nav.getAttribute('data-visible');

    if (visibilityNav === "true") {
        navBox_inset_1();
        nav.style.transform = "translateY(0)";
        navBoxBarCancel.style.opacity = "0";
        navBoxBarSearchBar.style.width = "calc(100% - 16px)";
        navBoxBarResult.style.transform = "translateY(-120%)";
    } else if (visibilityNav === "false") {
        navBox_inset_0();
    }
})





// NAV2

// ZMIENNE NAV2

const secheader = document.querySelector('.second-header');
const secnavBox = document.querySelector('.second-header-nav-m-box');
const secnavToggle = document.querySelector('.second-header-nav-m-toggle');
const secnavToggleArrow = document.querySelector('.second-header-nav-m-toggle-arrow');
const secnavBoxListUl = document.querySelector('.second-header-nav-m-box-list-ul');
const secnavBoxList = document.querySelector('.second-header-nav-m-box-list');

function show_secheaderNavM() {
    secnavBox.setAttribute('data-visible', true);
    secnavToggle.setAttribute('aria-expanded', true);
    secnavToggleArrow.style.transform = `rotate(-315deg)`;
    secnavToggleArrow.style.top = "22px";
    secnavBoxListUl.style.opacity = "1";
    secheader.style.backgroundColor = "rgb(240,240,240)";
    secnavBoxList.style.backgroundColor = "rgb(240,240,240)";
}

function hide_secheaderNavM() {
    secnavBox.setAttribute('data-visible', false);
    secnavToggle.setAttribute('aria-expanded', false);
    secnavToggleArrow.style.transform = `rotate(-135deg)`;
    secnavToggleArrow.style.top = "16px";
    secnavBoxListUl.style.opacity = "0";
    secheader.style.backgroundColor = "rgb(255,255,255)";
    secnavBoxList.style.backgroundColor = "rgb(230,230,230)";
}

secnavToggle.addEventListener('click', () => {
    const visibilityNav = secnavBox.getAttribute('data-visible');

    if (visibilityNav === "false") {
        show_secheaderNavM();
        nav_backgroundColor_0();
    } else if (visibilityNav === "true") {
        hide_secheaderNavM();
        nav_backgroundColor_1();
    }
});

// RESIZING

window.addEventListener('resize', () => {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth > 834) {
		hide_secheaderNavM();
        nav_backgroundColor_1();
	}
}, false);