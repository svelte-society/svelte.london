<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Nav } from '$lib/components';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="container mx-auto max-w-5xl grow px-4">
	<Nav />
	{@render children()}
</main>
