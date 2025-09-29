<script>
    import '../styles.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { Partytown } from '@builder.io/partytown/svelte';
</script>

<svelte:head>
    <Partytown forward={['dataLayer.push']} />
    
    <script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-SHRDL1FYC3"></script>
    <script type="text/partytown">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
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
