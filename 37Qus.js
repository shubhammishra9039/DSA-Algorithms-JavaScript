// 53. Count how many times a character appears.

// Input: "hello", char: "l"
// Output: 2


const characterAppears = (str,char) =>{
  
  let count =0
  
  for (let i =0;i<=str.length-1 ; i++)
  {
    
    if(str[i]== char)
    {
      count++
    }
    
  }
  
  
  return count
}

console.log (characterAppears("hello", "l"))