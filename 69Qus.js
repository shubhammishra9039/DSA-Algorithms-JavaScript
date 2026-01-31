// 91. Find the second largest number in an array.

// Input: [10, 5, 20, 8]
// Output: 10


const findSecondLargest = arr =>{

    for(let i =0; i<=arr.length-1;i++)
    {
       for (let j = i+1;j<=arr.length-1;j++){
         if (arr[i]<arr[j])
        {
            let team = arr[i]

            arr[i]  = arr[j]
            arr[j]= team
        }
       }
    }

    console.log(arr[1],arr)

}
let arr= [10, 5, 20, 8]

findSecondLargest(arr)