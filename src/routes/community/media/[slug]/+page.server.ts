import type { PageServerLoad } from './$types';
import type { MediaSummary } from '$lib';
import allMedia from '$lib/data/media_data.json';
import { slugify } from '$lib';
import { error, redirect } from '@sveltejs/kit';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';
import createDOMPurify from 'dompurify';

export const load: PageServerLoad = async ({ url, params }) => {
    const slug = params.slug;
    const id = parseInt(slug.split('-').pop());
    if (isNaN(id)) {
        throw error(404, 'Can\'t find media.');
    }
    const media: MediaSummary = allMedia.find(item => item.id === id);
    if (!media) {
        throw error(404, 'Can\'t find media.');
    }

    const rawHTML = await marked.parse(media.content);
    const window = new JSDOM('').window;
    const DOMPurify = createDOMPurify(window);
    const sanitizedHTML  = DOMPurify.sanitize(rawHTML);

    return { media: media, content: sanitizedHTML };
}