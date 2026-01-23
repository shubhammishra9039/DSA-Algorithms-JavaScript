
// 51. Print object keys using `for...in`.

// Input: const obj = {a:1, b:2};
// Output:a b




// 51. Print object keys using `for...in`.

// Input: const obj = {a:1, b:2};
// Output:a b


const printKeyObj = obj =>{
  
  for (let key in obj)
  {
    console.log (key)
  }
  
  
  for (let key in obj)
  {
    console.log(obj[key])
  }
}


obj ={
  a:1,
  b:2,
}

printKeyObj(obj)