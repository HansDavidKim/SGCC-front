<script lang="ts">
    import MobileMenu from '$lib/components/Menu.svelte'
    import SogangLogo from '$lib/assets/images/SGCC-character.svg'

    const mobileMenuIcon = "https://png.pngtree.com/element_our/20190602/ourmid/pngtree-white-laptop-illustration-image_1412935.jpg"
    let isMobileMenuOpen: boolean = false;

    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<header>
    <nav class="flex relative items-center h-[70px] bg-black px-[45px] z-20">
        
        <!-- 로고 + SGCC 묶음 (왼쪽 고정) -->
        <div class="flex items-center absolute left-[45px]">
            <a href="/" target="_self" class="flex-shrink-0 w-[36px]">
                <img src={SogangLogo} alt="Logo">
            </a>
            <a href="/" aria-label="Main Menu" class="flex flex-col justify-center ml-[8px] h-full">
                <span class="text-[40px] text-white font-bold leading-none font-[Sogang]">SGCC</span>
                <span class="text-[8px] text-white font-light font-[Sogang]">Sogang computer club</span>
            </a>
        </div>

        <!-- 중앙 메뉴 (화면 절대 중앙) -->
        <div class="group h-full absolute left-1/2 -translate-x-1/2">
            <div class="hidden xl:flex h-full font-normal text-[16px]" role="navigation">
                <a href="/aboutus/activity"   class="relative flex items-center justify-center w-[170px] text-white hover:text-gray-200 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full">About Us</a>
                <a href="/notice/announcement"    class="relative flex items-center justify-center w-[166px] text-white hover:text-gray-200 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full">Notice</a>
                <a href="/community/feed" class="relative flex items-center justify-center w-[166px] text-white hover:text-gray-200 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full">Community</a>
                <a href=""     class="relative flex items-center justify-center w-[158px] text-white hover:text-gray-200 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full">Study</a>
                <a href=""   class="relative flex items-center justify-center w-[126px] text-white hover:text-gray-200 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full">Library</a>
            </div>
            
            <!-- 드롭다운 메뉴 -->
            <div class="absolute top-full left-1/2 bg-black shadow-lg py-8 z-10 
            opacity-0 invisible transform -translate-x-1/2 w-screen translate-y-[-10px] transition-all duration-300
            group-hover:opacity-90 group-hover:visible group-hover:translate-y-0">
                <div class="flex justify-center text-center mx-5">
                    <!-- About Us -->
                    <div class="w-[170px] px-4">
                        <h3 class="text-sm font-semibold text-red-600 tracking-wide uppercase mb-4">About Us</h3>
                        <ul class="space-y-3">
                            <li><a href="/aboutus/activity" class="block text-[20px] text-gray-700 hover:text-red-600 transition-colors">활동</a></li>
                            <li><a href="/aboutus/SNS"      class="block text-[20px] text-gray-700 hover:text-red-600 transition-colors">SNS</a></li>
                        </ul>
                    </div>
                    <!-- Notice -->
                    <div class="w-[166px] px-4">
                        <h3 class="text-sm font-semibold text-red-600 tracking-wide uppercase mb-4">Notice</h3>
                        <ul class="space-y-3">
                            <li><a href="/notice/announcement" class="block text-[20px] text-gray-700 hover:text-red-600 transition-colors">공지사항</a></li>
                            <li><a href="/notice/rule"         class="block text-[20px] text-gray-700 hover:text-red-600 transition-colors">규칙</a></li>
                            <li><a href="/notice/calendar"     class="block text-[20px] text-gray-700 hover:text-red-600 transition-colors">캘린더</a></li>
                        </ul>
                    </div>
                    <!-- Community -->
                    <div class="w-[166px] px-4">
                        <h3 class="text-sm font-semibold text-red-600 tracking-wide uppercase mb-4">Community</h3>
                        <ul class="space-y-3">
                            <li><a href="/community/feed"  class="block text-[20px] text-gray-700 hover:text-red-600 transition-colors">피드</a></li>
                            <li><a href="/community/media" class="block text-[20px] text-gray-700 hover:text-red-600 transition-colors">미디어관</a></li>
                        </ul>
                    </div>
                    <!-- Study -->
                    <div class="w-[158px] px-4">
                        <h3 class="text-sm font-semibold text-red-600 tracking-wide uppercase mb-4">Study</h3>
                        <ul class="space-y-3">
                        </ul>
                    </div>
                    <!-- Library -->
                    <div class="w-[126px] px-4">
                        <h3 class="text-sm font-semibold text-red-600 tracking-wide uppercase mb-4">Library</h3>
                        <ul class="space-y-3">
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <a href="login" class="hidden absolute right-[45px] xl:flex pt-1 mx-[45px] w-[110px] h-[41px] text-white font-light text-[16px] focus:outline-none border-[1px] border-[#AE1F1F] rounded-full hover:text-gray-600 items-center justify-center">LOG-IN</a>

        <div class="xl:hidden ml-auto">
            <button on:click={toggleMobileMenu} class="p-1 text-white focus:outline-none rounded-md">
                <img src={mobileMenuIcon} alt="Menu" class="h-12">
            </button>
        </div>
    </nav>

<!--
    <hr class="border-t-[1px] border-[#D9D9D9]">
-->
    <button
        class="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
        class:opacity-100={isMobileMenuOpen}
        class:opacity-0={!isMobileMenuOpen}
        class:pointer-events-auto={isMobileMenuOpen}
        class:pointer-events-none={!isMobileMenuOpen}
        on:click={toggleMobileMenu}
        aria-label="Close menu">
    </button>

    <aside
        class="fixed top-0 right-0 z-50 w-64 h-full bg-black text-white text-lg text-center
         transform transition-transform duration-300 ease-out xl:hidden"
        class:translate-x-full={!isMobileMenuOpen}
        class:translate-x-0={isMobileMenuOpen}>
        <MobileMenu />
    </aside>
</header>
