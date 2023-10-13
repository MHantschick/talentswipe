/*Anmeldeseite*/
/*document.getElementById('showForm').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('hidden');
});*/

document.addEventListener('DOMContentLoaded', function() {
    function toggleForm() {
      var formContainer = document.getElementById('formContainer');
      formContainer.classList.toggle('hidden');
    }
  
    var showFormButton = document.getElementById('showForm');
    showFormButton.addEventListener('click', toggleForm);
  });
  

