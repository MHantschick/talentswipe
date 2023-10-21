/**
 * startseite slider
 */
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".mySlides");
  const texts1 = document.querySelectorAll(".textmain1");
  const texts2 = document.querySelectorAll(".textmain2");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts1[i].style.display = "none";
    texts2[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(function () {
    texts1[slideIndex - 1].style.display = "block";
    setTimeout(function () {
      texts2[slideIndex - 1].style.display = "block";
    }, 1000); // Zeigt den zweiten Text nach 1 Sekunde an
  }, 2000); // Zeigt den ersten Text nach 1 Sekunde an

  setTimeout(showSlides, 10000);
}

showSlides();

//feedback slider

let slideIndex2 = 0;

function showSlides2() {
  const slides2 = document.querySelectorAll(".myFeedback");

  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }

  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 10000);
}
showSlides2();

/*Anmeldeseite*/
/*document.getElementById('showForm').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('hidden');
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    function toggleForm() {
      var formContainer = document.getElementById('formContainer');
      formContainer.classList.toggle('hidden');
    }
  
    var showFormButton = document.getElementById('showForm');
    showFormButton.addEventListener('click', toggleForm);
  });*/

function showText(buttonId) {
  var textToShow = document.getElementById(buttonId + "Text");
  var allTexts = document.getElementsByClassName("hidden-text");

  for (var i = 0; i < allTexts.length; i++) {
    allTexts[i].style.display = "none";
  }

  textToShow.style.display = "block";
}
