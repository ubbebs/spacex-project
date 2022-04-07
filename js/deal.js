const deal = document.querySelector(".deal");
const dealP = document.querySelector(".deal-p");
const dealPLink = document.querySelector("a.p_link:link, a.p_link:visited");

function deal_color() {
    deal.style.backgroundColor = "var(--clr-gray2)";
    dealP.style.color = "var(--clr-black1)";
    dealPLink.style.color = "var(--clr-blue)";
}

function deal_move() {
    deal.style.transform = "translateX(0)";
    setTimeout(deal_color, 2000);
}

window.onload = deal_move();