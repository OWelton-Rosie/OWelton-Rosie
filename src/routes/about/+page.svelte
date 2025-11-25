<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>About me | Oscar Welton-Rosie</title>
        <!-- Font Awesome for social media icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</svelte:head>

<Header title="About me" />

<img src="./assets/portrait.jpg" alt="Me" class="portrait">
<h1>Hey, I'm Oscar!</h1>
<p>I'm a New Zealand high school student, <a href="/projects">web developer</a>, <a href="/speedcubing">speedcuber</a>, <a href="https://www.strava.com/athletes/120805648" target="_blank">athlete</a> and Formula 1 fan.</p>


<h1>Links/socials</h1>
<ul class="social-links">
  <li><a href="https://github.com/OWelton-Rosie" target="_blank"><i class="fab fa-github"></i> GitHub profile</a></li>
  <li><a href="https://www.youtube.com/@OscarW-R" target="_blank"><i class="fab fa-youtube"></i> YouTube channel</a></li>
  <li><a href="https://www.worldcubeassociation.org/persons/2023WELT02" target="_blank"><i class="fas fa-cube"></i> Speedcubing competitor profile</a></li>
  <li><a href="https://www.strava.com/athletes/120805648" target="_blank"><i class="fab fa-strava"></i> Strava profile</a></li>
  <li><a href="./photos"><i class="fa-solid fa-camera"></i> A collection of photos I've taken</a></li>
</ul>


<Footer />

<style>
  /* Links */
.social-links {
    list-style-type: none;
    margin-left: 0px;     
}

img {
    display: block;     /* Make it block so margin works */
    margin: 0 auto;     /* Centers horizontally */
    width: 50%;
    height: 50%;
}

</style>