// 56. Find max value using loop.

// Input: [10, 5, 8]
// Output: 10


const findMaxNumber = arr =>{
  
  let maxNumber = Number.NEGATIVE_INFINITY
  
  for (let i =0 ; i<= arr.length-1 ; i++)
  {
    
    if (maxNumber<arr[i])
    {
      maxNumber= arr[i]
    }
    
    
  }
  
  
  
  console.log(maxNumber)
  
}


const arr = [10, 5, 8]


findMaxNumber (arr)



