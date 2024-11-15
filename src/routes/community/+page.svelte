<script lang="ts">
	import { CommunityIntro, GetInvolved } from '$lib/copy';
	import { stats } from '$lib/stats';

	const {
		community_members,
		youtube_subscribers,
		monthly_active_members,
		founded_date,
	} = stats[0];

	const communityPlatforms = [
		{
			name: 'Guild.host',
			description: 'Join our discussion community',
			members: community_members,
			icon: '💬',
			link: 'https://guild.host/svelte-society-london',
			buttonText: 'Join Guild',
		},
		{
			name: 'WhatsApp',
			description: 'Real-time chat and updates',
			members: monthly_active_members,
			icon: '📱',
			link: '#whatsapp',
			buttonText: 'Join Group',
		},
		{
			name: 'YouTube',
			description: 'Watch talks and tutorials',
			members: youtube_subscribers,
			icon: '🎥',
			link: 'https://youtube.com/@SvelteSociety',
			buttonText: 'Subscribe',
		},
		{
			name: 'GitHub',
			description: 'Contribute to our projects',
			icon: '💻',
			link: 'https://github.com/svelte-society/london',
			buttonText: 'View Repos',
		},
	];

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
			link: 'https://guild.host/svelte-society-london',
		},
	];
</script>

<div class="min-h-screen bg-base-100">
	<!-- Hero Section -->
	<div class="hero bg-base-200 py-12">
		<div class="hero-content text-center">
			<div class="max-w-3xl">
				<div class="prose mx-auto">
					<CommunityIntro />
				</div>
			</div>
		</div>
	</div>

	<!-- Stats Card -->
	<div class="bg-base-100 px-4 py-16">
		<div class="container mx-auto max-w-5xl">
			<div
				class="stats stats-vertical w-full shadow lg:stats-horizontal"
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

	<!-- Community Platforms -->
	<div class="bg-base-200 px-4 py-24">
		<div class="container mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold">
				Join Our Platforms
			</h2>
			<div
				class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
			>
				{#each communityPlatforms as platform}
					<div class="card bg-base-100 shadow-xl">
						<div class="card-body">
							<div class="mb-4 text-4xl">{platform.icon}</div>
							<h3 class="card-title">{platform.name}</h3>
							<p>{platform.description}</p>
							{#if platform.members}
								<div class="badge badge-primary mt-2">
									{Number(platform.members).toLocaleString()}+ members
								</div>
							{/if}
							<div class="card-actions justify-end">
								<a
									href={platform.link}
									class="btn btn-primary btn-sm"
									target="_blank"
									rel="noopener noreferrer">{platform.buttonText}</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Get Involved Section -->
	<div class="bg-base-100 px-4 py-24">
		<div class="container mx-auto max-w-4xl">
			<div class="prose mx-auto mb-16">
				<GetInvolved />
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each activities as activity}
					<div
						class="card bg-base-200 shadow-xl transition-all hover:-translate-y-1"
					>
						<div class="card-body">
							<div class="mb-4 text-4xl">{activity.icon}</div>
							<h3 class="card-title">{activity.title}</h3>
							<p>{activity.description}</p>
							<div class="card-actions justify-end">
								<a href={activity.link} class="btn btn-primary btn-sm"
									>Learn More</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- WhatsApp Join Form -->
	<div class="bg-base-200 px-4 py-24" id="whatsapp">
		<div class="container mx-auto max-w-md">
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h3 class="card-title justify-center">
						Join WhatsApp Group
					</h3>
					<p class="text-center">
						Enter your phone number to receive an invitation to our
						WhatsApp group
					</p>
					<form class="mt-4 flex flex-col gap-4">
						<div class="form-control w-full">
							<label class="label" for="phone">
								<span class="label-text">Phone Number</span>
							</label>
							<input
								type="tel"
								id="phone"
								placeholder="+44"
								class="input input-bordered w-full"
							/>
						</div>
						<button type="submit" class="btn btn-primary"
							>Request Invitation</button
						>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Newsletter Section -->
	<div class="bg-base-100 px-4 py-24">
		<div class="container mx-auto max-w-xl text-center">
			<h2 class="mb-6 text-3xl font-bold">Stay Updated</h2>
			<p class="mb-8">
				Get notifications about upcoming events and community news.
			</p>
			<form class="flex flex-col gap-4 sm:flex-row">
				<input
					type="email"
					placeholder="your@email.com"
					class="input input-bordered flex-grow"
				/>
				<button type="submit" class="btn btn-primary"
					>Subscribe</button
				>
			</form>
		</div>
	</div>
</div>
