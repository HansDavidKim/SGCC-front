<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<main class="bg-black py-15">
    <h1 class="font-['Sogang'] text-white font-extrabold text-5xl text-center my-15">{data.media.title}</h1>
    <div class="text-white prose prose-invert mx-auto">
        {@html data.content}
    </div>
</main>