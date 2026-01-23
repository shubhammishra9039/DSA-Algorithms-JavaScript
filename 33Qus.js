// 49. Check if a number is a palindrome.

// Input: 121
// Output: true


const checkNumberPalinfrome = num =>{
  
  let newNumber = 0
  let oldNumber = num
  
  while(num>0)
  {
    newNumber = newNumber * 10 +  num%10
    
    num = Math.round(num/10)
    
  }
  
  if(newNumber == oldNumber)
  {
    console.log("number is a palindrome") 
  }else{
    console.log("number is Not palindrome") 
  }
  
  
  
  
}

checkNumberPalinfrome(123)
