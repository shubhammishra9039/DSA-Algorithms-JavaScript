// 52. Sum of even numbers in array.

// Input: [1, 2, 3, 4]
// Output: 6

const evenNumber = arr =>{
  let evenSum=0
  for (let elm of arr)
  {
    if (elm%2==0)
    {
      evenSum +=elm
    }
  }
  return evenSum
}

arr = [1,2,3,4]

console.log (evenNumber(arr))
