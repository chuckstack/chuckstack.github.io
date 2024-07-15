document.addEventListener('DOMContentLoaded', function() {

  fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navigation-placeholder').innerHTML = data;
    });

});
