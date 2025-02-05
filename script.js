// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get the contact form
  const contactForm = document.getElementById('contact-form');

  // Add a submit event listener to the form
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the data to the console (for now)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Show a success message
    alert('Thank you for contacting Figtree Academy! We will get back to you soon.');

    // Clear the form
    contactForm.reset();
  });
});
