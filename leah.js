// let slideIndex = 1;
// showSlides(slideIndex);

// // Funktion för att byta bild
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Funktion för att visa specifik bild
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }


let slideIndex = 1;
showSlides(slideIndex);

// Funktion för att byta bild
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Funktion för att visa specifik bild
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  
  // Om n är större än antalet bilder, börja om från början
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  // Om n är mindre än 1, visa sista bilden
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Göm alla bilder
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Visa den nuvarande bilden
  slides[slideIndex - 1].style.display = "block";
}

// Visa den första bilden direkt när sidan laddas
document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
});
