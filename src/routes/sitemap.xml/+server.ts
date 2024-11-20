export const GET = async () => {
	// Statically defied routes bc/ Cloudflare
	const pages = [
		'/code-of-conduct',
		'/community',
		'/events',
		'/host',
		'/speak',
	];

	const site_url = 'https://svelte.london';

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${pages
			.map(
				(page) => `
			<url>
				<loc>${site_url}${page}</loc>
				<lastmod>${new Date().toISOString()}</lastmod>
			</url>
		`,
			)
			.join('')}
	</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control':
				'public, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=3600',
		},
	});
};
