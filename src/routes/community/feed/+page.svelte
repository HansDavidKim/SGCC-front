<script lang="ts">
    import { FeedCard } from '$lib';
    import type { PageProps } from './$types';
    import { makeNavArray, Title } from '$lib';

    const NAV_LENGTH: number = 5;

    let { data }: PageProps = $props();
    let { slicedPostSummary, currentPage, totalPages } = $derived(data);
    let navArray = $derived(makeNavArray(currentPage, totalPages, NAV_LENGTH));
</script>

<main>
    <div class="bg-zinc-900">
        <Title title="FEED" />
        <div class="flex justify-center">
            <div class="flex flex-col w-250 gap-9">
                {#each slicedPostSummary as data}
                    <FeedCard {data} />
                {/each}
            </div>
        </div>

        <nav class="flex justify-center gap-x-4 py-6">
            <a href="?page={currentPage - 1}" class="text-white">이전</a>
            {#each navArray as n}
                <a href="?page={n}" class="text-white" class:font-bold={n === currentPage}>{n}</a>
            {/each}
            <a href="?page={currentPage + 1}" class="text-white">다음</a>
        </nav>
    </div>
</main>