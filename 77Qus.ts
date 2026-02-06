
// 100. Find all odd numbers in an array.

// Input: [1, 2, 3, 4, 5]
// Output: [1, 3, 5]

const arrOdd : number[] = [1, 2, 3, 4, 5, 6]

const findOddArray = (arr: number[]) : void =>{


    let evenArray : number[] = []
    let index :number =0

    for(let i : number=0; i<= arr.length-1;i++)
    {
        if(arr[i] %2 !==0)
        {
            evenArray[index]= arr[i]
            index++
        }
    }

console.log(evenArray)



}



findEvenArray(arrOdd)