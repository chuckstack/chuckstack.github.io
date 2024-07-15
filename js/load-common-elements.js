document.addEventListener('DOMContentLoaded', function() {
  fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navigation-placeholder').innerHTML = data;
    });

  fetch('home-tag.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('home-tag-placeholder').innerHTML = data;
    });
});
