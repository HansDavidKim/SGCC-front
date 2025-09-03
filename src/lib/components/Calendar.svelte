<script lang="ts">
    import { onMount } from 'svelte';
    import { startOfDay } from 'date-fns';
    import { 
        calculateCalendarDays, 
        calculateProcessedEvents, 
        type Event, 
        type ProcessedEvent,
        type CalendarDay
    } from '$lib';

    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;
    
    let width = $state(window.innerWidth);
    let isMobile = $derived(width < 640);
    let eventGap = $derived(isMobile ? 1 : 1.5);

    let currentDate = new Date(new Date().setHours(0, 0, 0, 0));
    let date = $state(new Date());
    let year = $derived(date.getFullYear());
    let dropdownYears =$derived([year - 2, year - 1, year, year + 1, year + 2]);
    let month = $derived(date.getMonth() + 1);
    let calendarDays: CalendarDay[] = $derived(calculateCalendarDays(year, month));
    let events = $state<Event[]>([]);
    let processedEvents: ProcessedEvent[] = $derived(calculateProcessedEvents(year, month, calendarDays, events));

    onMount(async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            events = data.items.map((event: any) => {
                const isAllDay = !!event.start.date;
                const startDate = startOfDay(new Date(event.start.date || event.start.dateTime));
                const endDate = isAllDay ? startOfDay(new Date(event.end.date).getTime() - 1) : startOfDay(new Date(event.end.date || event.end.dateTime));

                return {
                    summary: event.summary,
                    start: startDate,
                    end: endDate,
                    location: event.location,
                    description: event.description
                };
            });

            console.log('Fetched events:', events);
        } catch (error) {
            console.error('Error fetching calendar data:', error);
        }
    });

    function prevMonth() {
        date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }

    function nextMonth() {
        date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }

    function handleYearChange(event: Event) {
        const selectedYear = parseInt((event.target as HTMLSelectElement).value);
        date = new Date(selectedYear, month - 1, 1);
    }
</script>

<svelte:window bind:innerWidth={width} />

<div class="max-w-5xl mx-auto text-white">
    <div class="grid grid-cols-3 items-end">
        <select value={year} onchange={handleYearChange} class="justify-self-start bg-black text-white border border-white rounded px-2 py-2 m-6 focus:outline-none text-xs tablet:text-lg">
            {#each dropdownYears as y}
                <option value={y}>{y}년</option>
            {/each}
        </select>
        <h2 class="flex items-center justify-center mx-auto text-center text-3xl tablet:text-4xl py-12 font-bold">
            <button onclick={prevMonth} class="cursor-pointer">&lt;</button>
                &nbsp;{month}월&nbsp;
            <button onclick={nextMonth} class="cursor-pointer">/&gt;</button>
        </h2>
    </div>
    <div class="grid grid-cols-7 text-center">
        <div class="p-3">월</div>
        <div class="p-3">화</div>
        <div class="p-3">수</div>
        <div class="p-3">목</div>
        <div class="p-3">금</div>
        <div class="p-3">토</div>
        <div class="p-3">일</div>
    </div>
    <div class="grid grid-cols-7 text-center relative">
        {#each calendarDays as calendarDay}
            <div class="p-3 aspect-square text-lg" class:text-gray-400={!calendarDay.isCurrentMonth} class:text-red-500={calendarDay.date.getTime() === currentDate.getTime()}>
                {calendarDay.date.getDate()}
            </div>
        {/each}
        {#each processedEvents as event}
			<div
				class="flex items-center absolute text-white text-xs text-left font-semibold bg-red-800 rounded p-1 mx-1 overflow-hidden whitespace-nowrap text-ellipsis h-4 tablet:h-6 py-auto"
				style="
                    grid-row: {event.row};
                    left: calc((100% / 7) * ({event.col - 1}));
                    width: calc((100% / 7) * {event.span});
                    margin-top: {2.5 + event.lane * eventGap}rem;
                "
			>
				{event.summary}
			</div>
		{/each}
    </div>
</div>