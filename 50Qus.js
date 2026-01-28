// 70. Clone an object.

// Input: { a: 1 }
// Output:{ a: 1 } (different reference)

const cloneObj = (obj) => {
  let newObj = Object.assign({}, obj);
  console.log(newObj === obj);
};

let obj = { a: 1 };

cloneObj(obj);
