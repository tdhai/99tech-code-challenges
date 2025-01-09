//Using for loop
const sum1 = (n: number): number => {
  if (n < 0) {
    return 0;
  }

  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

//Using recursion
const sum2 = (n: number, accumulator: number = 0): number => {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return accumulator;
  }

  return sum2(n - 1, accumulator + n);
};

//Using Mathematical formula
const sum3 = (n: number): number => {
  if (n < 0) {
    return 0;
  }

  return Math.floor((n * (n + 1)) / 2);
};

const input = 5;
console.log("result = ", {
  sum1: sum1(input),
  sum2: sum2(input),
  sum3: sum3(input),
});
