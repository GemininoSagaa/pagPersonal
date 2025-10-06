import { json } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email) {
      return json({ error: 'Nombre y correo son obligatorios' }, { status: 400 });
    }

    const { error } = await supabase.from('contactos').insert([
      { name, email, message }
    ]);

    if (error) {
      console.error(error);
      return json({ error: 'Error al guardar en Supabase' }, { status: 500 });
    }

    return json({ success: true });
  } catch (err) {
    console.error(err);
    return json({ error: 'Error en el servidor' }, { status: 500 });
  }
}