<script lang="ts">
	import { stats } from '$lib/stats';
	const { founded_date } = stats[0];
</script>

<div class="hero relative min-h-[80vh] overflow-hidden bg-base-200">
	<div
		class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
	></div>
	<div class="hero-content relative z-10 text-center">
		<div class="max-w-3xl">
			<h1
				class="mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent"
			>
				London's Svelte Community
			</h1>
			<p class="mx-auto mb-12 max-w-2xl text-xl">
				Join us monthly for tech talks, networking, and collaborative
				learning — connecting London's Svelte developers since {founded_date}.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/events" class="btn btn-primary">
					Join Next Meetup
				</a>
				<a href="/community" class="btn btn-outline">
					Get Involved
				</a>
			</div>
		</div>
	</div>
</div>
