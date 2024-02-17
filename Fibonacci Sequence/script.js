// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

for (let temp, i = 0, j = 1; j < 100; temp = i, i = j, j = i + temp)
  console.log(j);
