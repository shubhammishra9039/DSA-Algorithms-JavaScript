// 57. Check if array contains a value.

// Input: [1, 2, 3], value = 2
// Output:


const arrayContains = (arr , val ) =>
{
  let isPresent = false
  
  
  for (let i = 0 ; i<= arr.length-1 ; i++)
  {
    if (val == arr[i])
    {
      isPresent= true
    }
    
  }
  
  if (isPresent) {
    console.log ("value is present ")
  }
  else
  {
    console.log("value is Not present")
  }
}



const arrs =  [1, 2, 3]

const val = 2

arrayContains(arrs,val)










