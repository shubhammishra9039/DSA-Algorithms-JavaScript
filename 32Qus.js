// 48. Sum of digits in a number.

// Input: 123
// Output: 6


const sumDigit = num =>{
    let sum =0
    while(num>0)
    {
        
        sum += (num%10)
        num =Math.round(num/10)
      
        
    }
    return sum
} 

console.log(sumDigit(123456))