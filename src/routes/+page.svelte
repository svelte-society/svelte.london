<script lang="ts">
	import { LandingHero } from '$lib/components';
	import { stats } from '$lib/stats';
	const {
		in_person_range,
		youtube_subscribers,
		community_members,
		founded_date,
		average_talk_views,
	} = stats[0];
</script>

<div class="min-h-screen">
	<LandingHero />

	<!-- Feature Cards -->
	<div class="px-4 py-24">
		<div class="container mx-auto max-w-6xl">
			<div
				class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				{#snippet feature_card(
					badge_text: string,
					badge_bg: string,
					badge_content: string,
					title: string,
					description: string,
					link: string,
					cta_text: string,
				)}
					<!-- static classes added for tailwind -->
					<div class="badge badge-primary hidden">primary</div>
					<div class="badge badge-secondary hidden">secondary</div>
					<div class="badge badge-accent hidden">accent</div>

					<div
						class="card bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
					>
						<div class="card-body">
							<div
								class="badge badge-{badge_bg} text-{badge_content} mb-4"
							>
								{badge_text}
							</div>
							<h2 class="card-title">{title}</h2>
							<p>{description}</p>
							<div class="card-actions justify-end">
								<a href={link} class="btn btn-ghost btn-sm">
									{cta_text} →
								</a>
							</div>
						</div>
					</div>
				{/snippet}

				{@render feature_card(
					'Monthly Meetups',
					'primary',
					'primary-content',
					'In-person Events',
					`Join ${in_person_range} fellow Svelte developers monthly in central London for talks, networking, and refreshments.`,
					'/events',
					'Learn More',
				)}

				{@render feature_card(
					'Global Reach',
					'secondary',
					'secondary-content',
					'Online Community',
					`Connect with ${community_members}+ members worldwide. Live streams, discussions, and collaborative learning.`,
					'/community',
					'Join Us',
				)}

				{@render feature_card(
					'Resources',
					'accent',
					'accent-content',
					'Knowledge Hub',
					`Access ${Number(youtube_subscribers).toLocaleString()}+ subscribers worth of Svelte content, with ${average_talk_views}+ views per talk.`,
					'/speak',
					'Share Knowledge',
				)}
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="py-24">
		<div class="container mx-auto px-4 text-center">
			<div class="mx-auto max-w-2xl">
				<h2 class="mb-6 text-3xl font-bold">Ready to dive in?</h2>
				<p class="mb-8">
					Whether you're new to Svelte or an experienced developer,
					our community has a place for you.
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a href="/speak" class="btn btn-primary w-24">Talk</a>
					<a href="/host" class="btn btn-secondary w-24">Host</a>
					<a href="/events" class="btn btn-accent w-24">Attend</a>
				</div>
			</div>
		</div>
	</div>
</div>
