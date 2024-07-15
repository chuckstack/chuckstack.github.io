document.addEventListener('DOMContentLoaded', function() {

  fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navigation-placeholder').innerHTML = data;
    });

  fetch('embed-form-stay-in-touch.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('stay-in-touch-placeholder').innerHTML = data;
    });

});
