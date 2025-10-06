// 12. Sort an array in descending order.
// Input: const arr = [3, 1, 4, 2];
// Output: [4, 3, 2, 1]

const arr = [3, 1, 4, 2]


for(let i=0;i<=arr.length-1;i++)
{
    for(let j=i+1;j<=arr.length-1;j++)
    {
        if(arr[i]>arr[j])
        {
            let teamp = arr[i]
            arr[i]=arr[j]
            arr[j]=teamp
        }
    }
    
}



console.log (arr)



