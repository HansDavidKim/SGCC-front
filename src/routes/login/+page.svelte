<script lang="ts">
    import SGCC_cute from '$lib/assets/images/sgcc-cute.png'
</script>

<main>
    <!-- 모바일 화면 (기본) -->
    <div class="tablet:hidden bg-black text-white min-h-screen flex flex-col items-center px-6">
        <!-- 배경 이미지 -->
        <div class="inset-0 w-full h-full opacity-50 bg-no-repeat bg-cover bg-center"  
        style="background-image: url('');">
        </div>
        
        <!-- 로그인 폼 -->
        <div class="flex flex-col items-center mt-[calc(15vh)] relative z-10 w-full max-w-sm bg-[#252525] rounded-[20px] py-8">
            <!-- 로고/제목 -->
            <img alt="SGCC Symbol" src={SGCC_cute} class="absolute w-[80px] h-[80px] mb-4">
            <h1 class="text-[25px] font-normal mb-9">Login</h1>
            
            <!-- 이메일 입력 -->
            <div class="mb-6 w-full px-12">
                <label for="email" class="block text-[15px] font-sogang mb-2">이메일 주소</label>
                <input id="email" type="email" 
                       class="w-full h-8 text-base text-black border-[#AE1F1F] border-2 rounded-full">
            </div>
            
            <!-- 비밀번호 입력 -->
            <div class="mb-8 w-full px-12">
                <label for="password" class="block text-[15px] font-sogang mb-2">비밀번호</label>
                <input id="password" type="password" 
                       class="w-full h-8 text-base text-black border-[#AE1F1F] border-2 rounded-full">
            </div>
            
            <!-- 로그인 버튼 -->
            <div class="flex w-21 h-8 justify-center mb-6">
                <button aria-label="login" 
                        class="bg-[#AE1F1F] w-full pt-1 rounded-full text-[18px] font-sogang">
                    로그인
                </button>
            </div>
            
            <!-- 하단 링크 -->
            <div class="w-full px-12 flex justify-between">
                <a href="find" class="text-[10px] text-white font-normal">비밀번호 찾기</a>
                <a href="sign-up" class="text-[10px] text-white font-normal">회원가입</a>
            </div>
        </div>
    </div>

    <!-- 데스크톱 화면 -->
    <div class="hidden tablet:flex relative h-[calc(100vh-70px)] min-h-[800px] bg-black text-white justify-center">
        <!-- 배경 이미지 -->
        <div class="absolute w-full h-full opacity-50 bg-no-repeat bg-cover bg-left-top"  
        style="background-image: url('');">
        </div>

        <div class="flex flex-col justify-between items-center absolute top-[129px] w-[616px] h-[546px] bg-[#252525] rounded-[30px] py-9">
            
            <!-- 상단 섹션 -->
            <div class="flex flex-col items-center w-full">
                <h1 class="text-center text-[40px] font-normal mb-14">Login</h1>
               
                <div class="flex flex-col px-20.5 items-start w-full mb-8 gap-y-3">
                    <label for="tablet-email" class="text-[21px] font-normal">이메일 주소</label>
                    <input id="tablet-email" class="w-full h-[54px] px-5 text-[20px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
           
                <div class="flex flex-col px-20.5 items-start w-full mb-10 gap-y-3">
                    <label for="tablet-password" class="text-[21px] font-normal">비밀번호</label>
                    <input id="tablet-password" type="password" class="w-full h-[54px] px-5 text-[20px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
           
                <button aria-label="login" class="mb-8.5 bg-[#AE1F1F] w-[122px] h-[47px] rounded-[50px] text-[20px] font-normal font-sogang hover:cursor-pointer">
                    로그인
                </button>
            </div>
           
            <!-- 하단 링크 섹션 -->
            <div class="w-full px-22 flex justify-between">
                <a href="/find" class="text-[14px] text-white font-normal">비밀번호 찾기</a>
                <a href="/sign-up" class="text-[14px] text-white font-normal">회원가입</a>
            </div>
        </div>
        <img alt="SGCC Symbol" src={SGCC_cute} class="absolute top-[65px] w-[166px] left-[calc(50vw-350px)] -rotate-9 mb-4">
    </div>
</main>