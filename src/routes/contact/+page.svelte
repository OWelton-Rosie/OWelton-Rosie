<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  let nzTimeString = 'loading...';

  // --- Toast state ---
  let toastMessage = '';
  let showToast = false;
  let toastX = 0;
  let toastY = 0;
  let toastTimeout;

  function showCopiedToast(text, e) {
      toastMessage = `Copied: ${text}`;
      toastX = e.clientX;
      toastY = e.clientY - 20;  // slight offset upwards
      showToast = true;

      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
          showToast = false;
      }, 1600);
  }

  function copy(text, e) {
      navigator.clipboard.writeText(text);
      showCopiedToast(text, e);
  }

  // --- Time functions ---
  function getOrdinal(n) {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  function updateNZTime() {
    const now = new Date();
    const nzTime = new Date(now.toLocaleString('en-US', { timeZone: 'Pacific/Auckland' }));

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayName = days[nzTime.getDay()];
    const day = nzTime.getDate();
    const month = months[nzTime.getMonth()];
    const year = nzTime.getFullYear();

    const hourRaw = nzTime.getHours();
    const minutes = nzTime.getMinutes().toString().padStart(2, '0');
    const hour12 = hourRaw % 12 || 12;
    const ampm = hourRaw >= 12 ? 'PM' : 'AM';

    const ordinal = getOrdinal(day);
    nzTimeString = `${hour12}:${minutes} ${ampm} on ${dayName} the ${day}${ordinal} of ${month} ${year}`;
  }

  onMount(() => {
    updateNZTime();
    const interval = setInterval(updateNZTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>Contact me</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</svelte:head>

<Header title="Contact me" />

<p>
  I'm currently in Wellington, New Zealand and it's 
  <strong>{nzTimeString}</strong> my time.
</p>

<ul>
  <li>
      You can email me at: <button type="button" class="copyable" on:click={(e) => copy('oweltonrosie@gmail.com', e)} title="Click to copy">oweltonrosie@gmail.com</button>
  </li>

  <li>I'm also pretty active on Discord, where my username is <button type="button" class="copyable" on:click={(e) => copy('oweltonrosie', e)} title="Click to copy">oweltonrosie</button>.
  </li>
</ul>

<h1 id="links">Links/socials</h1>

<ul class="social-links">
  <li><a href="https://github.com/OWelton-Rosie" target="_blank"><i class="fab fa-github"></i> GitHub profile</a></li>
  <li><a href="https://www.youtube.com/@OscarW-R" target="_blank"><i class="fab fa-youtube"></i> YouTube channel</a></li>
  <li><a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank"><i class="fas fa-cube"></i> Speedcubing competitor profile</a></li>
  <li><a href="https://www.strava.com/athletes/120805648" target="_blank"><i class="fab fa-strava"></i> Strava profile</a></li>
</ul>

<Footer />

<!-- --- Cursor-position toast --- -->
{#if showToast}
<div 
  class="toast" 
  style="top: {toastY}px; left: {toastX}px;"
>
  {toastMessage}
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

/* --- Floating toast styles --- */
.toast {
  position: fixed;
  background: rgba(20, 20, 20, 0.9);
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  pointer-events: none; /* stops blocking clicks */
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
