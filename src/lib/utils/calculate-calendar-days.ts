import type { CalendarDay } from '$lib';

export function calculateCalendarDays(year: number, month: number): CalendarDay[] {
    const monthIndex = month - 1;
    const days: CalendarDay[] = [];

    const firstDateOfMonth = new Date(year, monthIndex, 1);
    const lastDateOfMonth = new Date(year, monthIndex + 1, 0);

    const startDayOfWeek = firstDateOfMonth.getDay();
    const offset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;
    const gridStartDate = new Date(year, monthIndex, 1 - offset);

    let currentDate = new Date(gridStartDate);

    while (true) {
        days.push({
            date: new Date(currentDate),
            isCurrentMonth: currentDate.getMonth() === monthIndex
        });
        
        currentDate.setDate(currentDate.getDate() + 1);

        if (currentDate.getDay() === 1 && currentDate > lastDateOfMonth) {
            break;
        }
    }

    return days;
}