// 85. Check if object is empty.
// Input: {}
// Output: true



const checkObj = obj =>{
  
  let result = Object.keys(obj)
  
  if(result.length == 0)
  {
    console.log("object is emty")
  }else
  {
    console.log("object is Not emty")
  }
  
 
  
}


checkObj({1:"done"})

