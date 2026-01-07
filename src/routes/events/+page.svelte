<script lang="ts">
	import { EventsAbout, EventsAttending } from '$lib/copy';
	import type { GuildEvent } from '$lib/types';
	import { Head, type SeoConfig } from 'svead';

	let { data } = $props();

	const seo_config: SeoConfig = {
		title: 'Svelte Society London Events',
		description:
			'Join us for talks, workshops, and networking in London.',
		url: 'https://svelte.london/events',
	};

	function format_date(iso: string): string {
		return new Date(iso).toLocaleDateString('en-GB', {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		});
	}

	function format_time(iso: string): string {
		return new Date(iso).toLocaleTimeString('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
		});
	}

	function get_speakers(event: GuildEvent): string[] {
		return event.presentations.edges.map((p) => {
			const pres = p.node;
			if (pres.presenter) {
				return `${pres.presenter.firstName} ${pres.presenter.lastName}`;
			}
			return `${pres.presenterFirstName ?? ''} ${pres.presenterLastName ?? ''}`.trim();
		});
	}
</script>

<Head {seo_config} />

<!-- Hero Section -->
<div class="all-prose mx-auto mb-12 max-w-3xl">
	<EventsAbout />
</div>

<!-- Upcoming Events -->
{#if data.upcoming.length > 0}
	<section class="mx-auto mb-16 max-w-4xl px-4">
		<h2 class="mb-8 text-3xl font-bold">Upcoming Events</h2>
		<div class="grid gap-6">
			{#each data.upcoming as event}
				<a
					href={event.fullUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="card bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
				>
					<div class="card-body">
						<div
							class="flex flex-wrap items-start justify-between gap-4"
						>
							<div>
								<h3 class="card-title text-xl">{event.name}</h3>
								<p class="mt-1 text-base-content/70">
									{format_date(event.startAt)} &bull; {format_time(
										event.startAt,
									)} - {format_time(event.endAt)}
								</p>
							</div>
							<span class="badge badge-primary">RSVP</span>
						</div>
						{#if get_speakers(event).length > 0}
							<div class="mt-4">
								<p class="text-sm font-medium">Speakers:</p>
								<p class="text-sm text-base-content/70">
									{get_speakers(event).join(', ')}
								</p>
							</div>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</section>
{:else}
	<section class="mx-auto mb-16 max-w-4xl px-4">
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body text-center">
				<h2 class="card-title justify-center text-2xl">
					No upcoming events
				</h2>
				<p class="text-base-content/70">
					Check back soon or follow us for updates!
				</p>
				<div class="mt-4 card-actions justify-center">
					<a
						href="https://guild.host/svelte-society-london"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary"
					>
						Follow on Guild
					</a>
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- Past Events -->
{#if data.past.length > 0}
	<section class="mx-auto mb-16 max-w-4xl px-4">
		<h2 class="mb-8 text-3xl font-bold">Past Events</h2>
		<div class="grid gap-4 md:grid-cols-2">
			{#each data.past as event}
				<a
					href={event.fullUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="card bg-base-200 transition-shadow hover:shadow-lg"
				>
					<div class="card-body p-5">
						<h3 class="card-title text-base">{event.name}</h3>
						<p class="text-sm text-base-content/60">
							{format_date(event.startAt)}
						</p>
						{#if get_speakers(event).length > 0}
							<p class="text-xs text-base-content/60">
								{get_speakers(event).join(', ')}
							</p>
						{/if}
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a
				href="https://guild.host/svelte-society-london/events"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-outline"
			>
				View all past events
			</a>
		</div>
	</section>
{/if}

<!-- Attending Options -->
<div class="all-prose mx-auto mb-16 max-w-3xl">
	<EventsAttending />
</div>
<div class="px-4 py-24">
	<div class="container mx-auto max-w-3xl">
		<div class="grid gap-8 md:grid-cols-2">
			{#each [{ title: 'In Person', perks: ['Face-to-face networking', 'Direct speaker interaction', 'Food and refreshments', 'Central London venue'], icon: '🤝' }, { title: 'Online', perks: ['Live stream access', 'Interactive chat', 'Q&A participation', 'Watch recordings later'], icon: '💻' }] as option}
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
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
