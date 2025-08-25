<script lang="ts">
    import NavigationBar from '$lib/components/NavigationBar.svelte';
    import MobileMenu from '$lib/components/MobileMenu.svelte'
    import SogangLogo from '$lib/assets/images/sogang-logo.png'

    import { isMobileMenuOpen, toggleMobileMenu } from '$lib/Header.js';

    let innerWidth: number = 0;

    const updateWidth = () => {
        innerWidth = window.innerWidth;
    }

    $: if(innerWidth >= 896){
        isMobileMenuOpen.set(false);
    }
    
    import { onMount } from 'svelte';
    onMount(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    });
    
    const mobileMenuIcon = "https://png.pngtree.com/element_our/20190602/ourmid/pngtree-white-laptop-illustration-image_1412935.jpg"

</script>

<header>
    <nav class="relative z-20 flex h-[70px] items-center bg-black px-11.25">
        <div class="flex items-center">
            <a href="/" target="_self" class="hidden desktop:block w-[36px] flex-shrink-0">
                <img src={SogangLogo} alt="Logo">
            </a>
            <a href="/" aria-label="Main Menu" class="flex h-full flex-col justify-center ml-2">
                <span class="text-[40px] font-bold leading-none text-white">SGCC</span>
                <span class="text-[8px] font-light text-white">Sogang computer club</span>
            </a>
        </div>
        
        <NavigationBar />
        
        <!-- Mobile Menu Icon -->
        {#if $isMobileMenuOpen}
            <div class="ml-auto desktop:hidden">
                <button on:click={toggleMobileMenu} class="rounded-md p-1 text-white focus:outline-none rotate-180">
                    <img src={mobileMenuIcon} alt="Menu" class="h-12">
                </button>
            </div>
        {:else}
            <div class="ml-auto desktop:hidden">
                <button on:click={toggleMobileMenu} class="rounded-md p-1 text-white focus:outline-none">
                    <img src={mobileMenuIcon} alt="Menu" class="h-12">
                </button>
            </div>
        {/if}
    </nav>

    <!-- Cover display when open mobile menu -->
    {#if $isMobileMenuOpen}
    <button
        class="fixed inset-0 z-40 mt-[70px] bg-black/50"
        class:pointer-events-auto={$isMobileMenuOpen}
        class:pointer-events-none={!$isMobileMenuOpen}
        on:click={toggleMobileMenu}
        aria-label="Close menu">
    </button>
    {/if}

    <!-- Open Mobile Menu -->
    <aside
        class="fixed right-0 top-0 z-50 mt-[70px] h-full w-screen max-w-101 transform transition-transform duration-300 ease-out xl:hidden"
        class:translate-x-full={!$isMobileMenuOpen}
        class:translate-x-0={$isMobileMenuOpen}>
        <MobileMenu/>
    </aside>
</header>