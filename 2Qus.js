// 2. Flatten a nested array.


// Input:
// const arr = [1, [2, 3], [4, [5]]];
// Output:
// [1, 2, 3, 4, 5]


const arr = [1, [2, 3], [4, [5]]];

let brr=[]
let teamp=0
for(let i=0 ; i<= arr.length-1; i++)
{
    if(Array.isArray(arr[i]))
    {
        for(let j=0;j<=arr[i].length-1;j++)
        {
         if(Array.isArray(arr[i][j]))
         {
              for(let k=0;k<=arr[i][j].length-1;k++)
              {
                  brr[teamp]= arr[i][j] [k]
            teamp++
              }
             
         }
         else {
                brr[teamp]= arr[i][j]
            teamp++
         }
            
        }
        
    }
    else 
    {
        brr[teamp] = arr[i]
        teamp++
    }
}

console.log(brr)



// ------------------------------------------------------------------
// Optimize Solution
// =====================================================================

// const arr = [1, [2, 3], [4, [5]]];

// function flatten(array) {
//   let result = [];
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       result.push(...flatten(item)); // spread the flattened sub-array
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(flatten(arr)); // [1, 2, 3, 4, 5]
