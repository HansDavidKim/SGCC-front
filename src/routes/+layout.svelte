<script>
    let { children } = $props();
    import "../app.css";

    import { Header } from '$lib';
    import { Footer } from '$lib';
  </script>
  
  <div class="font-[Pretendard]">
    <Header/>
      {@render children()}
    <Footer/>
  </div>