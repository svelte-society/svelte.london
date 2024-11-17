<script lang="ts">
	import { EventsAbout, EventsAttending } from '$lib/copy';

	const attending_options = [
		{
			title: 'In Person',
			perks: [
				'Face-to-face networking',
				'Direct speaker interaction',
				'Food and refreshments',
				'Central London venue',
			],
			icon: '🤝',
			cta: 'RSVP Now',
		},
		{
			title: 'Online',
			perks: [
				'Live stream access',
				'Interactive chat',
				'Q&A participation',
				'Watch recordings later',
			],
			icon: '💻',
			cta: 'Join Stream',
		},
	];
</script>

<!-- Hero Section -->

<div class="all-prose mx-auto mb-12 max-w-3xl">
	<EventsAbout />
</div>

<!-- Next Event Card -->
<div class="all-prose mx-auto max-w-3xl">
	<h2>Next Event</h2>
	<p>
		We use Guild for our event coordination, you can see previous and
		upcoming events there.
	</p>
</div>
<div class="mx-auto mb-12 max-w-3xl">
	<a
		href="https://guild.host/svelte-society-london/events"
		target="_blank"
		rel="noopener noreferrer"
		class="btn btn-primary btn-block"
	>
		Check Svelte Society London on Guild
	</a>
</div>

<!-- Attending Options -->
<div class="all-prose mx-auto mb-16 max-w-3xl">
	<EventsAttending />
</div>
<div class="px-4 py-24">
	<div class="container mx-auto max-w-3xl">
		<div class="grid gap-8 md:grid-cols-2">
			{#each attending_options as option}
				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<div class="mb-4 text-4xl">{option.icon}</div>
						<h3 class="card-title">{option.title}</h3>
						<ul class="my-4">
							{#each option.perks as perk}
								<li class="mb-2 flex items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										class="h-5 w-5 text-success"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
											clip-rule="evenodd"
										/>
									</svg>
									{perk}
								</li>
							{/each}
						</ul>
						<div class="card-actions justify-end">
							<a
								href="https://guild.host/svelte-society-london/events"
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-primary"
							>
								{option.cta}
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
