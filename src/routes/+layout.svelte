<script>
    let { children } = $props();
    import "../app.css";
    import { page } from '$app/stores';

    import { Header } from '$lib';
    import { Footer } from '$lib';
  </script>

<div class="font-[Pretendard_Variable]">
<Header />
{@render children()}
{#if $page.url.pathname !== '/login'}
  <footer><Footer /></footer>
{/if}
</div>