document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('stayInTouchForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      const termsCheckbox = document.getElementById('terms');
      if (!termsCheckbox.checked) {
        event.preventDefault();
        alert('Please agree to the Privacy Policy before submitting the form.');
      }
    });
  }
});
