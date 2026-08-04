import auto from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const adapter =
	process.env.SELF_HOST === '1'
		? staticAdapter({
				fallback: 'index.html'
			})
		: auto();

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter
		})
	]
});