// 50. Print array elements using `for...of`.

// Input: [10, 20, 30]
// Output: 10 20 30


const printArray = arr =>{
  
  for(let i=0 ; i<= arr.length-1 ; i++)
  {
    console.log (arr[i])
  }
  
  for(let key of arr){
    console.log(key)
  }
}


printArray([10,20,30,40])