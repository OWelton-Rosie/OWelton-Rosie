<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Projects | Oscar Welton-Rosie</title>
</svelte:head>

<Header title="Projects" />

<section class="major-projects">
  <h1>Major projects</h1>
  <p>My favourite and largest projects.</p>

  <div class="project">
    <h3>Taskifier</h3>
    <p>A feature-packed task manager and tracker. Built in vanilla JavaScript, HTML and CSS.</p>
    <p><a href="https://taskifier.oweltonrosie.com/" target="_blank" rel="noopener noreferrer">View project</a></p>
    <p><a href="https://github.com/OWelton-Rosie/Taskifier" target="_blank" rel="noopener noreferrer">GitHub repository</a></p>
  </div>

  <div class="project">
    <h3>Stationery</h3>
    <p>A dynamic stationery list generator for Wellington High School parents and students. Includes an interface for teachers to edit their subjects' stationery requirements. Built in vanilla JavaScript, HTML, and CSS.</p>
    <p><a href="https://stationery.oweltonrosie.com/" target="_blank" rel="noopener noreferrer">View project</a></p>
    <p><a href="https://github.com/OWelton-Rosie/stationery" target="_blank" rel="noopener noreferrer">GitHub repository</a></p>
  </div>

  <div class="project">
    <h3>Cumulative calculator</h3>
    <p>A simple speedcubing cumulative time limit calculator. Used at speedcubing competitions to help judges track cumulative time limits for competitors. Built in React.</p>
    <p><a href="https://cumulative.oweltonrosie.com/" target="_blank" rel="noopener noreferrer">View project</a></p>
    <p><a href="https://github.com/OWelton-Rosie/Cumulative-calculator" target="_blank" rel="noopener noreferrer">GitHub repository</a></p>
  </div>

  <div class="project">
    <h3>wlg-comp-venues</h3>
    <p>A directory of venues in the Wellington region for organisers of <a href="/speedcubing">speedcubing</a> competitions. Built in CSS, vanilla JavaScript and HTML.</p>
    <p><a href="https://wlg-comp-venues.pages.dev/" target="_blank" rel="noopener noreferrer">View project</a></p>
    <p><a href="https://github.com/OWelton-Rosie/wlg-comp-venues" target="_blank" rel="noopener noreferrer">GitHub repository</a></p>
  </div>

  <div class="project">
    <h3>Personal site</h3>
    <p>The website you're looking at. Built in SvelteKit and vanilla JavaScript.</p>
    <p><a href="https://github.com/OWelton-Rosie/OWelton-Rosie" target="_blank" rel="noopener noreferrer">GitHub repository</a></p>
  </div>
</section>

<section class="smaller-projects">
  <h1>Smaller projects</h1>

  <div class="project">
    <h3>kinch-api</h3>
    <p>A simple API providing global rankings and scores of all countries who have competed in speecubing competitions. Built in vanilla JavaScript and run daily by GitHub Actions.</p>
    <p><a href="https://github.com/OWelton-Rosie/kinch-api" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
  </div>
  
  <div class="project">
    <h3>coin-flipper</h3>
    <p>A Python project used for a statistics assignment to demonstrate the difference in experimental probability.</p>
    <p><a href="https://github.com/OWelton-Rosie/coin-flipper" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>
  </div>
</section>

<h1>Open source contributions</h1>
<p>In addition to the projects listed above, I've also contributed to the following open source projects:</p>
<ul>
  <li><a href="https://github.com/speedcubingnz2025/speedcubing.org.nz/commits?author=OWelton-Rosie" target="_blank" rel="noopener noreferrer">speedcubingnz2025/speedcubing.org.nz</a></li>
  <li><a href="https://github.com/spencerchubb/cubingapp/commits?author=OWelton-Rosie" target="_blank" rel="noopener noreferrer">spencerchubb/cubingapp</a></li>
</ul>

<Footer />

<style>
/* --------------------- */
/* Projects page styles  */
/* --------------------- */

/* Headings */
h1 {
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  color: #1f2937;
  padding-bottom: 0.3rem;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #111827;
}

/* Project bio */
.project p {
  margin-bottom: 1rem;
  color: #4b5563;
  line-height: 1.5;
}

/* Project container */
.project {
  background-color: #ffffff;
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Section spacing */
.major-projects, .smaller-projects {
  margin-bottom: 3rem;
}
</style>
