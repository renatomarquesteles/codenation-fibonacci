"use strict";

const fibonacci = (fib = [0, 1]) => {
  if (fib[fib.length - 1] > 350) {
    return fib;
  } else {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fibonacci(fib);
  }
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};
