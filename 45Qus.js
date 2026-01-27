
// 64. Delete a key from an object.

// Input: let obj = { a: 1, b: 2 };
// Delete: delete obj.b
// Output:{ a: 1 }


const deleteKey = (obj,key)=>{
  delete obj[key]
  console.log (obj)
}

let obj = { a: 1, b: 2 }

deleteKey(obj,'b')

