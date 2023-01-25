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

let emailSend = document.querySelector('.footer_right_email-subscription_button');
let emailInput = document.querySelector('.footer_right_email-subscription_input');
let emailInputError = document.querySelector('.footer_right_email-subscription_error-message');
let emailCheckbox = document.querySelector('#email_checkbox');

function validateEmail() {
  if (emailInput.checkValidity() && emailCheckbox.checked) {
    emailInput.classList.remove('error');
    alert('Вы успешно подписались!');
    emailInputError.innerHTML = '';
  } else if (emailCheckbox.checked) {
      emailInput.classList.add('error');
      emailInputError.innerHTML = emailInput.validationMessage;
    } else {
      emailInput.classList.add('error');
      emailInputError.innerHTML = 'Пожалуйста, дайте согласие на обработку данных.';
    }
}

emailSend.addEventListener('click', validateEmail);