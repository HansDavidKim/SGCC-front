import { differenceInDays, startOfWeek, endOfWeek, max, min, addDays } from 'date-fns';
import { Event, ProcessedEvent, CalendarDay } from '$lib';

export function calculateProcessedEvents(year: number, month: number, calendarDays: CalendarDay[], events: Event[]): ProcessedEvent[] {
    const processedEvents: ProcessedEvent[] = [];
    const weekLanes: boolean[][][] = Array(6).fill(0).map(() => []);
    const gridStartDate = new Date(year, calendarDays[0].isCurrentMonth ? month - 1 : month - 2, calendarDays[0].day);
    const gridEndDate = new Date(year, calendarDays[calendarDays.length - 1].isCurrentMonth ? month - 1 : month, calendarDays[calendarDays.length - 1].day);

    for (const event of events) {
        const startDate = event.start;
        const endDate = event.end;

        if (endDate < gridStartDate || startDate > gridEndDate) {
            continue;
        }

        let pointer = new Date(startDate);

        while (pointer <= endDate) {
            const weekStart = startOfWeek(pointer, { weekStartsOn: 1 });
            const weekEnd = endOfWeek(pointer, { weekStartsOn: 1 });

            const partStartDate = max([startDate, weekStart]);
            const partEndDate = min([endDate, weekEnd]);

            const startOffset = differenceInDays(partStartDate, gridStartDate);
            const duration = differenceInDays(partEndDate, partStartDate) + 1;

            if (startOffset < 0) {
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