# Guild API

Base URL: `https://guild.host/api/next`

## Endpoints

### Global

| Method | Endpoint           | Description                            |
| ------ | ------------------ | -------------------------------------- |
| GET    | `/events/upcoming` | Paginated upcoming events (all guilds) |
| GET    | `/events/past`     | Paginated past events (all guilds)     |

### Slug (Guild/User specific)

| Method | Endpoint                  | Description               |
| ------ | ------------------------- | ------------------------- |
| GET    | `/{slug}`                 | Get guild/user by slug    |
| GET    | `/{slug}/events`          | All events for guild/user |
| GET    | `/{slug}/events/upcoming` | Upcoming events           |
| GET    | `/{slug}/events/past`     | Past events               |
| GET    | `/events/{slug}`          | Single event by slug      |

### Node (Data Graph)

| Method | Endpoint     | Description                                    |
| ------ | ------------ | ---------------------------------------------- |
| GET    | `/node/{id}` | Get node by ID (User/Guild/Event/Presentation) |

## Pagination

All list endpoints use cursor-based pagination with a **max page size of 5**.

| Param    | Type   | Description                |
| -------- | ------ | -------------------------- |
| `first`  | string | Number of items from start (max 5) |
| `last`   | string | Number of items from end (max 5) |
| `before` | string | Cursor for previous page   |
| `after`  | string | Cursor for next page       |

**Note:** Even if you request `first=50`, the API will only return 5 items per page. Use `pageInfo.hasNextPage` and `pageInfo.endCursor` to paginate through all results.

## Example: Fetch Past Events

```bash
curl "https://guild.host/api/next/svelte-society-london/events/past?first=3"
```

## Response Shape

```ts
interface GuildEventsResponse {
	__typename: 'Guild';
	id: string;
	events: {
		edges: EventEdge[];
		pageInfo: PageInfo;
	};
}

interface EventEdge {
	node: Event;
	cursor: string;
}

interface Event {
	id: string;
	slug: string;
	prettyUrl: string;
	fullUrl: string;
	shortUrl: string;
	name: string;
	description: string;
	startAt: string; // ISO 8601
	endAt: string;
	timeZone: string;
	visibility: 'LISTED' | string;
	hasVenue: boolean;
	hasExternalUrl: boolean;
	owner: {
		__typename: 'Guild';
		id: string;
		name: string;
	};
	uploadedSocialCard: string | null;
	generatedSocialCardURL: string;
	presentations: {
		edges: PresentationEdge[];
	};
	venue: Venue | null;
	createdAt: string;
	updatedAt: string;
}

interface PresentationEdge {
	node: Presentation;
	cursor: string;
}

interface Presentation {
	id: string;
	slug: string;
	prettyUrl: string;
	presenter: {
		id: string;
		firstName: string;
		lastName: string;
	} | null;
	presenterFirstName: string | null;
	presenterLastName: string | null;
	title: string;
	description: string;
	videoSourceUrl: string;
}

interface Venue {
	id: string;
	address: {
		id: string;
		location: {
			__typename: 'GeometryPoint';
			geojson: {
				type: 'Point';
				coordinates: [number, number]; // [lng, lat]
			};
		};
	};
}

interface PageInfo {
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	startCursor: string | null;
	endCursor: string | null;
}
```

## Usage for svelte.london

Slug: `svelte-society-london`

```ts
// Upcoming events
const upcoming = await fetch(
	'https://guild.host/api/next/svelte-society-london/events/upcoming?first=5',
).then((r) => r.json());

// Past events
const past = await fetch(
	'https://guild.host/api/next/svelte-society-london/events/past?first=10',
).then((r) => r.json());
```
