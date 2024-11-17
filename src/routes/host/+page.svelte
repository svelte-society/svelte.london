<script lang="ts">
	import { stats } from '$lib/stats';

	import {
		Format,
		HostIntro,
		Requirements,
		ValueProposition,
	} from '$lib/copy';

	const {
		in_person_range,
		online_viewers,
		youtube_subscribers,
		monthly_active_members,
		average_talk_views,
	} = stats[0];

	const benefits = [
		{
			title: 'Direct Developer Access',
			description: `Connect with ${in_person_range} engaged developers monthly in your space`,
			icon: '👥',
		},
		{
			title: 'Extended Reach',
			description: `${online_viewers} live stream viewers plus ${average_talk_views}+ YouTube views`,
			icon: '🌐',
		},
		{
			title: 'Brand Visibility',
			description: `Showcase your company to our ${youtube_subscribers}+ YouTube subscriber community`,
			icon: '🎯',
		},
		{
			title: 'Tech Leadership',
			description:
				'Position your company as a leader in the Svelte ecosystem',
			icon: '⭐',
		},
		{
			title: 'Community Growth',
			description: `Join our thriving community of ${monthly_active_members}+ active members`,
			icon: '📈',
		},
		{
			title: 'Talent Network',
			description:
				'Build relationships with skilled developers in a natural setting',
			icon: '🤝',
		},
	];
</script>

<!-- Hero Section -->
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<HostIntro />
</div>

<!-- Benefits Grid -->
<div class="px-4 py-24">
	<div class="container mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-3xl font-bold">
			Why Host Svelte Society London?
		</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each benefits as benefit}
				<div
					class="card bg-base-200 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
				>
					<div class="card-body">
						<div class="mb-4 text-4xl">{benefit.icon}</div>
						<h3 class="card-title">{benefit.title}</h3>
						<p>{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- Requirements Section -->
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<Requirements />
</div>

<!-- Event Format -->
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<Format />
</div>

<div class="px-4 py-24">
	<div class="container mx-auto max-w-4xl">
		<div class="prose mx-auto mb-12"></div>

		<!-- Timeline -->
		<div class="mx-auto flex max-w-xl flex-col">
			<ul class="timeline timeline-vertical">
				<li>
					<div class="timeline-start timeline-box">
						18:30 - Doors Open
					</div>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="timeline-end">Networking & Refreshments</div>
				</li>
				<li>
					<div class="timeline-start timeline-box">
						19:15 - Live Stream Starts
					</div>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/></svg
						>
					</div>
					<div class="timeline-end">Welcome & Host Introduction</div>
				</li>
				<li>
					<div class="timeline-start timeline-box">
						19:30 - First Talk
					</div>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/></svg
						>
					</div>
					<div class="timeline-end">Technical Presentation</div>
				</li>
				<li>
					<div class="timeline-start timeline-box">
						20:15 - Second Talk
					</div>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/></svg
						>
					</div>
					<div class="timeline-end">Technical Presentation</div>
				</li>
				<li>
					<div class="timeline-start timeline-box">
						20:45 - Wrap Up
					</div>
					<div class="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/></svg
						>
					</div>
					<div class="timeline-end">Networking Continues</div>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- Value Proposition -->
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<ValueProposition />
</div>

<!-- CTA Section -->
<div class="px-4 py-24">
	<div class="container mx-auto max-w-2xl text-center">
		<h2 class="mb-6 text-3xl font-bold">Ready to Host?</h2>
		<p class="mb-8">
			Join the growing list of companies supporting London's Svelte
			community.
		</p>
		<div class="flex justify-center gap-4">
			<a
				href="mailto:london@sveltesociety.dev"
				class="btn btn-primary"
			>
				Contact Us
			</a>
			<a href="/events" class="btn btn-outline">Attend First</a>
		</div>
	</div>
</div>
