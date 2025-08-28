export interface PostSummary {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    url: string;
    thumbnailUrl: string;
}

export interface MediaSummary {
    id: number;
    title: string;
    content: string;
    date: string;
    thumbnailUrl: string;
}

export interface Event {
    summary: string;
    start: { dateTime?: string; date?: string };
    end: { dateTime?: string; date?: string };
    location?: string;
    description?: string;
}

export interface CalendarDay {
    day: number;
    isCurrentMonth: boolean;
}