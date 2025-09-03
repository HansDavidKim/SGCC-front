<script lang="ts">
	import { fade } from 'svelte/transition';

	const images: string[] = [
		"https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?cs=srgb&dl=pexels-pixabay-259526.jpg&fm=jpg",
		"https://www.shutterstock.com/image-photo/ultra-wide-photo-mountains-river-260nw-1755037052.jpg",
		"https://klec.sogang.ac.kr/fro_end_kor/img/slide-img01.jpg",
		"https://news.kbs.co.kr/data/news/2024/04/17/20240417_Gz5cv4.jpg",
	];

	let currentImageIndex: number = 0;
	const interval: number = 1500;
	let timer: number;
	
	function nextImage(): void {
		showImage((currentImageIndex + 1) % images.length);
	}
	
	function prevImage(): void {
		showImage((currentImageIndex - 1 + images.length) % images.length);
	}
	
	function showImage(index: number): void {
		// 현재 이미지와 같은 인덱스인 경우 함수를 종료
		if (index === currentImageIndex) return;

		currentImageIndex = index;
		
		// 기존 타이머를 취소하고 새로운 타이머 설정
		clearTimeout(timer);
		timer = setTimeout(nextImage, interval);
	}

	// 페이지 로드 시 첫 타이머 시작
	timer = setTimeout(nextImage, interval);
</script>

<div class="relative w-full mx-auto overflow-hidden bg-black">
	<div class="h-[calc(100vh-70px)] relative">
		{#key currentImageIndex}
			<img
				src={images[currentImageIndex]}
				alt={`Slide ${currentImageIndex + 1}`}
				class="absolute inset-0 w-full h-full object-cover"
				in:fade={{ duration: 200 }}
				out:fade={{ duration: 200 }}/>
		{/key}
	</div>
	
	<button
		class="absolute top-1/2 h-full transform -translate-y-1/2 focus:outline-none hover:[&>*]:stroke-gray-500 hover:bg-gradient-to-r from-gray-800/30 to-transparent"
		on:click={prevImage}
		aria-label="prev Image">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-15 stroke-gray-200">
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
		</svg>
	</button>
	
	<button
		class="absolute top-1/2 right-0 h-full transform -translate-y-1/2 focus:outline-none hover:[&>*]:stroke-gray-500 hover:bg-gradient-to-l from-gray-800/30 to-transparent"
		on:click={nextImage}
		aria-label="next Image">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="size-15 stroke-gray-200">
			<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
		</svg>
	</button>
	
	<div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-[19px] [&>*]:hover:cursor-pointer [&>*]:rounded-full">
		{#each images as _, index}
			<button
				class="w-[16px] h-[16px] border-[2px] border-[#AE1F1F] focus:outline-none"
				class:bg-white={currentImageIndex === index}
				on:click={() => showImage(index)} 
				aria-label="Image{index + 1}">
			</button>
		{/each}
	</div>
</div>