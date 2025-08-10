<script lang="ts">
    import Icons from '$lib/assets/images/sns icons.png'
</script>

<footer>
    <div class="h-[472px] flex relative bg-[#B70005] [&>*]:text-white text-[20px] font-medium">
        <p class="font-['Sogang'] absolute top-[68px] left-[43px]">Made By SGCC</p>
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
</footer>