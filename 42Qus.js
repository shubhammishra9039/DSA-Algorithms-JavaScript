// 58. Count how many times each element appears.

// Input: [1, 1, 2, 2, 2]
// Output:{1: 2, 2: 3}

const howManyTimeAppears =  ( arr ) =>{
  
  let obj = {}
  
  for (let i =0; i<= arr.length-1; i++)
  {
    
    if (obj[arr[i]]== undefined)
    {
      
      
  
      obj[arr[i]]= 1
      
      
    }else{
     
      let count =    obj[arr[i]]
      
      count++
      
      obj[arr[i]]=count
   
      
    }
  }
  
  console.log (obj)
  
}

howManyTimeAppears( [1, 1, 2, 2, 2] )