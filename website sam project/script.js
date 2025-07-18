document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();
// Simple form feedback (replace with backend integration for production)
document.getElementById('formMessage').textContent = "Thank you! We'll be in touch soon";
this.reset();
});