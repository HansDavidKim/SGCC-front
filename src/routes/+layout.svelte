<script>
    let { children } = $props();
    import "../app.css";
    import { page } from '$app/state'; 

    import Header from "../lib/components/Header.svelte"
    import Footer from "../lib/components/Footer.svelte"
  
    import { isMobileMenuOpen } from '$lib/Header.js';
 
 </script>


<div class="font-[Pretendard_Variable]">
<Header />
{@render children()}
{#if page.url.pathname !== '/login' && page.url.pathname !== '/' && page.url.pathname !== '/sign-up'}
  <footer><Footer /></footer>
{/if}
</div>