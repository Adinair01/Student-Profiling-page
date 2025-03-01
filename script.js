document.addEventListener('DOMContentLoaded', function() {
    // Get all steps and pages
    const steps = document.querySelectorAll('.step');
    const pages = document.querySelectorAll('.page');
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const submitButton = document.querySelector('.submit-btn');
  
    function navigateToPage(pageNumber) {
      pages.forEach(page => {
        page.classList.remove('active');
      });
      
      document.getElementById(`page${pageNumber}`).classList.add('active');
      
  
      steps.forEach(step => {
        step.classList.remove('active');
      });
      
      steps[pageNumber - 1].classList.add('active');
    }
  
    steps.forEach(step => {
      step.addEventListener('click', function() {
        const pageNumber = this.getAttribute('data-page');
        navigateToPage(pageNumber);
      });
    });
  
    nextButtons.forEach(button => {
      button.addEventListener('click', function() {
        const nextPage = this.getAttribute('data-next');
        if (nextPage) {
          navigateToPage(nextPage);
        }
      });
    });
  
    prevButtons.forEach(button => {
      button.addEventListener('click', function() {
        const prevPage = this.getAttribute('data-prev');
        if (prevPage) {
          navigateToPage(prevPage);
        }
      });
    });
  
    if (submitButton) {
      submitButton.addEventListener('click', function() {
        alert('Form submitted successfully!');
      });
    }
  
    const formInputs = document.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
      });
    });
  
    // Photo upload simulation
    const uploadBtn = document.querySelector('.upload-btn');
    const photoPlaceholder = document.querySelector('.photo-placeholder img');
    
    if (uploadBtn && photoPlaceholder) {
      uploadBtn.addEventListener('click', function() {
        // In a real application, this would open a file picker
        // For this demo, we'll just show a success message
        alert('Photo upload functionality would be implemented here.');
      });
    }
  });