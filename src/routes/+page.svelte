<script>
    import Intro from '$lib/components/Intro.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="hero-content">
    <img src="/assets/portrait.jpg" alt="Oscar Welton-Rosie Portrait" class="hero-portrait" />
<h1>Oscar Welton-Rosie</h1>
</div>

<Intro />


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
<Footer />



