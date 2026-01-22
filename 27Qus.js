// 43. Reverse a string using a loop.

// Input: "loop"
// Output: "pool"


const reverseString = (str)=>{
    
    let newSrt =""
    let count=0
    for(let i =str.length-1 ; i>=0 ;i--)
    {
       
        newSrt += str[i]
        count++
    }
    console.log(newSrt)
}

reverseString ("loop")