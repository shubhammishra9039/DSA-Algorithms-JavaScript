// 65. Check if a key exists in an object.


// Input: obj = { a: 1 }, key = "a"
// Output:true



const checkKey = (obj,key) =>{
  if(obj[key]== undefined)
  {
    return false
  }else
  {
    return true
  }
}


let obj = { a: 1 }

const result = checkKey (obj,'b')

console.log (result)

