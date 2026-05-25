'use strict';

export function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

export const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

export function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

export function factorial(n) {
    if (n < 0) throw new Error('Факториал определён только для неотрицательных чисел');
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

export function fib(n) {
    if (n < 0) throw new Error('Число Фибоначчи определено только для неотрицательных индексов');
    
    function matrixMultiply(a, b) {
        return [
            a[0] * b[0] + a[1] * b[2],
            a[0] * b[1] + a[1] * b[3],
            a[2] * b[0] + a[3] * b[2],
            a[2] * b[1] + a[3] * b[3]
        ];
    }
    
    function matrixPower(matrix, power) {
        let result = [1n, 0n, 0n, 1n];
        let base = matrix;
        let exp = power;
        while (exp > 0) {
            if (exp % 2 === 1) {
                result = matrixMultiply(result, base);
            }
            base = matrixMultiply(base, base);
            exp = Math.floor(exp / 2);
        }
        return result;
    }
    
    if (n === 0) return 0n;
    const startMatrix = [1n, 1n, 1n, 0n];
    const resultMatrix = matrixPower(startMatrix, n - 1);
    return resultMatrix[0];
}

export function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

export function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

export function addBlackSpot(obj) {
    const blackSpot = Symbol.for("blackSpot");
    obj[blackSpot] = true;
    return obj;
}
