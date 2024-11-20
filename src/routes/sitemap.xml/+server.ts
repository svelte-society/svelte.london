interface SitemapImage {
	/** Path to the image, e.g. '/images/speakers.jpg' */
	loc: string;
	/** Alt text / caption for the image */
	caption: string;
	/** Optional title for the image */
	title?: string;
}

interface SitemapPage {
	/** URL path without domain, must start with '/', e.g. '/events' */
	path: string;
	/** Last modification date in YYYY-MM-DD format */
	lastmod: string;
	/** Optional array of images associated with this page */
	images?: SitemapImage[];
}

/**
 * Generates an XML sitemap for Svelte London website
 *
 * @example
 * const pageEntry = {
 *   path: '/events',
 *   lastmod: '2024-03-18',
 *   type: 'events',
 *   images: [{
 *     loc: '/images/meetup.jpg',
 *     caption: 'March 2024 Meetup',
 *     title: 'Svelte London Meetup - March 2024'
 *   }]
 * }
 */
export const GET = async () => {
	const pages: SitemapPage[] = [
		{
			path: '/events',
			lastmod: '2024-11-18',
		},
		{
			path: '/community',
			lastmod: '2024-11-18',
		},
		{
			path: '/code-of-conduct',
			lastmod: '2024-11-18',
		},
		{
			path: '/host',
			lastmod: '2024-11-18',
		},
		{
			path: '/speak',
			lastmod: '2024-11-18',
		},
	];

	const site_url = 'https://svelte.london';

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
	.map((page) => {
		let entry = `    <url>
        <loc>${site_url}${page.path}</loc>
        <lastmod>${page.lastmod}</lastmod>`;

		// Add images if they exist
		if (page.images?.length) {
			entry +=
				'\n' +
				page.images
					.map(
						(img) =>
							`        <image:image>
            <image:loc>${site_url}${img.loc}</image:loc>
            <image:caption>${img.caption}</image:caption>${
							img.title
								? `
            <image:title>${img.title}</image:title>`
								: ''
						}
        </image:image>`,
					)
					.join('\n');
		}

		entry += '\n    </url>';
		return entry;
	})
	.join('\n')}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			// Cache for 1 hour on CDN, but allow immediate revalidation
			'Cache-Control':
				'public, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=3600',
		},
	});
};
