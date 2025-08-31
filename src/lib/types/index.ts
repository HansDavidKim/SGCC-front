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

export interface CalendarDay {
    day: number;
    isCurrentMonth: boolean;
}

export interface Event {
    summary: string;
    start: Date;
    end: Date;
    location?: string;
    description?: string;
}

export interface ProcessedEvent extends Event {
    row: number;
    col: number;
    span: number;
    lane: number;
}