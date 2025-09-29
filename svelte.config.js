import adapter from '@sveltejs/adapter-auto';
import { partytownVite } from '@builder.io/partytown/utils';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				partytownVite({
					dest: 'static/~partytown' // 👈 aquí se copiarán los archivos
				})
			]
		}
	}
};

export default config;
