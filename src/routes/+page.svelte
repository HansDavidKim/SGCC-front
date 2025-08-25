<script lang="ts">
  import ImageSlider from '$lib/components/ImageSlider.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<main class="h-[calc(100vh-70px)] overflow-x-hidden overflow-y-scroll snap-y snap-mandatory">
  <div class="flex h-full snap-start">
    <ImageSlider/>
  </div>
  <div class="relative flex h-full min-h-[512px] flex-col items-center justify-center bg-[#252525] p-8 snap-start text-white">
    <div style="margin-bottom: clamp(1.5rem, 2.5rem, 3rem)" class="flex items-center space-x-7">
      <h2 class="text-[50px] font-[SogangUniversity] font-normal">Intro:</h2>
      <h2 class="text-[64px] font-sogang font-normal">SGCC</h2>
    </div>
    <p class="text-center text-[20px] font-normal leading-10">
      SGCC는 1982년에 창립된 서강대학교 중앙컴퓨터 동아리입니다.<br>
      Python, C언어 등 기본 프로그래밍 언어 콘서트 뿐만 아니라 유니티, 언리얼 엔진, 웹, 등 다양한 분야에서 스터디를 처리하며<br>
      부원의 능력을 끌어 올리는 것을 목표로 노력 하고있습니다.
    </p>
    <iframe class="mt-4.25 aspect-video h-[523px]"
      src="https://www.youtube.com/embed/o4HPzbwx_Xk"
      title="Test" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  
  <!-- 긴 콘텐츠 섹션: snap-end로 변경 -->
  <div class="relative flex h-full min-h-[1080px] flex-col items-center bg-black py-28.5 snap-start text-white">
      <h2 class="mb-11.5 text-center text-[40px] font-normal">"초보자들을 위한 사다리"</h2>
      <p class="text-center text-[20px] font-normal leading-13">
        SGCC는 초심자 분들의 프로그래밍 진입 장벽을 낮추기 위해 노력합니다.<br>
        코딩에 처음 접하시는 분들을 위한 다양한 스터디와 세션을 통해 원하는 컴퓨터 분야에 대해 높은 접근성의 환경을 제공합니다.
      </p>
     
      <h2 class="w-full mt-12 mb-11.5 text-center text-[40px] font-normal">"협업과 소통의 창"</h2>
      <p class="w-full text-center text-[20px] font-normal leading-13">
        SGCC는 슬기로운 인디 생활, 초게반 등의 정기적인 인디 게임 개발 활동과 웹 사이트 및 모바일 앱 개발 등<br>
        다양한 주제의 프로젝트 개발에 참여할 기회를 제공합니다.<br>
        이를 통해 협업과 소통의 경험을 쌓아 나가실 수 있습니다.
      </p>
    <div class="mt-13 flex space-x-[26px]">
      <div class="h-[220px] w-[405px] bg-white"></div>
      <div class="h-[220px] w-[405px] bg-white"></div>
      <div class="h-[220px] w-[405px] bg-white"></div>
    </div>
    <a href="a" class="mt-17.5 flex h-[45px] w-[188px] items-center justify-center rounded-full bg-[#AE1F1F] text-[32px] font-normal">더 알아보기</a>
  </div>
  
  <div class="relative flex h-full flex-col items-center bg-[#252525] py-12.5 snap-start text-white">
    <h2 class="text-center text-[50px] font-normal">RECRUITING</h2>
    <p class="my-4.25 text-center text-[24px] font-normal leading-[40px]">
      컴퓨터와 기술을 좋아하고, 새로운 것을 배우는 데 즐거움을 느끼는 사람을 찾습니다.<br>
      함께 프로젝트를 만들고, 서로의 아이디어를 나누며 성장해나갈 여러분을 기다립니다.
    </p>
    <img class="h-[360px] aspect-[16/9] bg-gray-300 object-contain" src="https://give.sogang.ac.kr/resources/_Img/content/campus-map.jpg" alt="포스터">
    <a href="a" class="mt-13 flex h-[44px] w-[132px] items-center justify-center rounded-full bg-[#AE1F1F] text-[24px] font-normal text-white">지원하기</a>
  </div>
  <footer class="snap-end"><Footer /></footer>
</main>