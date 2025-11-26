<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  import { toastMessage, showToast, toastX, toastY, copy } from './toast.js';
  import { getNZTimeString } from './time.js';

  let nzTimeString = 'loading...';

  onMount(() => {
    nzTimeString = getNZTimeString();
    const interval = setInterval(() => {
      nzTimeString = getNZTimeString();
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Contact me | Oscar Welton-Rosie</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  >
</svelte:head>

<Header title="Contact me" />

<p>
  I'm currently in Wellington, New Zealand and it's 
  <strong>{nzTimeString}</strong> my time.
</p>

<ul>
  <li>
    You can email me at:
    <button
      type="button"
      class="copyable"
      on:click={(e) => copy('oweltonrosie@gmail.com', e)}
      title="Click to copy"
    >
      oweltonrosie@gmail.com
    </button>
  </li>

  <li>
    I'm also pretty active on Discord, where my username is
    <button
      type="button"
      class="copyable"
      on:click={(e) => copy('oweltonrosie', e)}
      title="Click to copy"
    >
      oweltonrosie
    </button>.
  </li>
</ul>

<h1 id="links">Links/socials</h1>

<ul class="social-links">
  <li><a href="https://github.com/OWelton-Rosie" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub profile</a></li>
  <li><a href="https://www.youtube.com/@OscarW-R" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i> YouTube channel</a></li>
  <li><a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank" rel="noopener noreferrer"><i class="fas fa-cube"></i> Speedcubing competitor profile</a></li>
  <li><a href="https://www.strava.com/athletes/120805648" target="_blank" rel="noopener noreferrer"><i class="fab fa-strava"></i> Strava profile</a></li>
</ul>

<Footer />

<!-- Toast -->
{#if $showToast}
  <div class="toast" style="top: {$toastY}px; left: {$toastX}px;">
    {$toastMessage}
  </div>
{/if}

<style>
.copyable {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-decoration: underline;
  font: inherit;
  color: inherit;
}

.copyable:hover {
  opacity: 0.7;
}

.toast {
  position: fixed;
  background: rgba(20, 20, 20, 0.9);
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  pointer-events: none;
  animation: floatFade 1.6s ease forwards;
  z-index: 9999;
  transform: translate(-50%, -20px);
}

@keyframes floatFade {
  0%   { opacity: 0; transform: translate(-50%, -10px); }
  15%  { opacity: 1; transform: translate(-50%, -16px); }
  85%  { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, -26px); }
}
</style>
