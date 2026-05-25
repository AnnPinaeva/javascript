'use strict';

export function getDecimal(num) {
    const fractional = Math.abs(num) % 1;
    if (num < 0) {
        return +(1 - fractional).toFixed(10);
    }
    return +fractional.toFixed(10);
}

export function normalizeUrl(url) {
    let cleanUrl = url.replace(/^https?:\/\//, '');
    return `https://${cleanUrl}`;
}

export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

export function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 1) + '…';
}

export function camelize(str) {
    return str
        .split('-')
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

export function unique(arr) {
    return [...new Set(arr)];
}
