<script lang="ts">
    import { onMount } from 'svelte';
    import { calculateCalendarDays } from '$lib';
    import type { Event, CalendarDay } from '$lib';
    import { text } from '@sveltejs/kit';

    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;

    let date = $state(new Date());
    let year = $derived(date.getFullYear());
    let month = $derived(date.getMonth() + 1);
    let lastDayOfMonth = $derived(new Date(year, month, 0).getDate());
    let calendarDays = $derived(calculateCalendarDays(year, month, lastDayOfMonth));

    let events: Event[];

    onMount(async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            events = data.items;
        } catch (error) {
            console.error('Error fetching calendar data:', error);
        }
    });

    function prevMonth() {
        date.setMonth(date.getMonth() - 1);
        date = new Date(date);
    }

    function nextMonth() {
        date.setMonth(date.getMonth() + 1);
        date = new Date(date);
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
    <div class="grid grid-cols-7 text-center">
        {#each calendarDays as calendarDay}
            <div class="p-3 aspect-square" class:text-gray-400={!calendarDay.isCurrentMonth}>
                {calendarDay.day}
            </div>
        {/each}
    </div>
</div>