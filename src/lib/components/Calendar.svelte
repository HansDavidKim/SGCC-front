<script lang="ts">
    import { onMount } from 'svelte';
    import type { Event } from '$lib';

    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`;

    let events: Event[];

    onMount(async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            events = data.items;
            console.log(events[0]);
        } catch (error) {
            console.error('Error fetching calendar data:', error);
        }
    });
</script>

{#if events && events.length > 0}
    <p>{events[0].end.date}</p>
{/if}
