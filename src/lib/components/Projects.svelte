<script>
import ProjectCard from './ProjectCard.svelte';
const demos = [
{ id: 'gym', title: 'Página de gimnasio', description: 'Landing para gimnasio con horarios y reservas', img: '/img/gym.jpg', url: '/demos/Gym' },
{ id: 'isp', title: 'Servicios de Internet', description: 'Web de ISP con planes y área de clientes', img: '/img/isp.jpg', url: '/demos/ProvedorInternet' },
{ id: 'ecom', title: 'Página e‑commerce', description: 'Demo de tienda con carrito y pasarela ficticia', img: '/img/ecom.jpg', url: 'https://ejemplo-ecom.demo' }
];
</script>


<section id="projects" class="projects">
<h2>Demos de proyectos</h2>
<div class="grid">
{#each demos as d}
<ProjectCard {d} />
{/each}
</div>
</section>


<style>
    .projects { 
        padding: 2rem 0; 
    }
    .grid {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; 
    }
</style>