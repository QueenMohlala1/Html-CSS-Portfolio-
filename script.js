function toggleMenu() {
    /*const menu = document.querySelector(".menu-links");*/
    const icon = document.querySelector(".hamburger-icon");
    const menu = document.getElementById("menu-links");
    menu.classList.toggle('active');
    /*menu.classList.toggle("open");*/
    icon.classList.toggle("open");
}
