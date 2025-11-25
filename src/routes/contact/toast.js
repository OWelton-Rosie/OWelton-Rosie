import { writable } from 'svelte/store';

// --- reactive state ---
export const toastMessage = writable('');
export const showToast = writable(false);
export const toastX = writable(0);
export const toastY = writable(0);

let toastTimeout;

/**
 * Shows a floating "Copied" toast at the cursor position
 * @param {string} text - text copied
 * @param {MouseEvent} e - click event for cursor position
 */
export function showCopiedToast(text, e) {
    toastMessage.set(`Copied: ${text}`);
    toastX.set(e.clientX);
    toastY.set(e.clientY - 20);
    showToast.set(true);

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        showToast.set(false);
    }, 1600);
}

/**
 * Copies text to clipboard and shows toast
 * @param {string} text 
 * @param {MouseEvent} e 
 */
export function copy(text, e) {
    navigator.clipboard.writeText(text);
    showCopiedToast(text, e);
}
