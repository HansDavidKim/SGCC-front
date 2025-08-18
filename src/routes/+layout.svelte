<script>
    let { children } = $props();
    import "../app.css";

    import Header from "../Components/Header.svelte"
    import Footer from "../Components/Footer.svelte"
  </script>
  
<Header />
{@render children()}
<Footer />