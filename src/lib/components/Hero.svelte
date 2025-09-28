<script>
  import { fade, fly } from 'svelte/transition'
</script>

<section class="hero">
  <div class="grid">
    <div in:fly={{ x: -40, duration: 500 }} class="left">
      <h1>Hola, soy <span class="accent">Walter Saturno</span></h1>
      <p>Programador junior — hago sitios web, demos y soluciones front-end con Svelte y Vite. Me interesa el diseño, la ropa y crear productos bien pulidos.</p>
      <p class="cta">
        <a href="#projects" class="btn">Ver demos</a>
        <a href="#contact" class="btn ghost">Contactarme</a>
      </p>
    </div>
    <div in:fade class="right">
      <div class="card-mock">
        <!-- coloca aquí una imagen o mockup -->
        <img src="/img/principal.webp" alt="imagen inicio" />
      </div>
    </div>
  </div>
</section>

<style>
  .hero{ padding:3rem 0; }
  .grid{ display:flex; gap:2rem; align-items:center; }
  .left{ flex:1 }
  .right{ flex:1; display:flex; justify-content:center }
  .accent{ color:var(--accent) }
  .btn{ display:inline-block; margin-right:0.6rem; padding:0.6rem 1rem; border-radius:8px; text-decoration:none; background:var(--accent); color:#fff }
  .btn.ghost{ background:transparent; border:1px solid var(--muted); color:var(--text) }
  .card-mock{ width:320px; height:200px; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(2,6,23,0.08); display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#fff,#f5f7fb) }
  .card-mock img{ width:100%; height:100%; object-fit:cover }
  @media(max-width:800px){ .grid{ flex-direction:column } }
</style>