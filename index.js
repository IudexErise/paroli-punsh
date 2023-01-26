/* SIDEMENU */

const sideMenu = document.querySelector('#navbar_sidemenu_extended');
const openSideMenu = document.querySelector('.navbar_sidemenu');
const closeSideMenu = document.querySelector('#closeSideMenu');
const sideMenuLinks = document.querySelectorAll('.navbar_sidemenu_extended_links');

openSideMenu.addEventListener('click', () => {
  sideMenu.classList.add('navbar_sidemenu_extended');
});

closeSideMenu.addEventListener('click', () => {
  sideMenu.classList.remove('navbar_sidemenu_extended');
});

sideMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('navbar_sidemenu_extended');
  })
});

/* BUY TICKET */

const buyButtons = document.querySelectorAll('.section_concerts_table_line_button_buy');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('В данный момент данная функция не доступна!');
  })
});

/* GALLERY SWITCHER */

const showPhotos = document.querySelector('#show-photos');
const showVideo = document.querySelector('#show-video');
const slider = document.querySelector('.section_gallery_slider');
const video = document.querySelector('.section_gallery_video');

showPhotos.addEventListener('click', () => {
  video.classList.add('inactive');
  slider.classList.remove('inactive');
});

showVideo.addEventListener('click', () => {
  slider.classList.add('inactive');
  video.classList.remove('inactive');
})

/* SLIDER */

const buttonPreviousImage = document.querySelector('.section_gallery_slider_arrow-left');
const buttonNextImage = document.querySelector('.section_gallery_slider_arrow-right');

const images = [
  "../assets/slider1.jpg",
  "../assets/slider2.jpg",
  "../assets/slider3.jpg",
  "../assets/slider4.jpg",
  "../assets/slider5.jpg"
];

let counter = 0;

buttonPreviousImage.addEventListener("click", () => {
  console.log('prev')
	if (counter !== 0) {
		counter -= 1;
	} else {
		counter = images.length - 1;
	}

	currentImage = `url('${images[counter]}')`;

	slider.style.backgroundImage = currentImage;
});

buttonNextImage.addEventListener("click", () => {
  console.log('next')
	if (counter === images.length - 1) {
		counter = 0;
	} else {
		counter += 1;
	}

	currentImage = `url(${images[counter]})`;

	slider.style.backgroundImage = currentImage;
});


/* EMAIL SUBSCRIPTION */

const emailSend = document.querySelector('.footer_right_email-subscription_button');
const emailInput = document.querySelector('.footer_right_email-subscription_input');
const emailInputError = document.querySelector('.footer_right_email-subscription_error-message');
const emailCheckbox = document.querySelector('#email_checkbox');

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