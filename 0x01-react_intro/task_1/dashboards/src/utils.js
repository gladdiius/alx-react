export function getFullYear() {
    const date = new Date(); // Corrected typo: Date instead of Data
    return date.getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
