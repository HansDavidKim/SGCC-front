import allPosts from "$lib/data/posts.json";
import { redirect } from "@sveltejs/kit";
import type { PostSummary } from '$lib';
import type { PageServerLoad } from "./$types";

const POSTS_PER_PAGE = 10;

export const load: PageServerLoad = async ({ url }) => {
    const currentPage = parseInt(url.searchParams.get("page") || "1");
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
    const offset = (currentPage - 1) * POSTS_PER_PAGE;
    const slicedPostSummary: PostSummary[] = allPosts.slice(
        offset,
        offset + POSTS_PER_PAGE,
    );

    if (currentPage < 1) {
        url.searchParams.set("page", "1");
        throw redirect(307, url.toString());
    } else if (currentPage > totalPages) {
        url.searchParams.set("page", totalPages.toString());
        throw redirect(307, url.toString());
    }

    return { slicedPostSummary, currentPage, totalPages };
};
