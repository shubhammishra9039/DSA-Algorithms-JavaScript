// 13. Find common elements in two arrays.

// Input: const a = [1, 2, 3]; const b = [2, 3, 4];
// Output:[2, 3]

const a = [1, 2, 3];
const b = [2, 3, 4, 5, 6];

let coomanElement = [];
let teamp = 0;
for (let i = 0; i <= a.length - 1; i++) {
  for (let j = 0; j <= b.length - 1; j++) {
    if (a[i] == b[j]) {
      coomanElement[teamp] = a[i];
      teamp++;
    }
  }
}

console.log(coomanElement);
