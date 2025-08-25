export function slugify(title: string, id: number): string {
    const slug = title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\uAC00-\uD7A3\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');

    return `${slug}-${id.toString()}`;
}