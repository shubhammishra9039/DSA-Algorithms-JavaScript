// 93. Check if a number is prime.

// Input: 17
// Output: true



const checkPrime = (num : number) :boolean =>{
  if(num<=1) return true

  for(let i =0 ; i<=Math.sqrt(num/2) ;i ++)
  {
    if(num%i==0)
    {
      return false
    }
  }

  return true
}


console.log (checkPrime(17))


