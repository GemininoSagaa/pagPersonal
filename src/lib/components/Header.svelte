<script>
  import { onMount } from 'svelte'
  let open = false

  // pequeño efecto para cambiar el fondo del header cuando scroll
  let scrolled = false
  onMount(() => {
    const onScroll = () => scrolled = window.scrollY > 20
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })
</script>

<header class:scrolled>
  <div class="container">
    <a class="brand" href="/">Walter Saturno</a>
    <nav class:open>
      <a href="#projects">Demos de proyectos</a>
      <a href="#about">Sobre mí</a>
      <a href="#contact">Contacto</a>
    </nav>
    <button class="menu" on:click={() => open = !open} aria-label="abrir menú">☰</button>
  </div>
</header>

<style>
  header{
    position: sticky;
    top:0;
    z-index:50;
    background: transparent;
    transition: background .25s ease, backdrop-filter .25s ease;
  }
  header.scrolled{ background: rgba(255,255,255,0.96); backdrop-filter: blur(6px); box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
  .container{ display:flex; align-items:center; justify-content:space-between; padding:1rem; max-width:1100px; margin:0 auto; }
  .brand{ font-weight:700; letter-spacing:0.6px; text-decoration:none; color:var(--text); }
  nav a{ margin-left:1.1rem; text-decoration:none; color:var(--muted); }
  .menu{ display:none; background:none; border:none; font-size:1.3rem }
  @media(max-width:700px){ nav{ display:none } .menu{ display:block } nav.open{ display:block; position:absolute; right:1rem; top:64px; background:var(--card); padding:0.8rem; border-radius:8px; box-shadow:0 6px 24px rgba(0,0,0,0.08);} }
</style>