// 3. Remove duplicate elements from an array.

//  Input:
// const arr = [1, 2, 2, 3, 4, 4, 5];
//  Output:
//  [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 5];

let obj = {};

for (let i = 0; i <= arr.length - 1; i++) {
  if (obj[i]) {
  } else {
    obj[i] = 0;
  }
}

teamp = 0;
let brr = [];
for (let key in obj) {
  brr[teamp] = Number(key);
  teamp++;
}
console.log(brr);


// ==========================================
// inbuilt method
// ==========================================

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const result = [...new Set(arr)];

// console.log(result); // [1, 2, 3, 4, 5]


// ---------------------------------------------
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const result = arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(result); // [1, 2, 3, 4, 5]

