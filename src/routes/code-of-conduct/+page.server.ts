import { marked } from 'marked';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const response = await fetch(
		'https://raw.githubusercontent.com/sveltejs/community/main/CODE_OF_CONDUCT.md',
	);

	if (!response.ok) {
		throw new Error('Failed to fetch Code of Conduct');
	}

	const markdown = await response.text();
	const html = marked(markdown);

	return {
		html,
	};
};
