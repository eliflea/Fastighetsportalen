// Hamburgarmeny på
const hamMenu = document.querySelector('.hamburger');

const offScreenNav = document.querySelector('.off-screen-navigation');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenNav.classList.toggle('active');

  // if (offScreenNav.classList.contains('active')) {
  //   hamMenu.classList.add('fixed');
  // } else {
  //   hamMenu.classList.remove('fixed');
  // }
});

//kontakt från startsidan
const contactLogo = document.getElementById('hjalp-logo');
const contactBox = document.getElementById('kontakt');
const closeContact = document.getElementById('kontakt-stang');

contactLogo.addEventListener('click', () => {
  contactBox.style.display = contactBox.style.display === 'block' ? 'none' : 'block'; // Toggle display
});

closeContact.addEventListener('click', () => {
  contactBox.style.display = 'none'; // Hide the contact box
});