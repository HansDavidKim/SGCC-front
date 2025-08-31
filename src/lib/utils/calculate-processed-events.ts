import { differenceInDays, startOfWeek, startOfDay, endOfWeek, max, min, addDays } from 'date-fns';
import type { Event, ProcessedEvent, CalendarDay } from '$lib';

export function calculateProcessedEvents(year: number, month: number, calendarDays: CalendarDay[], events: Event[]): ProcessedEvent[] {
    const processedEvents: ProcessedEvent[] = [];
    const weekLanes: boolean[][][] = Array(6).fill(0).map(() => []);
    const gridStartDate = calendarDays[0].date;
    const gridEndDate = calendarDays[calendarDays.length - 1].date;

    for (const event of events) {
        const startDate = event.start;
        const endDate = event.end;

        if (endDate < gridStartDate || startDate > gridEndDate) {
            continue;
        }

        let pointer = new Date(startDate);

        while (pointer <= endDate) {
            const weekStart = startOfWeek(pointer, { weekStartsOn: 1 });
            const weekEnd = addDays(startOfDay(endOfWeek(pointer, { weekStartsOn: 1 })), 1);

            const partStartDate = max([startDate, weekStart]);
            const partEndDate = min([endDate, weekEnd]);

            const startOffset = differenceInDays(partStartDate, gridStartDate);
            const duration = differenceInDays(partEndDate, partStartDate);

            if (startOffset < 0 || startOffset >= calendarDays.length) {
                pointer = addDays(weekStart, 7);
                continue;
            }

            const row = Math.floor(startOffset / 7);
            const col = (startOffset % 7);

            let lane = 0;
            while (true) {
                let isOccupied = false;
                for (let i = 0; i < duration; i++) {
                    if (weekLanes[row]?.[col + i]?.[lane]) {
                        isOccupied = true;
                        break;
                    }
                }
                if (!isOccupied) break;
                lane++;
            }

            for (let i = 0; i < duration; i++) {
                if (!weekLanes[row]) weekLanes[row] = [];
                if (!weekLanes[row][col + i]) weekLanes[row][col + i] = [];
                weekLanes[row][col + i][lane] = true;
            }

            processedEvents.push({
                ...event,
                row: row + 1,
                col: col + 1,
                span: duration,
                lane
            });

            pointer = addDays(weekStart, 7);
        }
    }

    return processedEvents;
}