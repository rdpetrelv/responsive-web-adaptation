let mobileMenuBtn = document.querySelector(".mobile-menu-button");

mobileMenuBtn.addEventListener("click", () => {
    /* On click on the menu button, toggle the visibility state of the menu */
    let mobileMenu1 = document.querySelector(".top-header .content .primary-menu");
    let mobileMenu2 = document.querySelector(".top-header .content .secondary-menu");
    let buttonIcon = document.querySelector(".top-header .content .mobile-menu-button");
    mobileMenu1.classList.toggle("active");
    mobileMenu2.classList.toggle("active");
    buttonIcon.classList.toggle("active");
})