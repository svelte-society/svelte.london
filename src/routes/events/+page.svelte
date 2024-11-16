<script lang="ts">
	import { EventsAbout, EventsAttending } from '$lib/copy';
	import { stats } from '$lib/stats';

	const {
		in_person_range,
		online_viewers,
		youtube_subscribers,
		average_talk_views,
	} = stats[0];

	const nextEvent = {
		date: '28th November 2024',
		time: '18:30 - 21:00',
		location: 'Central London',
		talks: [
			{
				title: 'Building with SvelteKit',
				speaker: 'Sarah Developer',
				description:
					'A deep dive into modern web applications with SvelteKit',
			},
			{
				title: 'State Management Patterns',
				speaker: 'Alex Engineer',
				description:
					'Exploring different approaches to state management',
			},
		],
	};

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

<div class="min-h-screen bg-base-100">
	<!-- Hero Section -->
	<div class="hero bg-base-200 py-12">
		<div class="hero-content text-center">
			<div class="max-w-3xl">
				<div class="all-prose mx-auto prose-ul:text-left">
					<EventsAbout />
				</div>
			</div>
		</div>
	</div>

	<!-- Next Event Card -->
	<div class="bg-base-100 px-4 py-24">
		<div class="container mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold">Next Event</h2>
			<div class="card bg-primary text-primary-content">
				<div class="card-body">
					<div
						class="flex flex-wrap items-center justify-between gap-4"
					>
						<div>
							<h3 class="card-title text-2xl">{nextEvent.date}</h3>
							<p class="text-lg opacity-90">{nextEvent.time}</p>
							<p class="mt-2">{nextEvent.location}</p>
						</div>
						<div class="stats bg-primary-content text-primary shadow">
							<div class="stat">
								<div class="stat-title">In Person</div>
								<div class="stat-value text-2xl">
									{in_person_range}
								</div>
								<div class="stat-desc">Attendees</div>
							</div>
							<div class="stat">
								<div class="stat-title">Online</div>
								<div class="stat-value text-2xl">
									{online_viewers}
								</div>
								<div class="stat-desc">Viewers</div>
							</div>
						</div>
					</div>

					<div class="divider"></div>

					<!-- Talks -->
					<div class="grid gap-6 md:grid-cols-2">
						{#each nextEvent.talks as talk}
							<div
								class="rounded-box bg-primary-content p-6 text-primary"
							>
								<h4 class="mb-2 font-bold">{talk.title}</h4>
								<p class="mb-4 text-sm opacity-80">
									{talk.description}
								</p>
								<div class="badge badge-secondary">
									{talk.speaker}
								</div>
							</div>
						{/each}
					</div>

					<div class="card-actions mt-6 justify-end">
						<a href="#rsvp" class="btn">RSVP Now</a>
						<a
							href="https://calendar.google.com"
							class="btn btn-outline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Add to Calendar
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Attending Options -->
	<div class="bg-base-200 px-4 py-24">
		<div class="container mx-auto max-w-4xl">
			<div class="all-prose mx-auto mb-16">
				<EventsAttending />
			</div>

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
								<a href="#rsvp" class="btn btn-primary"
									>{option.cta}</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Past Events -->
	<div class="bg-base-100 px-4 py-24">
		<div class="container mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold">
				Previous Events
			</h2>
			<div class="flex justify-center">
				<div class="stats shadow">
					<div class="stat">
						<div class="stat-title">YouTube</div>
						<div class="stat-value">
							{Number(youtube_subscribers).toLocaleString()}+
						</div>
						<div class="stat-desc">Subscribers</div>
					</div>
					<div class="stat">
						<div class="stat-title">Average Views</div>
						<div class="stat-value">{average_talk_views}+</div>
						<div class="stat-desc">Per Talk</div>
					</div>
				</div>
			</div>

			<div class="mt-12 text-center">
				<a
					href="https://youtube.com/@SvelteSociety"
					class="btn btn-wide"
					target="_blank"
					rel="noopener noreferrer"
				>
					Watch Past Events
				</a>
			</div>
		</div>
	</div>

	<!-- RSVP Form -->
	<div class="bg-base-200 px-4 py-24" id="rsvp">
		<div class="container mx-auto max-w-md">
			<h2 class="mb-12 text-center text-3xl font-bold">
				RSVP for Next Event
			</h2>
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<form class="flex flex-col gap-4">
						<div class="form-control w-full">
							<label class="label" for="name">
								<span class="label-text">Name</span>
							</label>
							<input
								type="text"
								id="name"
								placeholder="Your name"
								class="input input-bordered w-full"
							/>
						</div>

						<div class="form-control w-full">
							<label class="label" for="email">
								<span class="label-text">Email</span>
							</label>
							<input
								type="email"
								id="email"
								placeholder="your@email.com"
								class="input input-bordered w-full"
							/>
						</div>

						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">Attending in person</span>
								<input
									type="radio"
									name="attendance"
									class="radio"
									checked
								/>
							</label>
						</div>

						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text">Watching online</span>
								<input type="radio" name="attendance" class="radio" />
							</label>
						</div>

						<button type="submit" class="btn btn-primary mt-4"
							>RSVP Now</button
						>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
