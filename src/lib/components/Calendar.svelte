<script lang="ts">
    import { onMount } from 'svelte';
    import { startOfDay } from 'date-fns';
    import { 
        calculateCalendarDays, 
        calculateProcessedEvents, 
        type Event, 
        type ProcessedEvent
    } from '$lib';

    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;

    let currentDate = new Date(new Date().setHours(0, 0, 0, 0));
    let date = $state(new Date());
    let year = $derived(date.getFullYear());
    let month = $derived(date.getMonth() + 1);
    let calendarDays = $derived(calculateCalendarDays(year, month));
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
        console.log('Previous month clicked');
        date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }

    function nextMonth() {
        console.log('Next month clicked');
        date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
</script>

<div class="max-w-5xl mx-auto text-white">
    <h2 class="mx-auto text-center text-4xl py-12 font-bold">
        <button onclick={prevMonth} class="cursor-pointer">&lt;</button>
        {month}월
        <button onclick={nextMonth} class="cursor-pointer">/&gt;</button>
    </h2>
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
            <div class="p-3 aspect-square" class:text-gray-400={!calendarDay.isCurrentMonth} class:text-red-500={calendarDay.date.getTime() === currentDate.getTime()}>
                {calendarDay.date.getDate()}
            </div>
        {/each}
        {#each processedEvents as event}
			<div
				class="absolute text-white text-xs font-semibold bg-red-800 rounded p-1 mx-1 overflow-hidden whitespace-nowrap text-ellipsis"
				style="
                    grid-row: {event.row};
                    left: calc((100% / 7) * ({event.col - 1}));
                    width: calc((100% / 7) * {event.span});
                    margin-top: {2.5 + event.lane * 1.5}rem;
                    height: 1.4rem;
                "
			>
				{event.summary}
			</div>
		{/each}
    </div>
</div>