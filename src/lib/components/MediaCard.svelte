<script lang="ts">
    import type { MediaSummary } from '$lib';
    import { slugify } from '$lib';

    export let data: MediaSummary;
</script>

<a href="./media/{slugify(data.title, data.id)}" class="w-80 rounded-xl overflow-hidden bg-black">
    <div class="w-80 h-80">
        <img src={data.thumbnailUrl} alt="Media picture" class="w-full h-full object-cover">
    </div>
    <div class="">
        <h2 class="font-['Pretendard'] text-2xl text-center text-white font-bold line-clamp-2 m-3">{data.title}</h2>
        <p class="font-['Pretendard'] text-center text-white m-3">{data.date}</p>
        <p class="font-['Pretendard'] font-extralight text-center text-white line-clamp-3 m-3">{data.content}</p>
    </div>
</a>