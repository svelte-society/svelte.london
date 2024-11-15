<script lang="ts">
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
	<!-- Navbar -->
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</label>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul
					tabindex="0"
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="/events">Events</a></li>
					<li><a href="/speak">Speak</a></li>
					<li><a href="/host">Host</a></li>
					<li><a href="/community">Community</a></li>
				</ul>
			</div>
			<a href="/" class="btn btn-ghost text-xl normal-case"
				>Svelte Society London</a
			>
		</div>
		<div class="navbar-end hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/events">Events</a></li>
				<li><a href="/speak">Speak</a></li>
				<li><a href="/host">Host</a></li>
				<li><a href="/community">Community</a></li>
			</ul>
		</div>
	</div>

	<!-- Hero Section with Gradients -->
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
					Join us monthly for tech talks, networking, and
					collaborative learning — connecting London's Svelte
					developers since {founded_date}.
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

	<!-- Feature Cards -->
	<div class="px-4 py-24">
		<div class="container mx-auto max-w-6xl">
			<div
				class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				<!-- In-person Events -->
				<div
					class="card bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
				>
					<div class="card-body">
						<div class="badge badge-primary mb-4">
							Monthly Meetups
						</div>
						<h2 class="card-title">In-person Events</h2>
						<p>
							Join {in_person_range} fellow Svelte developers monthly in
							central London for talks, networking, and refreshments.
						</p>
						<div class="card-actions justify-end">
							<a href="/events" class="btn btn-ghost btn-sm"
								>Learn More →</a
							>
						</div>
					</div>
				</div>

				<!-- Online Community -->
				<div
					class="card bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
				>
					<div class="card-body">
						<div class="badge badge-secondary mb-4">Global Reach</div>
						<h2 class="card-title">Online Community</h2>
						<p>
							Connect with {community_members}+ members worldwide.
							Live streams, discussions, and collaborative learning.
						</p>
						<div class="card-actions justify-end">
							<a href="/community" class="btn btn-ghost btn-sm"
								>Join Us →</a
							>
						</div>
					</div>
				</div>

				<!-- Knowledge Sharing -->
				<div
					class="card bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
				>
					<div class="card-body">
						<div class="badge badge-accent mb-4">Resources</div>
						<h2 class="card-title">Knowledge Hub</h2>
						<p>
							Access {Number(youtube_subscribers).toLocaleString()}+
							subscribers worth of Svelte content, with {average_talk_views}+
							views per talk.
						</p>
						<div class="card-actions justify-end">
							<a href="/speak" class="btn btn-ghost btn-sm"
								>Share Knowledge →</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="bg-base-200 py-24">
		<div class="container mx-auto px-4 text-center">
			<div class="mx-auto max-w-2xl">
				<h2 class="mb-6 text-3xl font-bold">Ready to dive in?</h2>
				<p class="mb-8">
					Whether you're new to Svelte or an experienced developer,
					our community has a place for you.
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a href="/speak" class="btn btn-primary">Give a Talk</a>
					<a href="/host" class="btn btn-secondary">Host an Event</a>
					<a href="/events" class="btn btn-accent">Attend Meetup</a>
				</div>
			</div>
		</div>
	</div>
</div>
