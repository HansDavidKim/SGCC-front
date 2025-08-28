<script lang="ts">
    import { MediaCard } from '$lib';
    import type { PageData } from './$types';
    import { makeNavArray } from '$lib';

    const NAV_LENGTH: number = 4;

    export let data: PageData;
    let { slicedMediaSummary, currentPage, totalPages } = data;
    let navArray = makeNavArray(currentPage, totalPages, NAV_LENGTH);
</script>

<main>
    <div class="bg-zinc-900 py-6">
        <h1 class="text-[50px] text-center text-white py-12">
        <span class="font-['Sogang'] font-light">미디어관:</span>
        <span class="font-normal"> </span>
        <span class="font-['Sogang'] font-extrabold text-[64px]">SGCC</span>
        </h1>

        <div class="flex justify-center mt-9">
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each slicedMediaSummary as data}
                    <MediaCard {data} />
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
