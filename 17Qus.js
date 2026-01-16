// 35. Sum numbers from 1 to n.

//  Input: n = 5
// Output:15

const sumNumber = (n)=>{
    let sum=0
    for(let i=0;i<=n;i++)
    {
        sum+=i
    }
    
    return sum
    
}


console.log (sumNumber(5))

