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
  

