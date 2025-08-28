<script lang="ts">
    import { FeedCard } from '$lib';
    import type { PageData } from './$types';
    import { makeNavArray } from '$lib';

    const NAV_LENGTH: number = 5;

    export let data: PageData;
    let { slicedPostSummary, currentPage, totalPages } = data;
    let navArray = makeNavArray(currentPage, totalPages, NAV_LENGTH);
</script>

<main>
    <div class="bg-zinc-900">
        <h1 class="text-[50px] text-center text-white py-12">
            <span class="font-['Sogang'] font-light">feed:</span>
            <span class="font-normal"> </span>
            <span class="font-['Sogang'] font-extrabold text-[64px]">SGCC</span>
        </h1>
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