<script>
    import { onMount } from 'svelte';
  
    import { getNZTimeString } from './time.js';
  
    let nzTimeString = 'loading...';
  
    onMount(() => {
      nzTimeString = getNZTimeString();
      const interval = setInterval(() => {
        nzTimeString = getNZTimeString();
      }, 1000);
  
      return () => clearInterval(interval);
    });

    import Link from '$lib/components/Link.svelte';
  </script>
  
  <svelte:head>
    <title>Contact me</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  </svelte:head>
  
  
  <p>I'm currently in Wellington, New Zealand and it's  <strong>{nzTimeString}</strong> my time.</p>

  <p>I am reading emails addressed to <Link href="mailto:oweltonrosie@gmail.com">oweltonrosie@gmail.com</Link>.</p>

  <p>I'm also pretty active on Discord, where my username is @oweltonrosie.</p>
  
  
  <h1 id="links">Links/socials</h1>
  
  <ul class="social-links">
    <li><Link href="https://www.instagram.com/iam0scar2289/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i> Instagram profile</Link></li>
    <li><Link href="https://github.com/OWelton-Rosie" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub profile</Link></li>
    <li><Link href="https://www.strava.com/athletes/120805648" target="_blank" rel="noopener noreferrer"><i class="fab fa-strava"></i> Strava profile</Link></li>
  </ul>
  
