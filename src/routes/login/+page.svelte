<script lang="ts">


</script>

<main>
    <div class="flex relative h-[calc(100vh-70px)] bg-black text-white justify-center">
        <!--bg-left-top vs bg-center -->
        <div class="absolute w-full h-full opacity-50 bg-no-repeat bg-cover bg-left-top"  
        style="background-image: url('');">
        </div>
        <div class="flex flex-col justify-between items-center absolute top-[199px] w-[616px] h-[546px] bg-[#252525] rounded-[30px] py-9">
            
            <!-- 상단 섹션 -->
            <div class="flex flex-col items-center w-full">
                <h1 class="text-center text-[32px] font-normal mb-15">Login</h1>
                
                <div class="flex flex-col px-20.5 items-start w-full mb-9 gap-y-3">
                    <label for="email" class="text-[21px] font-normal">이메일 주소</label>
                    <input id="email" class="w-full h-[54px] px-5 text-[20px] text-black border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
           
                <div class="flex flex-col px-20.5 items-start w-full mb-[46px] gap-y-3">
                    <label for="password" class="text-[21px] font-normal">비밀번호</label>
                    <input id="password" class="w-full h-[54px] px-5 text-[20px] text-black border-[#AE1F1F] border-[2px] rounded-[50px] focus:outline-none">
                </div>
           
                <button aria-label="login" class="mb-8.5 bg-[#AE1F1F] w-[187px] h-[54px] rounded-[50px] text-[24px] font-normal hover:cursor-pointer">
                    로그인
                </button>
            </div>
            
            <!-- 하단 링크 섹션 -->
            <div class="w-full px-22.5 flex justify-between">
                <a href="find" class="text-[14px] text-[#807E7E] font-normal">비밀번호 찾기</a>
                <a href="signup" class="text-[14px] text-[#807E7E] font-normal">회원가입</a>
            </div>
        </div>
    </div>
</main>