<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Header from './Header.svelte';

  const props: ComponentProps<typeof Header> = $props();
</script>

<Header class={['uppercase', props.class]}  children={props.children}/>
