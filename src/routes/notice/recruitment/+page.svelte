<script lang="ts">
    import RecruitingPoster from '$lib/assets/images/25-2 recruiting poster.png'

</script>

<main>
    <!-- 모바일 화면 (기본) -->
    <div class="desktop:hidden bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-4.5 pb-5">
        <!-- 포스터 이미지 영역 -->
        <img alt="Recruiting Poster" src={RecruitingPoster} class="w-full aspect-[369/527] bg-white mt-4 mb-7 flex items-center justify-center">
            

        <!-- 제목 -->
        <h2 class="text-[34px] mb-7 leading-[52px] tracking-[1px]">
            2025년 2학기<br>
            SGCC 신입 부원 모집
        </h2>

        <!-- 모집 일정 -->
        <div class="w-full max-w-md mb-8 space-y-2">
            <div class="relative w-[374px] xl:w-[474px] h-[54px]">
                <svg class="absolute" width="285" height="54" viewBox="0 0 285 54" fill="none" xmlns="http://www.w3.org/2000/svg">                  
                    <path d="M8 2.5H256C257.408 2.50007 258.761 3.03922 259.783 4.00684L279.838 23.0068C282.128 25.1762 282.128 28.8238 279.838 30.9932L259.783 49.9932C258.761 50.9608 257.408 51.4999 256 51.5H8C4.96243 51.5 2.5 49.0376 2.5 46V8C2.5 4.96243 4.96243 2.5 8 2.5Z" fill="#252525" stroke="#AE1F1F" stroke-width="5"/>
                </svg>
                <span class="absolute left-[0px] text-left mt-1 w-90 text-[24px] pt-1.25 pl-5 font-pretendard-variable">서류 모집 (~9/10)</span>
            </div>
            <div class="bg-[#AE1F1F] ml-auto w-[225px] px-4 py-2.25 rounded text-[24px]">
                합격자 발표 (9/11)
            </div>
            
        </div>

        <!-- 지원하기 버튼 -->
        <a href="/" class="flex h-[54px] w-[187px] items-center justify-center rounded-[50px] bg-[#AE1F1F] text-[24px]">지원하기</a>
            
        
    </div>

    <!-- 데스크톱 화면 -->
    <div class="hidden desktop:flex relative h-[calc(37vw*4969/3516)] font-normal text-white overflow-x-scroll">
        <img alt="Recruiting Poster" src={RecruitingPoster} class="relative flex h-full w-[calc(37vw)] bg-white">
        
        <div class="relative flex flex-col h-full w-full items-center bg-black px-5 py-14">
           
            <h2 class="mb-16.5 text-[40px] xl:text-[50px]">2025년 2학기 SGCC 신입 부원 모집</h2>
           
            <div class="flex w-full mb-8 self-start justify-center">
                <!--
                <div class="flex bg-[#252525] w-[474px] h-[54px] border-[#AE1F1F] border-4 rounded-[4px]">
                    <span class="text-[24px] pt-1.25 pl-5 font-pretendard-variable">서류 모집 (~9/10)</span>
                </div>-->
                <div class="relative w-[374px] xl:w-[474px] h-[54px]">
                    <svg class="absolute hidden xl:block" width="471" height="54" viewBox="0 0 471 54" fill="none" xmlns="http://www.w3.org/2000/svg">                   
                        <path d="M8 2.5H442.812C444.22 2.50007 445.573 3.03922 446.595 4.00684L466.65 23.0068C468.94 25.1762 468.94 28.8238 466.65 30.9932L446.595 49.9932C445.573 50.9608 444.22 51.4999 442.812 51.5H8C4.96243 51.5 2.5 49.0376 2.5 46V8C2.5 4.96243 4.96243 2.5 8 2.5Z" fill="#252525" stroke="#AE1F1F" stroke-width="5"/>
                    </svg>
                    <svg class="absolute xl:hidden" width="371" height="54" viewBox="0 0 371 54" fill="none" xmlns="http://www.w3.org/2000/svg">                  
                        <path d="M8 2.5H342C343.408 2.50007 344.761 3.03922 345.783 4.00684L365.838 23.0068C368.128 25.1762 368.128 28.8238 365.838 30.9932L345.783 49.9932C344.761 50.9608 343.408 51.4999 342 51.5H8C4.96243 51.5 2.5 49.0376 2.5 46V8C2.5 4.96243 4.96243 2.5 8 2.5Z" fill="#252525" stroke="#AE1F1F" stroke-width="5"/>
                    </svg>
                    <span class="absolute left-[0px] text-left mt-1 w-90 text-[24px] pt-1.25 pl-5 font-pretendard-variable">서류 모집 (~9/10)</span>
                </div>
                <div class="ml-3.5 text-center pt-1 text-[24px] bg-[#AE1F1F] border-[5px] border-[#AE1F1F] rounded-[8px] w-[225px] h-[54px]">합격자 발표 (9/11)</div>
            </div>
            <a href="/" class="flex h-[54px] w-[187px] items-center justify-center rounded-[50px] bg-[#AE1F1F] text-[24px]">지원하기</a>
            
        </div>
    </div>
</main>