<script>
    import { page } from '$app/stores';
    import { dev } from '$app/environment';

    // 에러 정보 가져오기
    $: errorCode = $page.status;
    $: errorMessage = $page.error?.message;
</script>

<svelte:head>
    <title>{errorCode} - 페이지를 찾을 수 없습니다</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
    <div class="max-w-md w-full text-center">
        <!-- 에러 코드 -->
        <h1 class="text-9xl font-bold text-gray-300 mb-4">{errorCode}</h1>
        
        <!-- 에러 메시지 -->
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {#if errorCode === 404}
                페이지를 찾을 수 없습니다
            {:else if errorCode === 500}
                서버 오류가 발생했습니다
            {:else}
                오류가 발생했습니다
            {/if}
        </h2>
        
        <p class="text-gray-600 mb-8">
            {#if errorCode === 404}
                요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            {:else}
                잠시 후 다시 시도해주세요.
            {/if}
        </p>

        <!-- 개발 모드에서만 에러 상세 정보 표시 -->
        {#if dev && errorMessage}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <strong>error:</strong> {errorMessage}
            </div>
        {/if}

        <!-- 액션 버튼들 -->
        <div class="space-y-4">
            <a href="/" 
               class="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                홈으로 돌아가기
            </a>
            
            <div class="space-x-4">
                <button 
                        class="text-gray-600 hover:text-gray-800 underline">
                    이전 페이지
                </button>
                <a href="/contact" class="text-gray-600 hover:text-gray-800 underline">
                    문의하기
                </a>
            </div>
        </div>
    </div>

    <!-- SGCC 로고 (선택사항) -->
    <div class="mt-8 text-gray-400">
        <span class="text-lg font-bold">SGCC</span>
        <p class="text-sm">Sogang Computer Club</p>
    </div>
</div>