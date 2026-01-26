// 63. Add a new key-value pair to an object.

// Input:let obj = { a: 1 };
// Add: obj.b = 2
// Output:{ a: 1, b: 2 }

const objectAssingend = (obje ,key , val ) =>{
  obj[key]= val
  
  console.log(obj)
}

let obj = { a: 1 }
objectAssingend( obj,'b',2)
