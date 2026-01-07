<!-- Timeline.svelte -->
<script lang="ts">
	const timeline_data = [
		{
			time: '18:30',
			title: 'Doors Open',
			description: 'Networking & Refreshments',
		},
		{
			time: '19:15',
			title: 'Live Stream Starts',
			description: 'Welcome & Host Introduction',
		},
		{
			time: '~19:30',
			title: 'First Talk',
			description: 'Technical Presentation',
		},
		{
			time: '~20:15',
			title: 'Second Talk',
			description: 'Technical Presentation',
		},
		{
			time: '20:45',
			title: 'Wrap Up, leave venue',
			description: 'Networking Continues',
		},
	] as const;
</script>

<div class="relative mx-auto mb-24 max-w-4xl py-12">
	<!-- Vertical Line - Centred on desktop, left-aligned on mobile -->
	<div
		class="absolute left-4 h-full w-0.5 bg-base-300 md:left-1/2 md:-translate-x-1/2"
	></div>

	<!-- Timeline Items -->
	<div class="relative space-y-24">
		{#each timeline_data as item, index}
			<div class="relative flex items-center justify-center">
				<!-- Dot - Left-aligned on mobile, centred on desktop -->
				<div
					class="absolute left-4 z-10 -translate-x-1/2 md:left-1/2"
				>
					<div class="h-3 w-3 rounded-full bg-primary"></div>
				</div>

				<!-- Content -->
				<div class="w-full md:grid md:grid-cols-2 md:gap-4">
					{#if index % 2 === 0}
						<!-- Left side content on desktop, full width on mobile -->
						<div class="pl-8 md:pr-8 md:pl-0">
							<div class="card bg-base-100 shadow-lg">
								<div class="card-body p-4 text-xl">
									<div class="flex items-center gap-2">
										<span class="font-bold text-primary">
											{item.time}
										</span>
										<span class="text-base-content/60">-</span>
										<span class="font-bold">{item.title}</span>
									</div>
									<p class="text-base-content/60">
										{item.description}
									</p>
								</div>
							</div>
						</div>
						<div class="hidden md:block"></div>
					{:else}
						<!-- Right side content on desktop, full width on mobile -->
						<div class="hidden md:block"></div>
						<div class="pl-8 md:pl-8">
							<div class="card bg-base-100 shadow-lg">
								<div class="card-body p-4 text-xl">
									<div class="flex items-center gap-2">
										<span class="font-bold text-primary">
											{item.time}
										</span>
										<span class="text-base-content/60">-</span>
										<span class="font-bold">{item.title}</span>
									</div>
									<p class="text-base-content/60">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
