// https://projecteuler.net/problem=1

// Problem Statement :
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


// Solution 1 : Using Arithmetic progression

// 1. Series of numbers multiple of 3 bellow 1000
//
//   3*(1+2+3+----+333)
//
// 2. Series of numbers multiple of 5 bellow 1000
//
//   5*(1+2+3+----+199)
//
// 3. Series of numbers multiple of 5 and 3 bellow 1000
//
//   15*(1+2+3+----+66)


const sum = 3 * ((334 * 333) / 2) + 5 * ((200 * 199) / 2) - 15 * ((66 * 67) / 2)

console.log(sum)

// Solution 2 : for loop

let result = 0;

for ( let i = 1; i < 1000; i++) {
  if(!(i % 3 && i % 5)) result += i
}

console.log(result)

let sum1 = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) sum1 += i;
}

console.log(sum1)

// Solution 3 : using array.reduce method

const arr = []

for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) arr.push(i);
}

const reduced = arr.reduce((prev, current) => prev + current )

console.log(reduced)
