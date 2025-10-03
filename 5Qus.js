// 5. Sum all elements in an array.

// Input:
// const arr = [1, 2, 3, 4];
// Output:
// 10
const arr = [1, 2, 3, 4];
let miniNumber = Number.POSITIVE_INFINITY;
for (let i = 0; i <= arr.length - 1; i++) {
  if (miniNumber >= arr[i]) miniNumber = arr[i];
}
console.log(miniNumber, "miniNumber");
// ===============================
// inbuilt method
// ================================
let arrInbuilt = [1, 2, 3, 4];
console.log(Math.min(...arrInbuilt), "inbuilt Method");
