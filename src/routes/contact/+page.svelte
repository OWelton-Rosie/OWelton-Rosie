<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { onMount } from 'svelte';
  
    let nzTimeString = 'loading...';
  
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
    <!-- Font Awesome for social media icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  </svelte:head>
  
  <Header title="Contact me" />
  
  <p>
    I'm currently in Wellington, New Zealand and it's 
    <strong>{nzTimeString}</strong> my time.
  </p>
  
  <ul>
    <li>You can email me at: <a href="mailto:oweltonrosie@gmail.com" target="_blank">oweltonrosie@gmail.com</a></li>
    <li>I'm also pretty active on Discord, where my username is iamoscar1.</li>
  </ul>
  
  <h1 id="links">Links/socials</h1>
  <ul class="social-links">
    <li><a href="https://github.com/OWelton-Rosie" target="_blank"><i class="fab fa-github"></i> GitHub profile</a></li>
    <li><a href="https://www.youtube.com/@OscarW-R" target="_blank"><i class="fab fa-youtube"></i> YouTube channel</a></li>
    <li><a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank"><i class="fas fa-cube"></i> Speedcubing competitor profile</a></li>   
    <li><a href="https://www.strava.com/athletes/120805648" target="_blank"><i class="fab fa-strava"></i> Strava profile</a></li>
  </ul>
  
  <Footer />
  