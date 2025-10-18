// Absolute URL to footer.html
const footerURL = 'https://oweltonrosie.com/footer.html';

fetch(footerURL)
  .then(response => {
    if (!response.ok) throw new Error('Footer not found at ' + footerURL);
    return response.text();
  })
  .then(data => {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = data;

    // Fill in the current year
    const yearSpan = footerContainer.querySelector('#currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  })
  .catch(error => console.error('Error loading footer:', error));
