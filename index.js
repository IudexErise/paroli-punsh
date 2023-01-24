let sideMenu = document.querySelector('#navbar_sidemenu_extended');
let openSideMenu = document.querySelector('.navbar_sidemenu');
let closeSideMenu = document.querySelector('#closeSideMenu');
let sideMenuLinks = document.querySelectorAll('.navbar_sidemenu_extended_links');

function extendSideMenu() {
  sideMenu.classList.add('navbar_sidemenu_extended');
}

function removeSideMenu() {
  sideMenu.classList.remove('navbar_sidemenu_extended');
}

openSideMenu.addEventListener('click', extendSideMenu);
closeSideMenu.addEventListener('click', removeSideMenu);
sideMenuLinks.forEach((link) => {
  link.addEventListener('click', removeSideMenu)
});