export function protectPhoto(photoElement, setMessageVisible) {
    if (!photoElement) return;
  
    // Disable right-click
    photoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      showMessage(setMessageVisible);
    });
  
    // Disable dragging/selecting
    photoElement.ondragstart = () => false;
    photoElement.onselectstart = () => false;
    photoElement.style.userSelect = "none";
  }
  
  export function showMessage(setMessageVisible) {
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 2500);
  }
  