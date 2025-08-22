<script lang="ts">
  import { ImageSlider } from '$lib';
</script>

<main class="h-[calc(100vh-70px)] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">

  <div class="flex snap-start h-full">
    <ImageSlider/>
  </div>

  <div class="flex flex-col items-center justify-center relative bg-[#252525] h-full snap-start text-white p-8">
    <div class="text-center">
      <h1 class="text-[50px]">
        <span class="font-light font-[Sogang]">Intro:</span>
        <span class="font-normal"> </span>
        <span class="font-extrabold text-[64px] font-[Sogang]">SGCC</span>
      </h1>
      <h2 class="mt-4 leading-[40px] text-center">
        <span class="font-bold text-[24px]">SGCC는 1982년에 창립된 서강대학교 중앙컴퓨터 동아리입니다.</span><br>
        <span class="font-light text-[20px]">Python, C언어 등 기본 프로그래밍 언어 콘서트 뿐만 아니라 유니티, 언리얼 엔진, 웹, 등 다양한 분야에서 스터디를 처리하며<br>
        부원의 능력을 끌어 올리는 것을 목표로 노력 하고있습니다.</span>
      </h2>
    </div>
    <iframe class="mt-8 w-[936px] h-[523px]"
      src="https://www.youtube.com/embed/o4HPzbwx_Xk" 
      title="God Chang-seop (신창섭) '바로 리부트 정상화' MV" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

  <div class="flex flex-col items-center justify-center relative bg-black h-full text-white snap-start p-8">
    <div class="text-center">
      <p class="text-center text-[50px] font-semibold">“초보자들을 위한 사다리”</p>
      <p class="text-center text-[20px] leading-[40px] font-light mt-4">
        SGCC는 초심자 분들의 프로그래밍 진입 장벽을 낮추기 위해 노력합니다.<br>
        코딩에 처음 접하시는 분들을 위한 다양한 스터디와 세션을 통해 원하는 컴퓨터 분야에 대해 높은 접근성의 환경을 제공합니다.
      </p>
    </div>
    
    <div class="flex space-x-[26px] mt-8">
      <div class="w-[393px] h-[439px] bg-gray-500"></div>
      <div class="w-[393px] h-[439px] bg-gray-500"></div>
      <div class="w-[393px] h-[439px] bg-gray-500"></div>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center relative bg-black h-full text-white snap-start p-8">
    <div class="text-center mt-12">
      <p class="w-full text-center text-[50px] font-semibold">“협업과 소통의 창”</p>
      <p class="w-full text-center text-[20px] leading-[40px] font-light mt-4">
        SGCC는 슬기로운 인디 생활, 초게반 등의 정기적인 인디 게임 개발 활동과 웹 사이트 및 모바일 앱 개발 등<br>
        다양한 주제의 프로젝트 개발에 참여할 기회를 제공합니다.<br>
        이를 통해 협업과 소통의 경험을 쌓아 나가실 수 있습니다. 
      </p>
    </div>

    <div class="flex space-x-[26px] mt-8">
      <div class="w-[393px] h-[439px] bg-gray-500"></div>
      <div class="w-[393px] h-[439px] bg-gray-500"></div>
      <div class="w-[393px] h-[439px] bg-gray-500"></div>
    </div>

    <a href="a" class="flex w-[234px] h-[67px] items-center justify-center bg-[#AE1F1F] rounded-full text-[32px] font-semibold mt-12">더 알아보기</a>
  </div>

  <div class="flex flex-col items-center justify-center relative bg-[#252525] h-full snap-start text-white p-8">
    <div class="text-center">
      <p class="text-center text-[50px] font-semibold">RECRUITING</p>
      <p class="text-center text-[20px] leading-[40px] font-light mt-4">
        컴퓨터와 기술을 좋아하고, 새로운 것을 배우는 데 즐거움을 느끼는 사람을 찾습니다.<br>
        함께 프로젝트를 만들고, 서로의 아이디어를 나누며 성장해나갈 여러분을 기다립니다.
      </p>
    </div>

    <img class="mt-8 w-[1160px] h-[439px] bg-gray-300 object-contain" src="https://give.sogang.ac.kr/resources/_Img/content/campus-map.jpg" alt="포스터">
    <a href="a" class="flex w-[234px] h-[67px] items-center justify-center bg-[#AE1F1F] rounded-full text-[32px] text-white font-semibold mt-12">지원하기</a>
  </div>
</main>
