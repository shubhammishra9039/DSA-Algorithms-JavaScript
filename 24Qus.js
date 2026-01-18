// 40. Find all divisors of a number.


// Input: 12
// Output:
// 1 2 3 4 6 12

const divisorsNumber = (num)=>{
    
    for (let i =1 ; i<= Math.round(num/2) ; i++)
    {
        if (num%i ==0)
        {
            console.log (i)
        }
    }
    
    console.log (num)
}

divisorsNumber(12)