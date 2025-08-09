<script lang="ts">
    import type { PostSummary } from "$lib/types/index.ts";

    export let data: PostSummary;
</script>

<a href="./" class="flex h-40 items-center" aria-label="Post Card">
    <div class="w-40 h-30 m-4 flex-shrink-0 overflow-hidden">
        <img
            src={data.thumbnailUrl}
            class="w-full h-full rounded-lg object-cover"
            alt=""
        />
    </div>
    <div class="h-30 flex flex-col justify-between">
        <div>
            <h2 class="text-xl font-bold line-clamp-1">{data.title}</h2>
            <p class="text-sm line-clamp-3">{data.excerpt}</p>
        </div>
        <div class="text-xs">
            <span>{data.author}</span>
            <span>{data.publishedAt}</span>
        </div>
    </div>
</a>
