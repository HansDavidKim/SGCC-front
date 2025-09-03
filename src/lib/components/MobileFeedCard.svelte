<script lang="ts">
    import type { PostSummary } from '$lib';

    let { data }: PostSummary = $props();
</script>

<a href={data.url} class="flex flex-col w-75 gap-3" aria-label="Post Card">
    <div class="flex-shrink-0 overflow-hidden">
        <img
            src={data.thumbnailUrl}
            class="w-full rounded-lg object-cover aspect-video"
            alt=""
        />
    </div>
    <div class="flex flex-col gap-3 justify-between mx-3">
        <div>
            <h2 class="text-xl font-bold line-clamp-2 text-white font-[Pretendard_Variable]">{data.title}</h2>
            <p class="text-sm text-white line-clamp-3 font-[Pretendard_Variable]">{data.excerpt}</p>
        </div>
        <div class="text-xs text-white font-[Pretendard_Variable]">
            <span>{data.author}</span>
            <span>·</span>
            <span>{data.publishedAt}</span>
        </div>
    </div>
</a>