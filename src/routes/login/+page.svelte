<script lang="ts">


</script>

<main>
    <div class="flex relative h-[1271px] bg-black text-white justify-center">
        <h1 class="absolute top-[234px] text-[50px] text-center font-semibold">LOG - IN</h1>
        <!-- padding을 몇으로 할 것인지? 텍스트 크기는 몇으로 할 것인지? -->
        <h2 class="absolute top-[326px] left-[441px] text-[36px] font-light">ID</h2>
        <input class="absolute w-[1038px] h-[131px] top-[411px] px-5 text-[50px] border-[#AE1F1F] border-[5px] rounded-[50px] focus:outline-none">

        <h2 class="absolute top-[617px] left-[441px] text-[36px] font-light">PASSWORD</h2>
        <input class="absolute w-[1038px] h-[131px] top-[702px] px-5 text-[50px] border-[#AE1F1F] border-[5px] rounded-[50px] focus:outline-none">
    
    
        <button aria-label="login" class="absolute bg-[#AE1F1F] w-[234px] h-[67px] top-[1068px] pb-[5px] rounded-[50px] text-[32px] font-semibold hover:cursor-pointer">
            로그인
        </button>

        <!-- aria-label은 어떻게 처리할 것인지 -->
        <a href="find" aria-label="find" class="absolute top-[1016px] left-[1147px] text-[20px] text-[#807E7E] font-semibold">아이디/비밀번호 찾기</a>
        <a href="sign-up" aria-label="signup" class="absolute top-[1016px] left-[1363px] text-[20px] text-[#807E7E] font-semibold">회원가입 하기</a>
    </div>
</main>