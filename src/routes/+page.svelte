<script>
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="hero-content">
    <img src="/assets/portrait_NEW.jpeg" alt="Oscar Welton-Rosie Portrait" class="hero-portrait" />
<h1>Oscar Welton-Rosie</h1>
</div>

<h2>About me</h2>

<p>I'm Oscar. I'm a New Zealand Year 12 high school student and hobby developer working with <a href="https://github.com/OWelton-Rosie?tab=repositories&q=&type=&language=svelte&sort=" target="_blank" rel="noopener noreferrer">Svelte</a> and <a href="https://github.com/OWelton-Rosie?tab=repositories&q=&type=&language=python&sort=" target="_blank" rel="noopener noreferrer">Python</a>.</p>

<p>When not coding, I enjoy <a href="https://www.strava.com/athletes/120805648" target="_blank" rel="noopener noreferrer">running</a>, <a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank" rel="noopener noreferrer">solving Rubik's Cubes</a>, and <a href="/writing">writing</a>.</p>


<h2>Contact me</h2>
<p>If you want to find out more about me, you can check out my <a href="/things">favourite things</a>, read some <a href="/writing">things I've written</a>, or reach out via the following:</p>
<ul>
    <li><a href="mailto:oweltonrosie@gmail.com">oweltonrosie@gmail.com</a></li>
    <li>@oweltonrosie on Discord</li>
</ul>

<Footer />

<style>
img {
    display: block;     /* Make it block so margin works */
    margin: 0 auto;     /* Centers horizontally */
    width: 40%;
    height: 40%;
}

.hero-content {
    text-align: center;
}

.hero-content h1 {
    font-size: 3rem;
}
</style>