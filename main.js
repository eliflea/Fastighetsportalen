// Hamburgarmeny på
document.addEventListener('DOMContentLoaded', () => {
  const hamMenu = document.querySelector('.hamburger');
  const offScreenNav = document.querySelector('.off-screen-navigation');
  const overlay = document.querySelector('.mork-overlay');

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenNav.classList.toggle('active');

    // ej scrollande när navigation är aktiv + mörk overlay
    if (offScreenNav.classList.contains('active')) {
      document.documentElement.classList.add('no-scroll');
      overlay.classList.add('active'); // visa overlay
    } else {
      document.documentElement.classList.remove('no-scroll');
      overlay.classList.remove('active'); // göm overlay
    }
  });

  // om man klickar på resten av sida stängs off-navigation-bar
  overlay.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenNav.classList.remove('active');
    overlay.classList.remove('active'); 
    document.documentElement.classList.remove('no-scroll'); 
  });
});

//kontakt från startsidan
const contactLogo = document.getElementById('hjalp-logo');
const contactBox = document.getElementById('kontakt');
const closeContact = document.getElementById('kontakt-stang');

contactLogo.addEventListener('click', () => {
  contactBox.classList.toggle('active');
});

closeContact.addEventListener('click', () => {
  contactBox.classList.remove('active');
});