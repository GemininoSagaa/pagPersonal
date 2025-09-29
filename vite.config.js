import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: 'static/~partytown' // 👈 aquí se copiarán los workers automáticamente
		})
	]
});
