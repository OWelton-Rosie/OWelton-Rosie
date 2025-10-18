// scripts/footer.js

fetch('./footer.html')
  .then(response => response.text())
  .then(data => {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    // Insert the footer HTML
    footerContainer.innerHTML = data;

    // Fill in the current year
    const yearSpan = footerContainer.querySelector('#currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  })
  .catch(error => console.error('Error loading footer:', error));
