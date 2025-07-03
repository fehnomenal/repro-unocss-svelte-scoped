# Repro for https://github.com/sveltejs/vite-plugin-svelte/issues/1157

1. Clone
2. pnpm i
3. pnpm dev
4. Visit url printed in console.

You should see something like the following warning:

```
21:58:42 [vite-plugin-svelte] src/lib/Wrapper.svelte:10:62 No scopable elements found in template. If you're using global styles in the style tag, you should move it into an external stylesheet file and import it in JS. See https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/faq.md#where-should-i-put-my-global-styles.
```
