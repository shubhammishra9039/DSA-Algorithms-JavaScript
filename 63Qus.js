// 84. Get all keys starting with a certain letter.

// Input: { apple: 1, banana: 2, apricot: 3 }, prefix = "a"
// Output:["apple", "apricot"]

let obj = { apple: 1, banana: 2, apricot: 3 }

let count = 0
let storeArray = obj =>{
  let arr =[]
  for (let key in obj)
  {
    if (key.startsWith("a"))
    {
      arr[count]=key
      count++
    }
  }
  
  console.log (arr)
}
storeArray(obj)

