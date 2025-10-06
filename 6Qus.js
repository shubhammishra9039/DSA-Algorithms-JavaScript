// 6. Merge two arrays.

// Input:
// const a = [1, 2];
// const b = [3, 4];
// Output:
// [1, 2, 3, 4]




const a = [1, 2];
const b = [3, 4];

let newArray = []
let teamp=0
for (let i =0 ; i<=a.length+b.length -1;i++)
{
    if(i<=a.length-1)
    {
        newArray[i]=a[i]
    }
    else{
        newArray[i]=b[teamp]
        teamp++
    }
    
}

console.log(newArray)


console.log([...a,...b]);


