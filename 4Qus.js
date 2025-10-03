// 4. Find the maximum value in an array.

// Input:
// const arr = [3, 5, 7, 2, 8];
// Output:
// 8

const arr = [3, 5, 7, 2, 8];

let MaxNumber = Number.NEGATIVE_INFINITY;

for (let i = 0; i <= arr.length - 1; i++) {
  if (MaxNumber <= arr[i]) {
    MaxNumber = arr[i];
  }
}
console.log(MaxNumber, "MaxNumber");

// ==================================
// inbuilt Method
// ==================================

const arrInbuilt = [3, 5, 7, 2, 8];

let maximum = Math.max(...arrInbuilt);
console.log(maximum, "Inbuilt Method");
