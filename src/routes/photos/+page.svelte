<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount, tick } from 'svelte';

  import { photos } from './photos.js';
  import { preloadPhotos } from './carousel.js';
  import { protectPhoto } from './protectPhotos.js';

  let index = 0;
  let messageVisible = false;
  let photoRef;

  // reactive current photo
  $: currentPhoto = photos[index];

  onMount(async () => {
    document.body.classList.add('js-enabled');

    // Preload images
    preloadPhotos(photos);

    // Ensure DOM exists before protecting image
    await tick();

    if (photoRef) {
      protectPhoto(photoRef, (v) => (messageVisible = v));
    }
  });

  function next() {
    index = (index + 1) % photos.length;
  }

  function prev() {
    index = (index - 1 + photos.length) % photos.length;
  }
</script>

<svelte:head>
  <title>Photos | Oscar Welton-Rosie</title>
</svelte:head>

<Header title="Oscar's photos" />

<p class="top-text">
  All these photos are owned by me. If you'd like to use any of them in a project or otherwise,
  please <a href="./contact.html">contact me</a>.
</p>

<!-- Gallery shown only when JS is on -->
<div class="gallery js-only">
  <div class="photo-container">

    <img
      bind:this={photoRef}
      src={currentPhoto.src}
      alt={currentPhoto.caption}
      class="photo"
      on:contextmenu
    />

    <p id="caption">{currentPhoto.caption}</p>

    <div id="rightClickMessage" class:rightClickVisible={messageVisible}>
      Right-click disabled to protect content.
    </div>

    <button class="nav-btn" on:click={prev}>⟵ Prev</button>
    <button class="nav-btn" on:click={next}>Next ⟶</button>
  </div>
</div>

<noscript>
  <style>
    .js-only { display: none !important; }
  </style>
  <p style="text-align:center; font-size:1.2rem; padding:2em; background:#f8d7da; color:#721c24;">
    JavaScript is disabled, so the interactive photo gallery is unavailable.
    Please enable JavaScript to view and navigate the photos.
  </p>
</noscript>

<Footer />

<style>
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

  .photo {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    user-select: none;
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
