// 39. Find factorial of a number.


// Input: 4
// Output:
// 24

const factorialNumber = (num) =>{
    let fact =1
    for (let i=1 ; i<=num ; i++)
    {
        fact *= i
    }
    
    return fact
}

console.log (factorialNumber(4))