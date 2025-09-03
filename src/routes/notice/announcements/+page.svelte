<script lang="ts">
  const cards = [
    {
      title: "주요 공지",
      bgColor: "bg-[#8C1515]",
      items: [
        { text: "■ 모임이지롱" },
        { text: "■ 활동보고서지롱" }
      ]
    },
    {
      title: "필독 사항",
      bgColor: "bg-[#661111]",
      subtitle: "*정리해줘!",
      items: [
        { text: "■ 회비 납부 확인!" },
        { text: "■ 출석체크 방법 숙지" }
      ]
    },
    {
      title: "동아리방 공지~",
      bgColor: "bg-[#400000]",
      items: [
        { text: "▢ 남는 공지" }
      ]
    },
    {
      title: "예정된 행사",
      bgColor: "bg-[#3A0A0A]",
      items: [
        { text: "■ 동아리 행사 일정" },
        { text: "■ ???" },
        { text: "■ !!!" }
      ]
    }
  ];

  let container: HTMLDivElement;
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  function onMouseDown(e: MouseEvent) {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.classList.add("cursor-grabbing");
  }

  function onMouseUp() {
    isDown = false;
    container.classList.remove("cursor-grabbing");
  }

  function onMouseMove(e: MouseEvent) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    container.scrollLeft = scrollLeft - (x - startX);
  }
</script>

<main>
    <div class="relative flex desktop:min-h-[1207px] flex-col items-center bg-black pb-33 desktop:pb-0 pt-33 text-white">
      <div class="mb-38 desktop:mb-30 flex font-normal">
          <h2 class="mt-auto mb-1.5 text-[25px] desktop:text-[50px]">NOTICE: </h2>
          <h2 class="ml-2 desktop:ml-6 text-[40px] desktop:text-[64px]">SGCC</h2>
      </div>

      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <div bind:this={container}
        role="list"
        class="flex flex-col items-center desktop:items-start desktop:flex-row desktop:overflow-x-scroll w-full gap-y-8 px-12 pb-3 desktop:gap-x-11 hide-scrollbar cursor-grab"
        on:mousedown={onMouseDown}
        on:mouseup={onMouseUp}
        on:mouseleave={onMouseUp}
        on:mousemove={onMouseMove}>
        {#each cards as card}
          <div class="w-[calc(90vw)] desktop:w-[559px] desktop:h-[774px] flex-shrink-0 rounded-2xl {card.bgColor} desktop:px-13.5 px-7 desktop:py-9 py-5 text-white">
            <h3 class="mb-4 desktop:text-[36px] text-[30px]">
              {card.title}
              {#if card.subtitle}
                <span class="font-sogang desktop:text-[20px] text-[17px] text-gray-300">
                  {card.subtitle}
                </span>
              {/if}
            </h3>
            <div class="space-y-2">
              {#each card.items as item}
                <p class="flex items-center desktop:text-[32px] text-[18px]">{item.text}</p>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div> 
</main>