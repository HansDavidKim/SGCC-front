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
    <div class="flex justify-center">
        <div class="flex flex-col max-w-5xl">
            {#each slicedPostSummary as data}
                <PostCard {data} />
            {/each}
        </div>
    </div>

    <nav class="flex justify-center gap-x-4 my-4">
        <a href="?page={currentPage - 1}">이전</a>
        {#each navArray as n}
            <a href="?page={n}" class:font-bold={n === currentPage}>{n}</a>
        {/each}
        <a href="?page={currentPage + 1}">다음</a>
    </nav>
</main>