<script>
  let name = ''
  let email = ''
  let msg = ''
  let sent = false
  let errorMsg = ''

  async function send() {
    if (!name || !email) {
      errorMsg = 'Nombre y correo son obligatorios'
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: msg })
      })

      const data = await res.json()

      if (res.ok) {
        sent = true
        errorMsg = ''
        setTimeout(() => {
          sent = false
          name = ''
          email = ''
          msg = ''
        }, 2000)
      } else {
        errorMsg = data.error || 'Error al enviar mensaje'
      }
    } catch (err) {
      console.error(err)
      errorMsg = 'Error en el servidor'
    }
  }
</script>

<section id="contact" class="contact">
  <h2>Contacto</h2>
  <form on:submit|preventDefault={send}>
    <input
      placeholder="Tu nombre"
      bind:value={name}
      required
      autocomplete="name"
    />
    <input
      placeholder="Tu correo"
      type="email"
      bind:value={email}
      required
      autocomplete="email"
    />
    <textarea
      placeholder="Mensaje"
      bind:value={msg}
      autocomplete="off"
    ></textarea>

    <button type="submit">Enviar</button>

    {#if sent}
      <span class="sent">Enviado ✅</span>
    {/if}
    {#if errorMsg}
      <span style="color:red">{errorMsg}</span>
    {/if}
  </form>
</section>

<style>
  .contact {
    padding: 2rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    max-width: 560px;
  }
  input,
  textarea {
    padding: 0.7rem;
    border-radius: 8px;
    border: 1px solid rgba(10, 10, 10, 0.06);
    font-size: 1rem;
    font-family: inherit;
    resize: none;
  }
  button {
    padding: 0.6rem 0.9rem;
    border-radius: 8px;
    border: none;
    background: var(--accent);
    color: #fff;
    cursor: pointer;
  }
  .sent {
    margin-left: 0.6rem;
    color: green;
  }
</style>