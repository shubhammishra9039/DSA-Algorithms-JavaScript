// 45. Print prime numbers between 1 and 20.

// Output: 2 3 5 7 11 13 17 19


const primeNumberList = (start,end)=>{
    if (start<=1) {
        start=start+1
    }
    
    for(let i=start ; i<=end ; i++)
    {
        let isPrime= true
        for(let j=2;j<=Math.sqrt(i);j++)
        {
            if(i%j==0)
            {
                isPrime=false
            }
        }
        if(isPrime)
        {
            console.log(i)
        }
    }
}


primeNumberList(1,20)