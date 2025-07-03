import { sveltekit } from '@sveltejs/kit/vite';
import unocss from '@unocss/svelte-scoped/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [unocss(), sveltekit()],
});
