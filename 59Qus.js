"use strict";
// 78. Freeze an object to prevent modification.
 

// Input: Object.freeze({ a: 1 })
// Try: obj.a = 2
// Output:{ a: 1 }


let obj = { a: 1 }


Object.freeze(obj)
obj.a=2
console.log(obj)