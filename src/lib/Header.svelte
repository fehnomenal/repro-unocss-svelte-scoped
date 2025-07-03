<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  const { class: cls, children }: { class: ClassValue; children: Snippet } = $props();
</script>

<h1 class={cls}>{@render children()}</h1>
