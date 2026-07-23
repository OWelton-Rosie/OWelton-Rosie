<script>
	import '../app.css';
  let { children } = $props();
</script>
  
  <svelte:head>
	<link rel="icon" href="/assets/favicon.jpeg" />
      <title>Oscar Welton-Rosie</title>
  </svelte:head>
  
{@render children()}  