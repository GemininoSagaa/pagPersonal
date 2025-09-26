<script>
export let d;
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<article class="card" on:click={() => window.open(d.url, '_blank')} tabindex="0" role="link">
<div class="thumb"><img src={d.img} alt={d.title} /></div>
<div class="info">
<h3>{d.title}</h3>
<p>{d.description}</p>
<small>Haga click para abrir demo</small>
</div>
</article>


<style>
.card { display: flex; flex-direction: column; border-radius: 10px; overflow: hidden; cursor: pointer; background: var(--card); transition: transform .18s ease, box-shadow .18s ease }
.card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(2,6,23,0.08) }
.thumb { height: 160px; overflow: hidden }
.thumb img { width: 100%; height: 100%; object-fit: cover }
.info { padding: 0.8rem }
</style>