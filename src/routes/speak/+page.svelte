<script lang="ts">
	import {
		Guidelines,
		SpeakIntro,
		SubmissionProcess,
	} from '$lib/copy';
	import { stats } from '$lib/stats';
	import { Head, type SeoConfig } from 'svead';

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
			description: `Join our YouTube channel with ${youtube_subscribers}+ subscribers`,
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

	const seo_config: SeoConfig = {
		title: 'Speak at Svelte Society London',
		description: 'Share your Svelte knowledge with the community.',
		url: 'https://svelte.london/speak',
	};
</script>

<Head {seo_config} />

<div class="all-prose mx-auto mb-12 max-w-3xl">
	<SpeakIntro />
</div>

<!-- Speaker Perks -->
<div class="px-4 py-24">
	<div class="container mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-3xl font-bold">
			Why Speak at Svelte Society London?
		</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each perks as perk}
				<div
					class="card shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
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
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<Guidelines />
</div>

<!-- Submission Process -->
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<SubmissionProcess />
</div>

<!-- CTA Section -->
<div class="px-4 py-24">
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
				href="https://github.com/svelte-society/london/issues/new/choose"
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
