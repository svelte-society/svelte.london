export interface GuildEventsResponse {
	__typename: 'Guild';
	id: string;
	events: {
		edges: EventEdge[];
		pageInfo: PageInfo;
	};
}

export interface EventEdge {
	node: GuildEvent;
	cursor: string;
}

export interface GuildEvent {
	id: string;
	slug: string;
	prettyUrl: string;
	fullUrl: string;
	shortUrl: string;
	name: string;
	description: string;
	startAt: string;
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

export interface PresentationEdge {
	node: Presentation;
	cursor: string;
}

export interface Presentation {
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

export interface Venue {
	id: string;
	address: {
		id: string;
		location: {
			__typename: 'GeometryPoint';
			geojson: {
				type: 'Point';
				coordinates: [number, number];
			};
		};
	};
}

export interface PageInfo {
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	startCursor: string | null;
	endCursor: string | null;
}
