<script lang="ts">
	import { CommunityIntro, GetInvolved } from '$lib/copy';
	import { stats } from '$lib/stats';
	import { Head, type SeoConfig } from 'svead';

	const {
		community_members,
		youtube_subscribers,
		monthly_active_members,
		founded_date,
	} = stats[0];

	const activities = [
		{
			title: 'Monthly Meetups',
			description:
				'Join us in person or online for talks and networking',
			icon: '🗓️',
			link: '/events',
		},
		{
			title: 'Give a Talk',
			description: 'Share your Svelte knowledge with the community',
			icon: '🎤',
			link: '/speak',
		},
		{
			title: 'Host an Event',
			description: 'Provide space for the community to gather',
			icon: '🏢',
			link: '/host',
		},
		{
			title: 'Help Others',
			description: 'Answer questions and share your experience',
			icon: '🤝',
			link: 'https://discord.gg/svelte',
		},
	];

	const seo_config: SeoConfig = {
		title: 'Svelte Society London Community',
		description: 'Join the Svelte community in London.',
		url: 'https://svelte.london/community',
	};
</script>

<Head {seo_config} />

<!-- Hero Section -->
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<CommunityIntro />
</div>

<!-- Stats Card -->
<div class="bg-base-100 px-4 py-16">
	<div class="container mx-auto max-w-5xl">
		<div
			class="stats w-full stats-vertical shadow lg:stats-horizontal"
		>
			<div class="stat">
				<div class="stat-title">Founded</div>
				<div class="stat-value">{founded_date}</div>
				<div class="stat-desc">Growing strong</div>
			</div>

			<div class="stat">
				<div class="stat-title">Community</div>
				<div class="stat-value">{community_members}+</div>
				<div class="stat-desc">Total members</div>
			</div>

			<div class="stat">
				<div class="stat-title">Active Monthly</div>
				<div class="stat-value">{monthly_active_members}+</div>
				<div class="stat-desc">Engaged members</div>
			</div>

			<div class="stat">
				<div class="stat-title">YouTube</div>
				<div class="stat-value">
					{Number(youtube_subscribers).toLocaleString()}+
				</div>
				<div class="stat-desc">Subscribers</div>
			</div>
		</div>
	</div>
</div>

<!-- Get Involved Section -->
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<GetInvolved />
</div>
<div class="px-4 py-24">
	<div class="container mx-auto max-w-4xl">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each activities as activity}
				<div
					class="card shadow-xl transition-all hover:-translate-y-1"
				>
					<div class="card-body">
						<div class="mb-4 text-4xl">{activity.icon}</div>
						<h3 class="card-title">{activity.title}</h3>
						<p>{activity.description}</p>
						<div class="card-actions justify-end">
							<a href={activity.link} class="btn btn-sm btn-primary"
								>Learn More</a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- Newsletter Section -->
<div class="all-prose mx-auto max-w-3xl">
	<h2>Stay Updated</h2>
	<p>Get notifications about upcoming events and community news.</p>
</div>
<div class="mx-auto mb-12 max-w-3xl">
	<a
		href="https://guild.host/svelte-society-london/events"
		target="_blank"
		rel="noopener noreferrer"
		class="btn btn-block btn-primary"
	>
		Join the Svelte Society London Guild
	</a>
</div>
