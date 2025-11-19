export function preloadPhotos(photos) {
    photos.forEach(photo => {
      const img = new Image();
      img.src = photo.src;
    });
  }
  
  export function disableInteractions(element) {
    if (!element) return;
    element.ondragstart = () => false;
    element.onselectstart = () => false;
    element.style.userSelect = 'none';
  }
  
  export function next(index, photos) {
    return (index + 1) % photos.length;
  }
  
  export function prev(index, photos) {
    return (index - 1 + photos.length) % photos.length;
  }
  
  export function showRightClickMessage(setVisible) {
    setVisible(true);
    setTimeout(() => setVisible(false), 2500);
  }
  