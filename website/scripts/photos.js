const photos = [
    { src: "assets/photos/IMG_6435.JPG", caption: "Sailboats on the water, Wellington Harbour." },
    { src: "assets/photos/IMG_6441.JPG", caption: "The rocks of Wellington Harbour." },
    { src: "assets/photos/IMG_6697.JPG", caption: "The pools and rocks of Island Bay." },
    { src: "assets/photos/IMG_6716.JPG", caption: "The Sun illuminating the Liardet Street park football fields." },
    { src: "assets/photos/IMG_6720.JPG", caption: "Vew of Wellington city from the top of Hutchison Road." },
    { src: "assets/photos/IMG_6792.JPG", caption: "Wellington city, seen from Liardet Street park." },
    { src: "assets/photos/IMG_6804.JPG", caption: "Looking out at Wellington city, with some crazy cloud formations" },
    { src: "assets/photos/IMG_7028.JPG", caption: "View of Red Rocks." },
    { src: "assets/photos/IMG_7740.JPG", caption: "Oriental Bay." },
    { src: "assets/photos/IMG_7799.JPG", caption: "Looking out at Wellington city from the streets of Mt Victoria" },
    { src: "assets/photos/IMG_6999.JPG", caption: "Looking out at Wellington city from the Mt Victoria lookout" },
    { src: "assets/photos/IMG_6718.JPG", caption: "Morning Sun seen from the foot of Dransfield Street." },
    {src: "assets/photos/IMG_7024.JPG", caption: "A horse at the Manawa Karioi restoration project." },


  ];
  let index = 0;

  function showPhoto() {
    const photo = photos[index];
    document.getElementById("photo").src = photo.src;
    document.getElementById("caption").textContent = photo.caption;
  }

  function next() {
    index = (index + 1) % photos.length;
    showPhoto();
  }

  function prev() {
    index = (index - 1 + photos.length) % photos.length;
    showPhoto();
  }

  // show initial caption
  showPhoto();
