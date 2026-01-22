// 44. Check if a number is prime.

// Input: 7
// Output:true

const checkPrime = (num) =>{
    if(num<=1)
    {
        console.log("Number Is prime "+ false)
        return
    }
    
    let isPrime= true
    
    for(let i=2 ; i<=Math.sqrt(num); i++)
    {
  
        if(num%i==0)
        {
            
            isPrime=false
        }
    }
    
    console.log ("Number Is "+ isPrime)
    
    
}

checkPrime(5)



