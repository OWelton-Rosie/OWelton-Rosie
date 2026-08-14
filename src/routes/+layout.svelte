<script>
	import '../app.css';
  let { children } = $props();
</script>
  
  <svelte:head>
	<link rel="icon" href="/assets/favicon.ico" />
      <title>Oscar Welton-Rosie</title>
  </svelte:head>
  
{@render children()}  