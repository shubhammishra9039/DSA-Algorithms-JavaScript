// 1. Reverse an array.


// Input:
// const arr = [1, 2, 3, 4, 5];
// Output:
// [5, 4, 3, 2, 1]


const arr = [1, 2, 3, 4, 5];

let brr= []

let teamp = 0
for ( let i=arr.length-1;i>=0;i--)
{
    brr[teamp] =arr[i]
    teamp++
}



console.log(brr);