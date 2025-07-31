<script lang="ts">
    const images: string[] = [
        "https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?cs=srgb&dl=pexels-pixabay-259526.jpg&fm=jpg",
        "https://www.shutterstock.com/image-photo/ultra-wide-photo-mountains-river-260nw-1755037052.jpg",
        "https://klec.sogang.ac.kr/fro_end_kor/img/slide-img01.jpg",
        "https://news.kbs.co.kr/data/news/2024/04/17/20240417_Gz5cv4.jpg",
    ]


    let imageIndex: number = 0;
    let interval: number = 100;
    let timer = setTimeout(nextImage, interval);

    function nextImage(): void {
        showImage((imageIndex+1)%images.length);
    }

    function prevImage(): void {
        showImage((imageIndex-1+images.length)%images.length);
    }

    function showImage(index: number): void {
        imageIndex = index;
        clearTimeout(timer);
        timer = setTimeout(nextImage, interval);
    }

</script>

<div class="relative w-full mx-auto overflow-hidden bg-black">
    <div class="h-[580px] ">
      <img src={images[imageIndex]} alt={`Slide ${imageIndex + 1}`} class="w-full h-full object-contain rounded-xl" />
      <div class="absolute inset-x-0 top-0 h-[20px] bg-gradient-to-b from-gray-200/10 to-transparent"></div>
      <div class="absolute inset-x-0 bottom-0 h-[20px] bg-gradient-to-t from-gray-200/10 to-transparent"></div>
      <div class="absolute inset-y-0 left-0 w-[20px] bg-gradient-to-r from-gray-200/10 to-transparent"></div>
      <div class="absolute inset-y-0 right-0 w-[20px] bg-gradient-to-l from-gray-200/10 to-transparent"></div>
    </div>

    <button
      class="absolute top-1/2 h-full transform -translate-y-1/2 focus:outline-none hover:[&>*]:stroke-gray-500 hover:bg-gradient-to-r from-gray-800/30 to-transparent"
      on:click={prevImage} aria-label="prev Image">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-15 stroke-gray-200">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    
    <button
      class="absolute top-1/2 right-0 h-full transform -translate-y-1/2 focus:outline-none hover:[&>*]:stroke-gray-500 hover:bg-gradient-to-l from-gray-800/30 to-transparent"
      on:click={nextImage} aria-label="next Image">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-15 stroke-gray-200">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    <div class="absolute top-[540px] left-1/2 transform -translate-x-1/2 flex space-x-[19px] [&>*]:hover:cursor-pointer [&>*]:rounded-full">
      <button
        class="w-[16px] h-[16px] border-[4px] border-[#AE1F1F] focus:outline-none"
        class:bg-white={imageIndex === 0}
        on:click={() => showImage(0)} aria-label="Image1">
      </button>
      <button
        class="w-[16px] h-[16px] border-[4px] border-[#AE1F1F] focus:outline-none"
        class:bg-white={imageIndex === 1}
        on:click={() => showImage(1)} aria-label="Image1">
      </button>
      <button
        class="w-[16px] h-[16px] border-[4px] border-[#AE1F1F] focus:outline-none"
        class:bg-white={imageIndex === 2}
        on:click={() => showImage(2)} aria-label="Image1">
      </button>
      <button
        class="w-[16px] h-[16px] border-[4px] border-[#AE1F1F] focus:outline-none"
        class:bg-white={imageIndex === 3}
        on:click={() => showImage(3)} aria-label="Image1">
      </button>
    </div>
  </div>