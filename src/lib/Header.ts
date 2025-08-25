

import { writable } from 'svelte/store';
export const isMobileMenuOpen = writable<boolean>(false);

export function toggleMobileMenu(): void {
    isMobileMenuOpen.update(value => !value);
}

