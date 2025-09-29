<script>
    import '../styles.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<script>
		// Configuración de funciones que serán manejadas por Partytown
		partytown = {
			forward: ['dataLayer.push', 'gtag'],
		};
	</script>

	<!-- Carga de los scripts de Partytown -->
	<script>
		(function () {
			const script = document.createElement('script');
			script.src = '/~partytown/partytown.js'; // Asegúrate de usar la ruta definida en vite.config.js
			script.async = true;
			document.head.appendChild(script);
		})();
	</script>

	<!-- Google Analytics a través de Partytown -->
	<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-SHRDL1FYC3"></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', 'G-SHRDL1FYC3');
	</script>
</svelte:head>


<Header />
<main>
<slot />
</main>
<Footer />


<style>
main {
max-width: 1100px;
margin: 0 auto;
padding: 2rem 1rem;
}
</style>
