'use strict';

/**
 * Возводит число x в целую степень n.
 * @param {number} x - Основание.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} x в степени n.
 */
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

/**
 * Вычисляет сумму чисел от 1 до n (аналог new Function).
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма от 1 до n.
 */
const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

/**
 * Проверяет, является ли год високосным.
 * @param {number} year - Год.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа n рекурсивно.
 * @param {number} n - Неотрицательное целое число.
 * @returns {bigint} Факториал числа n (тип BigInt).
 */
function factorial(n) {
    if (n < 0) throw new Error('Факториал определён только для неотрицательных чисел');
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Вычисляет n-е число Фибоначчи (быстрый алгоритм O(log n)).
 * @param {number} n - Номер числа Фибоначчи (целое неотрицательное).
 * @returns {bigint} n-е число Фибоначчи (тип BigInt).
 */
export function fib(n) {
    if (n < 0) throw new Error('Число Фибоначчи определено только для неотрицательных индексов');
    
    // Вспомогательная функция быстрого возведения матрицы в степень
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

/**
 * Создаёт функцию сравнения с заданным порогом x.
 * @param {number} x - Число для сравнения.
 * @returns {Function} Функция, принимающая y и возвращающая: true (y > x), false (y < x), null (y === x).
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Вычисляет сумму всех переданных аргументов.
 * @param {...number} args - Числа для суммирования.
 * @returns {number} Сумма аргументов.
 */
function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

/**
 * Добавляет к объекту символьное свойство blackSpot = true, взятое из глобального реестра.
 * @param {Object} obj - Исходный объект.
 * @returns {Object} Тот же объект с добавленным свойством.
 */
function addBlackSpot(obj) {
    const blackSpot = Symbol.for("blackSpot");
    obj[blackSpot] = true;
    return obj;
}
