<script lang="ts">
</script>

<main>
    <!-- 모바일 화면 (기본) -->
    <div class="tablet:hidden bg-black text-white h-[calc(100vh-70px)] min-h-[800px] flex flex-col items-center justify-start px-4 pt-6">
        <!-- 배경 이미지 -->
        <div class="absolute inset-0 w-full h-full opacity-50 bg-no-repeat bg-cover bg-center"  
        style="background-image: url('');">
        </div>
        
        <!-- 회원가입 폼 -->
        <div class="relative z-10 w-full max-w-sm mt-[calc(10vh)] bg-[#252525] rounded-[20px] px-8 py-4 overflow-y-auto">
            <!-- 제목 -->
            <h1 class="text-center text-[25px] font-normal mb-5.5 font-sogang">회원가입</h1>
            
            <!-- 이메일 주소 -->
            <div class="flex flex-col items-start w-full mb-6 gap-y-3.5">
                <label for="mobile-email" class="text-[18px] pl-2 font-normal font-sogang">이메일 주소</label>
                <input id="mobile-email" class="w-full h-8 px-4 text-[16px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
            </div>
            
            <!-- 인증번호 -->
            <div class="flex flex-col items-start w-full mb-6 gap-y-3.5">
                <label for="mobile-verification" class="text-[18px] pl-2 font-normal font-sogang">인증번호</label>
                <input id="mobile-verification" class="w-full h-8 px-4 text-[16px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
            </div>
            
            <!-- 닉네임 -->
            <div class="flex flex-col items-start w-full mb-6 gap-y-3.5">
                <label for="mobile-nickname" class="text-[18px] pl-2 font-normal font-sogang">닉네임</label>
                <input id="mobile-nickname" class="w-full h-8 px-4 text-[16px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
            </div>
            
            <!-- 비밀번호 -->
            <div class="flex flex-col items-start w-full mb-6 gap-y-3.5">
                <label for="mobile-password" class="text-[18px] pl-2 font-normal font-sogang">비밀번호</label>
                <input id="mobile-password" type="password" class="w-full h-8 px-4 text-[16px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
            </div>
            
            <!-- 비밀번호 확인 -->
            <div class="flex flex-col items-start w-full mb-8 gap-y-3.5">
                <label for="mobile-password-confirm" class="text-[18px] pl-2 font-normal font-sogang">비밀번호 확인</label>
                <input id="mobile-password-confirm" type="password" class="w-full h-8 px-4 text-[16px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
            </div>
            
            <!-- 회원가입 버튼 -->
            <div class="flex justify-center">
                <button aria-label="sign-up" class="bg-[#AE1F1F] w-[102px] h-[28px] rounded-full text-[15px] font-normal font-sogang hover:cursor-pointer">
                    회원가입
                </button>
            </div>
        </div>
    </div>

    <!-- 데스크톱 화면 -->
    <div class="hidden tablet:flex relative h-[calc(100vh-70px)] min-h-[800px] bg-black text-white justify-center">
        <!-- 배경 이미지 -->
        <div class="absolute w-full h-full opacity-50 bg-no-repeat bg-cover bg-left-top"  
        style="background-image: url('');">
        </div>
        
        <div class="flex flex-col justify-between items-center absolute top-[50px] w-[653px] h-[calc(90vh-70px)] max-h-[950px] bg-[#252525] rounded-[30px] py-9 overflow-y-auto hide-scrollbar">
           
            <!-- 상단 섹션 -->
            <div class="flex flex-col items-center w-full">
                <h1 class="text-center text-[40px] font-normal mb-11.5 font-sogang">회원가입</h1>
               
                <div class="flex flex-col px-20.5 items-start w-full mb-9.5 gap-y-3">
                    <label for="tablet-email" class="text-[24px] font-normal font-sogang">이메일 주소</label>
                    <input id="tablet-email" class="w-full h-[54px] px-5 text-[20px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
           
                <div class="flex flex-col px-20.5 items-start w-full mb-9.5 gap-y-3">
                    <label for="tablet-verification" class="text-[24px] font-normal font-sogang">인증번호</label>
                    <input id="tablet-verification" class="w-full h-[54px] px-5 text-[20px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
                
                <div class="flex flex-col px-20.5 items-start w-full mb-9.5 gap-y-3">
                    <label for="tablet-nickname" class="text-[24px] font-normal font-sogang">닉네임</label>
                    <input id="tablet-nickname" class="w-full h-[54px] px-5 text-[20px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
           
                <div class="flex flex-col px-20.5 items-start w-full mb-9.5 gap-y-3">
                    <label for="tablet-password" class="text-[24px] font-normal font-sogang">비밀번호</label>
                    <input id="tablet-password" type="password" class="w-full h-[54px] px-5 text-[20px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
                
                <div class="flex flex-col px-20.5 items-start w-full mb-11.5 gap-y-3">
                    <label for="tablet-password-confirm" class="text-[24px] font-normal font-sogang">비밀번호 확인</label>
                    <input id="tablet-password-confirm" type="password" class="w-full h-[54px] px-5 text-[20px] text-white border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
           
                <button aria-label="sign-up" class="bg-[#AE1F1F] w-[187px] h-[54px] rounded-[50px] text-[20px] font-normal font-sogang hover:cursor-pointer">
                    회원가입
                </button>
            </div>
        </div>
    </div>
</main>