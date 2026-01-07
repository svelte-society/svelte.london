<script lang="ts">
	import { stats } from '$lib/stats';
	const { founded_date } = stats[0];
</script>

<section class="relative hero mt-8 md:mt-16">
	<div class="relative hero-content z-10 text-center">
		<div class="max-w-3xl">
			<div class="relative mb-8 md:mb-12">
				<header
					class="inline-block rounded-xl bg-base-100 p-4 shadow-xl md:p-8"
				>
					<h1 class="flex flex-col gap-2 text-left tracking-widest">
						<div class="flex flex-nowrap space-x-5 whitespace-nowrap">
							<span
								class="text-4xl font-black md:text-5xl lg:text-7xl"
							>
								LONDON'S
							</span>
							<span
								class="text-4xl font-black text-[#ff3e00] md:text-5xl lg:text-7xl"
							>
								SVELTE
							</span>
						</div>
						<span class="text-4xl font-black md:text-5xl lg:text-7xl">
							COMMUNITY
						</span>
						<span
							class="mt-1 text-right text-lg font-bold text-[#ff3e00] md:text-xl lg:text-2xl"
						>
							EST. 2019
						</span>
					</h1>
					<div
						class="mt-3 border-t-2 border-base-content pt-4 md:mt-4 md:pt-7"
					>
						<span
							class="text-lg font-bold text-[#ff3e00] md:text-xl lg:text-2xl"
						>
							CITY OF TECH MEETUPS
						</span>
					</div>
				</header>
			</div>
			<p
				class="mx-auto mb-8 max-w-2xl px-4 text-lg leading-relaxed md:mb-12 md:text-xl lg:text-2xl lg:leading-relaxed"
			>
				Hi! We're <span class="font-bold text-[#ff3e00]">
					Svelte Society London
				</span>
				join us for tech talks, networking and learning — connecting London's
				Svelte developers since {founded_date}. We're the
				<em>first</em>
				and most consistent Svelte community
				<strong>globally</strong>.
			</p>
			<div class="flex flex-wrap justify-center gap-3 md:gap-7">
				<a
					href="/events"
					class="btn w-52 btn-md btn-primary md:btn-lg"
				>
					Join Next Meetup
				</a>
				<a
					href="/community"
					class="btn w-52 btn-outline btn-md md:btn-lg"
				>
					Get Involved
				</a>
			</div>
		</div>
	</div>
</section>
