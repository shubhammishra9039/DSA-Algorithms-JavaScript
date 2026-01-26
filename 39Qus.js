// 55. Find min value using loop.

// Input: [10, 5, 8]
// Output:5



const minNumberFind = arr =>{
  let minNumber = Number.POSITIVE_INFINITY 
  for(let key of arr)
  {
    if(key<minNumber)
    {
      minNumber=key
    }
  }
  
  return minNumber
}


console.log (minNumberFind([10,5,8]))
