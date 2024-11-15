<script lang="ts">
	import {
		Guidelines,
		SpeakIntro,
		SubmissionProcess,
	} from '$lib/copy';
	import { stats } from '$lib/stats';

	const {
		in_person_range,
		online_viewers,
		youtube_subscribers,
		average_talk_views,
	} = stats[0];

	const perks = [
		{
			title: 'Dual Audience',
			description: `Reach ${in_person_range} in-person and ${online_viewers} online viewers`,
			icon: '🎭',
		},
		{
			title: 'Global Platform',
			description: `Join our channel with ${youtube_subscribers}+ subscribers`,
			icon: '🌍',
		},
		{
			title: 'Lasting Impact',
			description: `${average_talk_views}+ views per talk on average`,
			icon: '📈',
		},
		{
			title: 'Professional Recording',
			description: 'High-quality video for your portfolio',
			icon: '🎥',
		},
		{
			title: 'Speaker Support',
			description: 'Practice runs and technical setup assistance',
			icon: '🤝',
		},
		{
			title: 'Community Recognition',
			description: 'Build your profile in the Svelte ecosystem',
			icon: '⭐',
		},
	];
</script>

<div class="min-h-screen bg-base-100">
	<!-- Hero Section -->
	<div class="hero bg-base-200 py-12">
		<div class="hero-content text-center">
			<div class="max-w-3xl">
				<div class="prose mx-auto">
					<SpeakIntro />
				</div>
			</div>
		</div>
	</div>

	<!-- Speaker Perks -->
	<div class="bg-base-100 px-4 py-24">
		<div class="container mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold">
				Why Speak at Svelte Society London?
			</h2>
			<div
				class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				{#each perks as perk}
					<div
						class="card bg-base-200 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
					>
						<div class="card-body">
							<div class="mb-4 text-4xl">{perk.icon}</div>
							<h3 class="card-title">{perk.title}</h3>
							<p>{perk.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Guidelines Section with Tabs -->
	<div class="bg-base-200 px-4 py-24">
		<div class="container mx-auto max-w-4xl">
			<div class="prose mx-auto mb-12">
				<Guidelines />
			</div>
		</div>
	</div>

	<!-- Submission Process -->
	<div class="bg-base-100 px-4 py-24">
		<div class="container mx-auto max-w-4xl">
			<div class="prose mx-auto mb-12">
				<SubmissionProcess />
			</div>
			<div class="divider my-12"></div>
			<!-- Example Format -->
			<div class="mx-auto max-w-2xl">
				<div class="mockup-code bg-base-300">
					<pre data-prefix="$"><code>title: My Svelte Journey</code
						></pre>
					<pre data-prefix="$"><code
							>description: |
  A deep dive into building a production app with 
  SvelteKit, covering state management, 
  optimizations, and lessons learned.</code
						></pre>
					<pre data-prefix="$"><code>length: 20 minutes</code></pre>
					<pre data-prefix="$"><code
							>bio: Frontend developer passionate about Svelte</code
						></pre>
					<pre data-prefix="$"><code
							>links:
  - https://github.com/username
  - https://twitter.com/username</code
						></pre>
				</div>
			</div>
		</div>
	</div>

	<!-- Featured Past Talks -->
	<div class="bg-base-200 px-4 py-24">
		<div class="container mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold">Past Talks</h2>
			<div class="grid gap-6">
				<div class="card card-side bg-base-100 shadow-xl">
					<figure class="w-64">
						<div
							class="flex h-full w-full items-center justify-center bg-base-300"
						>
							<span class="text-4xl">📺</span>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title">Building with SvelteKit</h3>
						<p>
							A comprehensive guide to building modern web
							applications with SvelteKit
						</p>
						<div class="card-actions justify-end">
							<a
								href="https://youtube.com/@SvelteSociety"
								class="btn btn-primary btn-sm">Watch</a
							>
						</div>
					</div>
				</div>

				<div class="card card-side bg-base-100 shadow-xl">
					<figure class="w-64">
						<div
							class="flex h-full w-full items-center justify-center bg-base-300"
						>
							<span class="text-4xl">📺</span>
						</div>
					</figure>
					<div class="card-body">
						<h3 class="card-title">State Management in Svelte</h3>
						<p>
							Exploring different approaches to state management in
							Svelte applications
						</p>
						<div class="card-actions justify-end">
							<a
								href="https://youtube.com/@SvelteSociety"
								class="btn btn-primary btn-sm">Watch</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="bg-base-100 px-4 py-24">
		<div class="container mx-auto max-w-2xl text-center">
			<h2 class="mb-6 text-3xl font-bold">
				Ready to Share Your Knowledge?
			</h2>
			<p class="mb-8">
				Whether you're a first-time speaker or experienced presenter,
				we're here to support you.
			</p>
			<div class="flex justify-center gap-4">
				<a
					href="https://github.com/svelte-society/london/issues/new"
					class="btn btn-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Submit Your Talk
				</a>
				<a href="/events" class="btn btn-outline">Attend First</a>
			</div>
		</div>
	</div>
</div>
