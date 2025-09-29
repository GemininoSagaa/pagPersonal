import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			// 👇 crea una ruta absoluta hacia la carpeta static
			dest: resolve(__dirname, 'static/~partytown')
		})
	]
});
