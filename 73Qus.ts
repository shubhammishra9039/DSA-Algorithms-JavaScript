// 94. Calculate factorial of a number using a loop.

// Input: 5
// Output: 120


function factorial (num : number ): number {

let fact :number  =1

for (let i =1;i<=num; i++)
{
  fact *=i
}

  return fact
}


console.log(factorial(5))