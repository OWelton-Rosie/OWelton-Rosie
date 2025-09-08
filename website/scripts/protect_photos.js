const photo = document.getElementById("photo");
const message = document.getElementById("rightClickMessage");

photo.addEventListener("contextmenu", e => {
  e.preventDefault();

  // Show the overlay message
  message.style.opacity = "1";

  // Hide after 2.5s
  setTimeout(() => {
    message.style.opacity = "0";
  }, 2500);
});