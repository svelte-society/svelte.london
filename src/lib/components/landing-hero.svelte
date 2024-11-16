<script lang="ts">
	import { stats } from '$lib/stats';
	const { founded_date } = stats[0];
</script>

<section class="hero relative mt-8 md:mt-16">
	<div class="hero-content relative z-10 text-center">
		<div class="max-w-3xl">
			<div class="relative mb-8 md:mb-12">
				<header
					class="inline-block rounded-xl bg-base-100 p-4 shadow-xl md:p-8"
				>
					<h1 class="flex flex-col gap-2 text-left tracking-widest">
						<div class="space-x-2 md:space-x-4">
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
				class="mx-auto mb-8 max-w-2xl px-4 text-base md:mb-12 md:text-lg lg:text-xl"
			>
				We are <span class="font-bold text-[#ff3e00]">
					Svelte Society London
				</span>
				, join us monthly for tech talks, networking and learning — connecting
				London's Svelte developers since {founded_date}.
			</p>
			<div class="flex flex-wrap justify-center gap-3 md:gap-4">
				<a href="/events" class="btn btn-primary w-48 btn-sm md:btn-md">
					Join Next Meetup
				</a>
				<a href="/community" class="btn btn-outline w-48 btn-sm md:btn-md">
					Get Involved
				</a>
			</div>
		</div>
	</div>
</section>
