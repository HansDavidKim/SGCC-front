<script lang="ts">
    import SogangLogo from '$lib/assets/images/sogang-logo.png'
    const mobileMenuIcon = "https://png.pngtree.com/element_our/20190602/ourmid/pngtree-white-laptop-illustration-image_1412935.jpg"
        
    let isMobileMenuOpen: boolean = false;
    const toggleMobileMenu = () => {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    let isMenuOpen: boolean = false;
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    }
</script>

<header>
    <nav class="flex relative items-center h-[70px] bg-black px-[45px] z-20">
        <a href="/" class="absolute flex-shrink-0 left-[45px] w-[36px]">
            <img src={SogangLogo} alt="Logo">
        </a>
        <div class="h-full w-[135px]">
            <span class="absolute top-[-7px] left-[89px] text-[40px] text-white font-['Sogang'] font-bold">SGCC</span>
            <span class="absolute top-[42px] left-[89px] text-[8px] text-white font-['Sogang'] font-light">Sogang computer club</span>
        </div>
        
        <div class="mx-auto h-full">
            <div class="hidden xl:flex h-full ml-5 font-['Sogang'] text-[16px]"
                 on:mouseover={toggleMenu}
                 on:focus={toggleMenu}
                 on:mouseout={toggleMenu} 
                 on:blur={toggleMenu} role="navigation">
                <a href="about-us" class="flex items-center justify-center w-[170px] text-white hover:text-gray-600">About Us</a>
                <a href="notice" class="flex items-center justify-center w-[166px] text-white hover:text-gray-600">Notice</a>
                <a href="community" class="flex items-center justify-center w-[166px] text-white hover:text-gray-600">Community</a>
                <a href="study" class="flex items-center justify-center w-[158px] text-white hover:text-gray-600">Study</a>
                <a href="library" class="flex items-center justify-center w-[126px] text-white hover:text-gray-600">Library</a>
            </div>
        </div>
        
        <!-- pt-1 -->
        <a href="login" class="hidden xl:flex pt-1 mx-[45px] w-[110px] h-[41px] text-white font-['Sogang'] font-light text-[16px] focus:outline-none border-[2px] border-[#AE1F1F] rounded-full hover:text-gray-600 items-center justify-center">LOG-IN</a>
        
        <div class="absolute top-full left-0 right-0 mt-0 bg-white shadow-lg py-6 z-10 transition-all" class:hidden={!isMenuOpen}>
            <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 space-x-30">
                    <div>
                        <h3 class="text-sm font-medium text-gray-500 tracking-wide uppercase">정보</h3>
                        <ul class="mt-4 space-y-4">
                            <li><a href="a" class="block text-base font-medium text-gray-900 hover:text-gray-700">정보입니다</a></li>
                            <li><a href="b" class="block text-base font-medium text-gray-900 hover:text-gray-700">정보입니다</a></li>
                            <li><a href="c" class="block text-base font-medium text-gray-900 hover:text-gray-700">정보입니다</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium text-gray-500 tracking-wide uppercase">가이드</h3>
                        <ul class="mt-4 space-y-4">
                            <li><a href="d" class="block text-base font-medium text-gray-900 hover:text-gray-700">가이드입니다</a></li>
                            <li><a href="e" class="block text-base font-medium text-gray-900 hover:text-gray-700">가이드입니다</a></li>
                            <li><a href="f" class="block text-base font-medium text-gray-900 hover:text-gray-700">가이드입니다</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="xl:hidden ml-auto">
            <button on:click={toggleMobileMenu} class="p-1 text-white focus:outline-none rounded-md">
                <img src={mobileMenuIcon} alt="Menu" class="h-12">
            </button>
        </div>
    </nav>
    
    <div
        class="absolute top-0 right-0 h-screen w-64 py-4 bg-black text-white text-lg text-center z-30
            transform transition-transform duration-300 ease-out xl:hidden
            data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full data-[state=open]:pointer-events-auto data-[state=closed]:pointer-events-none"
        class:translate-x-0={isMobileMenuOpen}
        class:translate-x-full={!isMobileMenuOpen} class:pointer-events-auto={isMobileMenuOpen}
        class:pointer-events-none={!isMobileMenuOpen}
        class:hidden={!isMobileMenuOpen}>
        
        <button on:click={toggleMobileMenu}>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_nwJ1atCtmd4bkIhKvnjnY0cVqehB44xMmyVJmSFqXiJ8c=s160-c-k-c0x00ffffff-no-rj" alt="Oof!">
        </button>
        <a href="h" class="block py-2 hover:bg-[#6a6c7e] transition duration-200" on:click={toggleMobileMenu}>Home</a>
        <a href="i" class="block py-2 hover:bg-[#6a6c7e] transition duration-200" on:click={toggleMobileMenu}>Home</a>
        <a href="j" class="block py-2 hover:bg-[#6a6c7e] transition duration-200" on:click={toggleMobileMenu}>Home</a>
    </div>
</header>