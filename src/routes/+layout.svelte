<script>
    let { children } = $props();
    import "../app.css";
    import { page } from '$app/stores';

    import Header from "../Components/Header.svelte"
    import Footer from "../Components/Footer.svelte"
  </script>
  
<Header />
{@render children()}
{#if $page.url.pathname !== '/login'}
  <footer><Footer /></footer>
{/if}