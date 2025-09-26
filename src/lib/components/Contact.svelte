<script>
  let name = ''
  let email = ''
  let msg = ''
  let sent = false

  function send(){
    // ejemplo: solo feedback local. Reemplaza con llamada a backend cuando lo tengas.
    if(!email) return alert('Agrega tu correo')
    sent = true
    setTimeout(()=>{ sent = false; name = ''; email = ''; msg = '' }, 1500)
  }
</script>

<section id="contact" class="contact">
  <h2>Contacto</h2>
  <form on:submit|preventDefault={send}>
    <input placeholder="Tu nombre" bind:value={name} />
    <input placeholder="Tu correo" type="email" bind:value={email} />
    <textarea placeholder="Mensaje" bind:value={msg}></textarea>
    <button type="submit">Enviar</button>
    {#if sent}<span class="sent">Enviado ✅</span>{/if}
  </form>
</section>

<style>
  .contact{ padding:2rem 0 }
  form{ display:flex; flex-direction:column; gap:0.6rem; max-width:560px }
  input, textarea{ padding:0.7rem; border-radius:8px; border:1px solid rgba(10,10,10,0.06) }
  button{ padding:0.6rem 0.9rem; border-radius:8px; border:none; background:var(--accent); color:#fff }
  .sent{ margin-left:0.6rem }
</style>