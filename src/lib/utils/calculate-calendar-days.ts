import type { CalendarDay } from '$lib';

export function calculateCalendarDays(year: number, month: number): CalendarDay[] {
    const days: CalendarDay[] = [];

    const startDayOfMonth = new Date(year, month - 1, 1).getDay();
    const offset = (startDayOfMonth + 6) % 7;
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    const lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate();

    for (let i = 0; i < offset; i++) {
        days.push({ day: lastDayOfPrevMonth - offset + i + 1, isCurrentMonth: false });
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
        days.push({ day: i, isCurrentMonth: true });
    }

    let nextMonthDay = 1;
    while (days.length % 7 !== 0) {
        days.push({ day: nextMonthDay, isCurrentMonth: false });
        nextMonthDay++;
    }

    return days;
}