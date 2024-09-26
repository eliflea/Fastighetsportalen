//  const images = [
//      "Husbilder/IMG_6019.jpg",
//      "Husbilder/IMG_6022.jpg" // Lägg till fler bildvägar här
//    ];
  
//    let currentImageIndex = 0;
  
//    function showImage(index) {
//     const imageElement = document.getElementById('carousel-image');
//     imageElement.src = images[index];
//    }
  
//    function nextImage() {
//     currentImageIndex = (currentImageIndex + 1) % images.length; // Loopa tillbaka till första bilden
//     showImage(currentImageIndex);
//    }
  
//    function prevImage() {
//     currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Loopa tillbaka till sista bilden
//     showImage(currentImageIndex);
//    }

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}