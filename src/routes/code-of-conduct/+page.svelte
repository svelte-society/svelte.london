<script lang="ts">
	let { data } = $props();
</script>

<div class="container mx-auto max-w-3xl px-4">
	<small>
		This is the official Svelte code of conduct taken from
		<a
			href="https://github.com/sveltejs/community/blob/main/CODE_OF_CONDUCT.md"
			target="_blank"
			rel="noopener noreferrer"
			class="link link-primary"
		>
			sveltejs/community
		</a>.
	</small>

	<div class="all-prose">
		{@html data.html}
	</div>
</div>
