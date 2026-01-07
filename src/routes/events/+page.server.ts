import type { GuildEvent, GuildEventsResponse } from '$lib/types';
import type { PageServerLoad } from './$types';

const GUILD_API = 'https://guild.host/api/next';
const GUILD_SLUG = 'svelte-society-london';

async function fetch_all_past_events(
	fetch_fn: typeof fetch,
	limit: number,
): Promise<GuildEvent[]> {
	const events: GuildEvent[] = [];
	let cursor: string | null = null;

	while (events.length < limit) {
		const url = cursor
			? `${GUILD_API}/${GUILD_SLUG}/events/past?first=5&after=${encodeURIComponent(cursor)}`
			: `${GUILD_API}/${GUILD_SLUG}/events/past?first=5`;

		const res = await fetch_fn(url);
		const data: GuildEventsResponse = await res.json();

		for (const edge of data.events.edges) {
			if (events.length < limit) {
				events.push(edge.node);
			}
		}

		if (!data.events.pageInfo.hasNextPage || events.length >= limit) {
			break;
		}
		cursor = data.events.pageInfo.endCursor;
	}

	return events;
}

export const load: PageServerLoad = async ({ fetch }) => {
	const [upcomingRes, past] = await Promise.all([
		fetch(`${GUILD_API}/${GUILD_SLUG}/events/upcoming?first=5`),
		fetch_all_past_events(fetch, 6),
	]);

	const upcoming: GuildEventsResponse = await upcomingRes.json();

	return {
		upcoming: upcoming.events.edges.map((e) => e.node),
		past,
	};
};
