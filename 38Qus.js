// 54. Print only object values.

// Input: {x: 10, y: 20}
// Output: 10 20


const objValuePrint = obj =>{
  
  for (let key in obj)
  {
    console.log(obj[key])
  }
}


let obj =  {x: 10, y: 20}


objValuePrint(obj)