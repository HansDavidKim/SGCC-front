import type { CalendarDay } from '$lib';

export function calculateCalendarDays(year: number, month: number, lastDayOfMonth: number): CalendarDay[] {
    const days: CalendarDay[] = [];

    const startDayOfMonth = new Date(year, month - 1, 1).getDay();
    const offset = (startDayOfMonth + 6) % 7;
    const lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate();

    for (let i = 0; i < offset; i++) {
        days.push({ day: lastDayOfPrevMonth - offset + i + 1, isCurrentMonth: false });
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
        days.push({ day: i, isCurrentMonth: true });
    }

    if (42 - offset - lastDayOfMonth >= 7) {
        for (let i = 1; i <= 35 - offset - lastDayOfMonth; i++) {
            days.push({ day: i, isCurrentMonth: false });
        }
    } else {
        for (let i = 1; i <= 42 - offset - lastDayOfMonth; i++) {
            days.push({ day: i, isCurrentMonth: false });
        }
    }

    


    return days;
}