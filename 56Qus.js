// 75. Swap keys and values in object.
// Input: { a: 1, b: 2 }
// Output:{ 1: "a", 2: "b" }


const swapKeys = obj =>{
 let newObj ={}
    for(let key in obj)
    {
         newObj[obj[key]] = key;
    }
console.log(newObj)
}
let obj = { a: 1, b: 2 }
swapKeys(obj)

