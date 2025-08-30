<script lang="ts">
    import Icons from '$lib/assets/images/sns icons.png'
</script>

<footer>
    <div class="h-[472px] hidden desktop:flex relative bg-[#B70005] [&>*]:text-white text-[20px] font-medium">
        <p class="absolute top-[68px] left-[43px]">Made By SGCC</p>
        <hr class="border-t-[3px] absolute top-[120px] left-[43px] right-[43px] border-white">
        <!-- leading 문제..... -->
        <p class="absolute top-[133px] left-[46px] leading-[50px]"> 
            서울특별시 신수동 서강대학교 엠마오관 B 128호<br>
            sgccofficial2024@gmail.com<br>
            회장 강현우<br>
            010-5572-0278<br>
            부회장 김무영<br>
            010-8609-3075
        </p>
        
        <!-- 글자 크기와 컨테이너 크기 고려.... -->
        <p class="absolute top-[139px] right-[43px] text-[20px] text-center">2025 버전 제작자</p>
        <p class="absolute top-[190px] right-[43px] text-[20px] text-center">김대원 김주희 정주원 조인영 허완</p>
        <!-- top 임의 조정 -->
        <img src={Icons} alt='sns!' class="absolute w-[128px] top-[200px] right-[43px]">
    </div>
    <!-- Mobile -->
    <div class="desktop:hidden bg-[#B70005] text-white px-6 py-8">
        <div class="text-center">
            <p class="text-[20px] px-2 text-left font-sogang font-normal mb-6">Made By SGCC</p>
            
            <hr class="border-t-2 border-white mb-4.5">
            
            <div class="text-[20px] text-left px-2 font-sogang leading-7 mb-4.5">
                <p class="mb-4">2025 버전 제작자</p>
                <p>김대원 김주희 정주원 조인영 허완</p>
            </div>
            
            <hr class="border-t-2 border-white mb-8">
            
            <div class="text-[20px] font-sogang font-normal text-left leading-6.25">
                <p>서울특별시 신수동 서강대학교</p>
                <p>엠마오관 B128호</p>
                <br>
                <p>sgccofficial2024@gmail.com</p>
                <br>
                <p>회장 강현우</p>
                <br>
                <p>010-5572-0278</p>
                <br>
                <p>부회장 김무영</p>
                <br>
                <p>010-8609-3075</p>
            </div>
        </div>
    </div>
</footer>