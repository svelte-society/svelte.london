<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{ href: '/events', label: 'Events' },
		{ href: '/speak', label: 'Speak' },
		{ href: '/host', label: 'Host' },
		{ href: '/community', label: 'Community' },
		{ href: '/code-of-conduct', label: 'Code of Conduct' },
	];
</script>

<div class="navbar mb-12 bg-base-100">
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
				class="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
			>
				{#each links as link}
					<li>
						<a
							href={link.href}
							class:text-primary={$page.url.pathname === link.href}
							class:underline={$page.url.pathname === link.href}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<a href="/" class="btn text-xl normal-case btn-ghost">
			Svelte Society London
		</a>
	</div>
	<div class="navbar-end hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class:text-primary={$page.url.pathname === link.href}
						class:underline={$page.url.pathname === link.href}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
