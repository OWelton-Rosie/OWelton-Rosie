<script>
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { getUpcomingCompetitions } from './comps.js';

  let competitions = [];
  let error = '';

  onMount(async () => {
    const result = await getUpcomingCompetitions();
    competitions = result.competitions;
    error = result.error;
  });
</script>

<svelte:head>
  <title>Speedcubing | Oscar Welton-Rosie</title>
</svelte:head>

<Header title="Speedcubing" />

<h1>What is speedcubing?</h1>
<p>Speedcubing (also known as speedsolving or cubing), is the competitive solving of <a href="https://en.wikipedia.org/wiki/World_Cube_Association#Events" target="_blank" rel="noopener noreferrer">Rubik's Cube-like puzzles</a>. Global speedcubing is sanctioned by the <a href="https://www.worldcubeassociation.org/" target="_blank" rel="noopener noreferrer">World Cube Association (WCA)</a>.</p>

<p>The current world record for a single solve of a 3x3x3 Rubik's Cube is 3.05 seconds and is held by China's <a href="https://www.worldcubeassociation.org/persons/2023GENG02" target="_blank" rel="noopener noreferrer">Xuanyi Geng</a>.</p>

<h1>My speedcubing journey</h1>
<p>I have been speedcubing since December 2023, have competed in over 10 competitions and completed over 400 solves in WCA-recognised competitions.</p>

<img src="./assets/nats23Pyra.jpeg" alt="Solving a Pyraminx at the 2023 New Zealand National Championships" class="cubing-image">
<p class="cubing-caption"> Solving a Pyraminx at the <a href="https://www.worldcubeassociation.org/competitions/NewZealandNationals2023" target="_blank" rel="noopener noreferrer">2023 New Zealand National Championships</a>.</p>

<p>I use the <a href="https://www.speedcubereview.com/4look.html" target="_blank" rel="noopener noreferrer">4 Look Last Layer</a> method to solve the 3x3x3 Rubik's Cube in under 18 seconds on average. I am currently ranked in the top 100 in New Zealand for <a href="https://en.wikipedia.org/wiki/Pyraminx" target="_blank" rel="noopener noreferrer">Pyraminx</a> average and single. You can see all of the results I have achieved in competitions on my <a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank" rel="noopener noreferrer">WCA Profile</a>.</p>

<img src="./assets/ftopenPyra.png" alt="Me, shortly after dropping my Pyraminx PR single to 3.83 seconds" class="cubing-image">
<p class="cubing-caption"> Me, shortly after dropping my Pyraminx PR single to 3.83 seconds.</p>

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
      <li><a href={comp.url} target="_blank" rel="noopener noreferrer">{comp.name}</a></li>
    {/each}
  </ul>
{/if}

<h1>My Speedcubing contributions</h1>
<ul>
  <li>In January 2025, I co-organised the WCA-recognised competition <a href="https://www.worldcubeassociation.org/competitions/JustSolveinJohnsonville2025" target="_blank" rel="noopener noreferrer">Just Solve in Johnsonville 2025</a>.</li>
  <li>I have <a href="https://github.com/speedcubingnz2025/speedcubing.org.nz/commits?author=OWelton-Rosie" target="_blank" rel="noopener noreferrer">contributed</a> to the Speedcubing New Zealand website, improving features and content over multiple commits.</li>
</ul>



<h1>Speedcubing links</h1>
<ul>
  <li><a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank">My competition results</a></li> 
  <li><a href="https://youtu.be/zdqCWfTqVq0" target="_blank">A video of one of my solves</a></li> 
  <li><a href="https://www.youtube.com/@oscarW-R" target="_blank">My speedcubing-focused YouTube channel</a></li> 
  <li><a href="https://docs.google.com/spreadsheets/d/1gKHcdsEJ_HWRASUQYmWYzuLViIqzx7UYjpbNdobcsVM/edit?usp=sharing" target="_blank">My personal bests</a></li>
</ul>

<Footer />

<style>
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
