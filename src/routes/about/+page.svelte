<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { technologies, toggleSelected } from './lang-tech-bios.js';

  let selectedTech = null;

  function selectTech(tech) {
    selectedTech = toggleSelected(selectedTech, tech);
  }

  function handleKeyPress(e, tech) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectTech(tech);
    }
  }
</script>

<svelte:head>
  <title>About me | Oscar Welton-Rosie</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</svelte:head>

<Header title="About me" />

<img src="./assets/portrait.jpg" alt="Me" class="portrait">
<h1>Hey, I'm Oscar!</h1>
<p>I'm a New Zealand high school student, <a href="/projects">web developer</a>, <a href="/speedcubing">speedcuber</a>, <a href="https://www.strava.com/athletes/120805648" target="_blank" rel="noopener noreferrer">athlete</a> and Formula 1 fan.</p>

<h1>Languages and technologies</h1>
<p>I use the following languages and technologies:</p>

<div class="lang-tech-icons">
  {#each technologies as tech}
    {#if tech.icon.startsWith('fa-')}
      <i class={tech.icon + (selectedTech?.name === tech.name ? ' selected-tech' : '')} style="color: {tech.color}" ck={() => selectTech(tech)} on:keydown={(e) => handleKeyPress(e, tech)} role="button" tabindex="0" title={tech.name}></i>
    {:else}
      <div class="tech-icon-wrapper {selectedTech?.name === tech.name ? 'selected-tech' : ''}" on:click={() => selectTech(tech)} on:keydown={(e) => handleKeyPress(e, tech)} role="button" tabindex="0" title={tech.name}> 
        <img src={tech.icon} alt={tech.name} class="tech-icon" />
      </div>
    {/if}
  {/each}
</div>

{#if selectedTech}
  <div class="tech-bio">
    <h3>{selectedTech.name}</h3>
    <p>{selectedTech.bio}</p>
  </div>
{/if}

<h1>Links/socials</h1>
<ul class="social-links">
  <li><a href="https://github.com/OWelton-Rosie" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub profile</a></li>
  <li><a href="https://www.youtube.com/@OscarW-R" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i> YouTube channel</a></li>
  <li><a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank" rel="noopener noreferrer"><i class="fas fa-cube"></i> Speedcubing competitor profile</a></li>
  <li><a href="https://www.strava.com/athletes/120805648" target="_blank" rel="noopener noreferrer"><i class="fab fa-strava"></i> Strava profile</a></li>
  <li><a href="./photos" rel="noopener noreferrer"><i class="fa-solid fa-camera"></i> A collection of photos I've taken</a></li>
</ul>

<Footer />


<style>
/* --------------------- */
/* Portrait Image        */
/* --------------------- */
img.portrait {
    display: block;
    margin: 0 auto 1.5rem auto;
    width: 50%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* --------------------- */
/* Social Links          */
/* --------------------- */
.social-links {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
    margin-bottom: 2rem;
}


.social-links a {
    text-decoration: none;
    color: #2563eb;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s ease;
}

.social-links a:hover {
    color: #1d4ed8;
}

/* --------------------- */
/* Languages & Tech Icons */
/* --------------------- */
.lang-tech-icons {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

/* Font Awesome icons */
.lang-tech-icons i {
    font-size: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    flex-shrink: 0;
    border-radius: 8px;
}

.lang-tech-icons i:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* Image-based tech icons wrapper */
.lang-tech-icons .tech-icon-wrapper {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 8px;
}

.lang-tech-icons .tech-icon-wrapper:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.lang-tech-icons .tech-icon-wrapper .tech-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Highlight selected tech icons */
.lang-tech-icons i.selected-tech,
.lang-tech-icons .tech-icon-wrapper.selected-tech {
    transform: scale(1.3);
    outline: 2px solid #2563eb;
    outline-offset: 2px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

/* --------------------- */
/* Tech Bio Box          */
/* --------------------- */
.tech-bio {
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background-color: #f3f4f6;
    max-width: 600px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.tech-bio h3 {
    margin: 0 0 0.5rem 0;
    color: #111827;
}

.tech-bio p {
    margin: 0;
    color: #374151;
}


</style>
