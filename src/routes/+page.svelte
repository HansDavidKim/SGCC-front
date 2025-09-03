<script lang="ts">
  import ImageSlider from '$lib/components/ImageSlider.svelte'
  import Footer from '$lib/components/Footer.svelte'
  
  const images: string[] = [
    "https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?cs=srgb&dl=pexels-pixabay-259526.jpg&fm=jpg",
    "https://www.shutterstock.com/image-photo/ultra-wide-photo-mountains-river-260nw-1755037052.jpg", 
    "https://klec.sogang.ac.kr/fro_end_kor/img/slide-img01.jpg",
    "https://news.kbs.co.kr/data/news/2024/04/17/20240417_Gz5cv4.jpg",
  ];
    // 고정된 폭 (% 단위)
    const fixedWidth = 30;

</script>

<main class="h-[calc(100vh-70px)] overflow-x-hidden overflow-y-scroll desktop:snap-y snap-mandatory">
  <div class="flex h-full snap-start">
    <ImageSlider/>
  </div>
  <div class="relative desktop:justify-start justify-between flex h-full min-h-[512px] flex-col items-center bg-black desktop:bg-[#252525] pt-[calc(10vh)] px-5 desktop:pt-8 snap-start text-white">
    <div style="margin-bottom: clamp(1.5rem, 2rem, 2.5rem)" class="flex items-center space-x-7">
      <h2 class="text-[50px] font-[SogangUniversity] font-normal">Intro:</h2>
      <h2 class="text-[64px] font-sogang font-normal">SGCC</h2>
    </div>
    <p class="text-left desktop:text-center text-[20px] font-normal leading-10">
      SGCC는 1982년에 창립된 서강대학교 중앙 컴퓨터 동아리입니다.<br>
      python, C언어 등 기본 프로그래밍 언어 콘서트뿐만 아니라, 유니티, 언리얼 엔진, 웹 등 다양한 분야에서 스터디를 진행하며<br>
      부원의 능력을 끌어 올리는 것을 목표로 활동하고 있습니다. 
    </p>
    <iframe class="mb-5 px-10 desktop:mt-4.25 aspect-video h-[calc(92vw*9/16)] desktop:h-[523px]"
      src="https://www.youtube.com/embed/o4HPzbwx_Xk"
      title="Test" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  
  <div class="relative flex h-full min-h-[930px] desktop:min-h-[1200px] flex-col items-center bg-black px-3 py-[calc(5vh)] desktop:py-28.5 snap-start text-white">
      <h2 class="hidden desktop:block mb-11.5 text-center text-[40px] font-normal">"초보자들을 위한 사다리"</h2>
      <p class="mb-[calc(5vh)] desktop:mb-12 text-left desktop:text-center text-[20px] font-normal leading-13">
        SGCC는 초심자 분들의 프로그래밍 진입 장벽을 낮추기 위해 노력합니다.<br class="hidden desktop:block">
        코딩에 처음 접하시는 분들을 위한 다양한 스터디와 세션을 통해 원하는 컴퓨터 분야에 대해 높은 접근성의 환경을 제공합니다.
      </p>
     
      <h2 class="hidden desktop:block w-full mb-11.5 text-center text-[40px] font-normal">"협업과 소통의 창"</h2>
      <p class="text-left desktop:text-center text-[20px] font-normal leading-13">
        SGCC는 슬기로운 인디 생활, 초게반 등의 정기적인 인디 게임 개발 활동과 웹 사이트 및 모바일 앱 개발 등<br class="hidden desktop:block">
        다양한 주제의 프로젝트 개발에 참여할 기회를 제공합니다.<br class="hidden desktop:block">
        이를 통해 협업과 소통의 경험을 쌓아 나가실 수 있습니다.
      </p>

    <!-- Mobile Image Slider -->
    <div class="aspect-video max-w-[calc(97vw)] desktop:w-[calc(70vw)] h-[calc(92vw*9/16)]">
      <div class="w-full h-full overflow-hidden bg-black">
        <div
          class="flex h-full animate-slide-mobile"
          style="--image-count:{images.length}; --image-width:70%; --image-margin:2.5rem;">
          {#each images as image}
            <img
              src={image}
              alt="슬라이드 이미지"
              class="h-full object-contain flex-shrink-0 mx-5"
              style="width: var(--image-width);"
            />
          {/each}
          {#each images as image}
            <img
              src={image}
              alt="슬라이드 이미지"
              class="h-full object-contain flex-shrink-0 mx-5"
              style="width: var(--image-width);"
            />
          {/each}
        </div>
      </div>
    </div>

    <!-- 더 알아보기 버튼 -->
    <a href="/about-us/activity" class="mt-1 desktop:mt-17.5 flex h-[45px] w-[188px] items-center justify-center rounded-full bg-[#AE1F1F] text-[32px] font-normal">더 알아보기</a>
  </div>
  
  <div class="relative flex h-full flex-col items-center bg-[#252525] px-3 py-12.5 snap-start text-white">
    <h2 class="text-center text-[50px] font-normal">RECRUITING</h2>
    <p class="my-4.25 desktop:text-center text-[20px] leading-[35px] desktop:text-[24px] font-normal desktop:leading-[40px]">
      컴퓨터와 기술을 좋아하고, 새로운 것을 배우는 데 즐거움을 느끼는 사람을 찾습니다.<br>
      함께 프로젝트를 만들고, 서로의 아이디어를 나누며 성장해나갈 여러분을 기다립니다.
    </p>
    <img class="w-[calc(90vw)] desktop:max-w-[668px] aspect-[16/9] bg-gray-300 object-contain" src="https://give.sogang.ac.kr/resources/_Img/content/campus-map.jpg" alt="포스터">
    <a href="/notice/recruitment" class="mt-5 desktop:mt-13 flex h-[44px] w-[132px] items-center justify-center rounded-full bg-[#AE1F1F] text-[24px] font-normal text-white">지원하기</a>
  </div>
  
  <footer class="snap-end"><Footer /></footer>
</main>

<style>
  @keyframes slide-mobile {
    0% {
      transform: translateX(0);
    }
    100% {
      /* 이미지 width + 양쪽 margin 포함한 거리 x 개수 만큼 이동 */
      transform: translateX(
        calc(-1 * ((var(--image-width) + var(--image-margin)) * var(--image-count)))
      );
    }
  }

  .animate-slide-mobile {
    animation: slide-mobile 20s linear infinite;
  }
</style>
