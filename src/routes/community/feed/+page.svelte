<script lang="ts">
    import { PostCard } from '$lib';
    import type { PageData } from './$types';

    export let data: PageData;
    $: slicedPostSummary = data.slicedPostSummary;
    $: currentPage = data.currentPage;
    $: totalPages = data.totalPages;
    $: navArray = makeNavArray(currentPage);

    const NAV_LENGTH: number = 5;

    function makeNavArray(_currentPage: number): number[] {
        let _navArray: number[] = [];

        for (let i = 1; i < NAV_LENGTH + 1; i++) {
            _navArray.push(
                Math.floor((_currentPage - 1) / NAV_LENGTH) * NAV_LENGTH + i,
            );
        }

        _navArray = _navArray.filter((n) => n <= totalPages);

        return _navArray;
    }
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
                    <PostCard {data} />
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