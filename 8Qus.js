// 8. Check if all elements are even.

// Input:
// const arr = [2, 4, 6, 8];
// Output:
// true

const arr = [2, 4, 6, 8, 7];

let evenFlag = true;

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] % 2 !== 0) {
    evenFlag = false;
  }
}

console.log(evenFlag);
