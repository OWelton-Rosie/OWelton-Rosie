<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  const photos = [
    { src: "assets/photos/IMG_6435.JPG", caption: "Sailboats on the water, Wellington Harbour." },
    { src: "assets/photos/IMG_6441.JPG", caption: "The rocks of Wellington Harbour." },
    { src: "assets/photos/IMG_6697.JPG", caption: "The rockpools of Island Bay." },
    { src: "assets/photos/IMG_6716.JPG", caption: "The Sun illuminating the Liardet Street park football fields." },
    { src: "assets/photos/IMG_6720.JPG", caption: "View of Wellington city from the top of Hutchison Road." },
    { src: "assets/photos/IMG_6792.JPG", caption: "Wellington city, seen from Liardet Street park." },
    { src: "assets/photos/IMG_6804.JPG", caption: "Looking out at Wellington city, with cloud formations creating a beautiful skyline." },
    { src: "assets/photos/IMG_7028.JPG", caption: "View of the Red Rocks hills." },
    { src: "assets/photos/IMG_7740.JPG", caption: "View of Oriental Bay." },
    { src: "assets/photos/IMG_7799.JPG", caption: "Looking out at Wellington city from the streets of Mt Victoria." },
    { src: "assets/photos/IMG_6999.JPG", caption: "Looking out at Wellington city from the Mt Victoria lookout." },
    { src: "assets/photos/IMG_6718.JPG", caption: "Morning Sun seen from the foot of Dransfield Street." },
    { src: "assets/photos/IMG_7024.JPG", caption: "A horse at the Manawa Karioi ecological restoration project." },
    { src: "assets/photos/IMG_6951.JPG", caption: "Wellington City, seen from the top of Central Park." },
    { src: "assets/photos/IMG_6805.JPG", caption: "Wellington City and Harbour." },
    { src: "assets/photos/IMG_6989.JPG", caption: "Wellington Airport, seen from the hills of Island Bay." },
    { src: "assets/photos/IMG_7027.JPG", caption: "The hills and coastline of Red Rocks." },
    { src: "assets/photos/IMG_7587.JPG", caption: "The rugged coastline of Breaker Bay." }
  ];

  let index = 0;
  let messageVisible = false;
  let photoRef;

  onMount(() => {
    // Add a class to body so JS-only elements can show
    document.body.classList.add('js-enabled');

    // Preload images
    photos.forEach(photo => {
      const img = new Image();
      img.src = photo.src;
    });

    if (photoRef) {
      photoRef.ondragstart = () => false;
      photoRef.onselectstart = () => false;
      photoRef.style.userSelect = 'none';
    }
  });

  $: currentPhoto = photos[index];

  function next() {
    index = (index + 1) % photos.length;
  }

  function prev() {
    index = (index - 1 + photos.length) % photos.length;
  }

  function handleRightClick(e) {
    e.preventDefault();
    messageVisible = true;
    setTimeout(() => (messageVisible = false), 2500);
  }
</script>

<svelte:head>
<title>Oscar's photos</title>
</svelte:head>

<Header title="Oscar's photos" />

<p class="top-text">
All these photos are owned by me. If you'd like to use any of them in a project or otherwise,
please <a href="./contact.html">contact me</a>.
</p>

<!-- Gallery hidden if JS is off -->
<div class="gallery js-only">
<div class="photo-container">
  <img
    bind:this={photoRef}
    src={currentPhoto.src}
    alt={currentPhoto.caption}
    id="photo"
    on:contextmenu={handleRightClick}
  />
  <p id="caption">{currentPhoto.caption}</p>

  <div id="rightClickMessage" class:rightClickVisible={messageVisible}>
    Right-click disabled to protect content.
  </div>

  <button class="nav-btn" on:click={prev}>⟵ Prev</button>
  <button class="nav-btn" on:click={next}>Next ⟶</button>
</div>
</div>

<!-- Message for no JS -->
<noscript>
<style>
  /* This hides JS-only content entirely when JS is off */
  .js-only { display: none !important; }
</style>
<p style="text-align:center; font-size:1.2rem; padding:2em; background:#f8d7da; color:#721c24;">
  JavaScript is disabled, so the interactive photo gallery is unavailable.  
  Please enable JavaScript to view and navigate the photos.
</p>
</noscript>

<Footer />

<style>
/* Hide by default until JS adds a body class */
.js-only {
  display: none;
}


.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  margin: 2rem auto;
  flex-wrap: wrap;
}

.photo-container {
  text-align: center;
  max-width: 600px;
  position: relative;
}

img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

#caption {
  margin-top: 0.5rem;
  font-style: italic;
  color: #555;
}

.nav-btn {
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 0.7em 1.2em;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.nav-btn:hover {
  background-color: #005fa3;
}

.top-text {
  text-align: center;
  margin-top: 2rem;
}

#rightClickMessage {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 0.6em 1em;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.rightClickVisible {
  opacity: 1 !important;
}
</style>
