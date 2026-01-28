// 74. Find key by value.

// Input: { a: 1, b: 2 }, value = 2
// Output:b


const obj =  { a: 1, b: 2 }


const findKeyByValue = (obj,value)=>{

    for(let key in obj)
    {
        if (obj[key]== value)
        {
            return console.log("key is: "+key)
        }
    }
     return console.log("key is Not present")
}

findKeyByValue(obj,2)