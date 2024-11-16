<script lang="ts">
	import { Nav } from '$lib/components';
	import '../app.css';

	let { children } = $props();
</script>

<main class="container mx-auto max-w-5xl flex-grow px-4">
	<Nav />
	{@render children()}
</main>
