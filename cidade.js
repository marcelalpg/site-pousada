const nav = document.querySelector(".navbar");
const bntMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".nav-list");

function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle("active");
    handleClickOutside(menu, () => {
        nav.classList.remove("active");
    })
}

function handleClickOutside(targetElement, callback) {
    const html = document.documentElement;
    function handleHTMLClick(event) {
        if (!targetElement.contains(event.target)) {
            targetElement.removeAttribute("data-target");
            html.addEventListener("click", handleHTMLClick);
            html.addEventListener("touchstart", handleHTMLClick);
            callback();
        }
    }
    if (!targetElement.hasAttribute("data-target")) {
        html.addEventListener("click", handleHTMLClick);
        html.addEventListener("touchstart", handleHTMLClick);
        targetElement.setAttribute("data-target", "");
    }
}

bntMenu.addEventListener("click", handleButtonClick);
bntMenu.addEventListener("touchstart", handleButtonClick);