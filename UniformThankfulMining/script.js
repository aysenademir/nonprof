// script.js
// You can add JavaScript for interactive elements here if needed.
// Example: Smooth scrolling to sections when clicking on links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// Example: Add a "Read More" functionality to service descriptions
const serviceCards = document.querySelectorAll('.services-section .card-text');
serviceCards.forEach(cardText => {
  const text = cardText.textContent;
  if (text.length > 100) {
    cardText.textContent = text.substring(0, 100) + '...';
    const readMoreLink = document.createElement('a');
    readMoreLink.href = '#';
    readMoreLink.textContent = 'Read More';
    cardText.appendChild(readMoreLink);
    readMoreLink.addEventListener('click', (e) => {
      e.preventDefault();
      cardText.textContent = text;
      readMoreLink.textContent = 'Read Less';
      readMoreLink.removeEventListener('click', this);
      readMoreLink.addEventListener('click', (e) => {
        e.preventDefault();
        cardText.textContent = text.substring(0, 100) + '...';
        readMoreLink.textContent = 'Read More';
        readMoreLink.removeEventListener('click', this);
        readMoreLink.addEventListener('click', (e) => {
          e.preventDefault();
          cardText.textContent = text;
          readMoreLink.textContent = 'Read Less';
        });
      });
    });
  }
});

// Modal functionality for service details
const readMoreButtons = document.querySelectorAll('.services-section .btn-primary[data-toggle="modal"]');

readMoreButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Get the corresponding modal content
    const modalId = button.getAttribute('data-target');
    const modalContent = document.querySelector(modalId + ' .modal-body');

    // Get the full text from the service description
    const fullText = document.getElementById(modalId.replace('#', '') + 'Text').textContent;
    modalContent.innerHTML = fullText; // Update the modal content
  });
});

