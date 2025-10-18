const photo = document.getElementById("photo");
const message = document.getElementById("rightClickMessage");

// Disable right-click
photo.addEventListener("contextmenu", e => {
  e.preventDefault();

  // Show the overlay message
  message.style.opacity = "1";

  // Hide after 2.5s
  setTimeout(() => {
    message.style.opacity = "0";
  }, 2500);
});

// Disable dragging
photo.ondragstart = () => false;

// Disable text selection
photo.onselectstart = () => false;
photo.style.userSelect = "none"; // CSS fallback
