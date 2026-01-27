// 68. Get the number of keys in an object

// Input: { a: 1, b: 2 }
// Output:2


const keyValueLength=  obj =>{
    const result =Object.keys(obj)
    console.log(result.length)
}


const obj =  { a: 1, b: 2 }
keyValueLength(obj)