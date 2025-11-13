<script>
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let competitions = [];
  let error = '';

  // Fetch upcoming competitions on mount
  onMount(async () => {
    try {
      const res = await fetch(
        "https://www.worldcubeassociation.org/api/v0/users/2023WELT02?upcoming_competitions=true" // fetch upcoming comps
      );
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();

      competitions = data.upcoming_competitions.sort(
        (a, b) => new Date(a.start_date) - new Date(b.start_date)
      );
    } catch (err) {
      error = "Failed to load competitions: " + err.message;
    }
  });
</script>

<svelte:head>
  <title>Speedcubing</title>
</svelte:head>

<Header title="Speedcubing" />

<h1>What is speedcubing?</h1>
<p>
  Speedcubing (also known as speedsolving or cubing), is the competitive solving of
  <a href="https://en.wikipedia.org/wiki/World_Cube_Association#Events" target="_blank">Rubik's Cube-like puzzles</a>.
  Global speedcubing is sanctioned by the
  <a href="https://www.worldcubeassociation.org/" target="_blank">World Cube Association (WCA)</a>.
</p>

<p>
  The current world record for a single solve of a 3x3x3 Rubik's Cube is 3.05 seconds and is held by China's
  <a href="https://www.worldcubeassociation.org/persons/2023GENG02" target="_blank">Xuanyi Geng</a>.
</p>

<h1>My speedcubing journey</h1>
<p>
  I have been speedcubing since December 2023, have competed in over 10 competitions
  and completed 300 solves in WCA-recognised competitions.
</p>

<img src="./assets/nats23Pyra.jpeg" alt="Solving a Pyraminx at the 2023 New Zealand National Championships" class="cubing-image">
<p class="cubing-caption">
  Solving a Pyraminx at the
  <a href="https://www.worldcubeassociation.org/competitions/NewZealandNationals2023" target="_blank">2023 New Zealand National Championships</a>.
</p>

<p>
  I use the <a href="https://www.speedcubereview.com/4look.html" target="_blank">4 Look Last Layer</a> method to solve the 3x3x3 Rubik's Cube in under 20 seconds on average.
  I am currently ranked 72nd in New Zealand for <a href="https://en.wikipedia.org/wiki/Pyraminx" target="_blank">Pyraminx</a> average, with a result of 5.67 seconds.
  You can see all of the results I have achieved in competitions on my
  <a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank">WCA Profile</a>.
</p>

<h1>Some of my notable speedcubing achievements</h1>
<ul>
  <li>In January 2025, I co-organised my first competition,
      <a href="https://www.worldcubeassociation.org/competitions/JustSolveinJohnsonville2025" target="_blank">Just Solve in Johnsonville 2025</a>.
  </li>
  <li>In March 2025, I set a Pyraminx average of
      <a href="https://youtu.be/CDcwlH10d7w?si=CVVNz0a7_awV7gKK" target="_blank">5.76 seconds</a>, placing me 72nd in New Zealand.
      At the same competition, I set a Pyraminx single of
      <a href="https://youtu.be/GGp9eGFzfEg" target="_blank">3.83 seconds</a>, placing me 73rd in New Zealand.
  </li>
  <li>In July 2025, I beat my 3x3 PR single, lowering it to
      <a href="https://youtu.be/zdqCWfTqVq0" target="_blank">11.90 seconds</a>.
  </li>
  <li>In August 2025, I improved my Pyraminx personal records, lowering my average to
      <a href="https://youtu.be/n9znV_MN_T0" target="_blank">5.08 seconds</a> and my single to
      <a href="https://youtu.be/i_FvVLH9uC4" target="_blank">3.52 seconds</a>, ranking me 58th and 86th in New Zealand respectively.
  </li>
</ul>

<img src="./assets/ftopenPyra.png" alt="Me, shortly after dropping my Pyraminx PR single to 3.83 seconds" class="cubing-image">
<p class="cubing-caption">
  Me, shortly after dropping my Pyraminx PR single to 3.83 seconds
</p>

<h1>Upcoming competitions</h1>
<p>I am attending the following competitions:</p>

<noscript>
  <p style="color: red;">JavaScript is required to view the list of upcoming competitions.</p>
</noscript>

{#if error}
  <p>{error}</p>
{:else}
  <ul>
    {#each competitions as comp}
      <li><a href={comp.url} target="_blank">{comp.name}</a></li>
    {/each}
  </ul>
{/if}


<h1>Speedcubing links</h1>
<ul>
  <li><a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank">My competition results</a></li> 
  <li><a href="https://youtu.be/zdqCWfTqVq0" target="_blank">A video of one of my solves</a></li> 
  <li><a href="https://www.youtube.com/@oscarW-R" target="_blank">My speedcubing-focused YouTube channel</a></li> 
  <li><a href="https://docs.google.com/spreadsheets/d/1gKHcdsEJ_HWRASUQYmWYzuLViIqzx7UYjpbNdobcsVM/edit?usp=sharing" target="_blank">My personal bests</a></li>
</ul>

<Footer />

<style>
/* Styles for images in the speedcubing section */
.cubing-image {
    display: block; 
    margin: 0 auto;      
    width: 50%;
    height: auto;   
}

.cubing-caption {
    font-size: 0.9rem;
    color: #6b7280;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
}
</style>
