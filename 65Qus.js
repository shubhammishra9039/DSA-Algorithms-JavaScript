// 86. Create object from two arrays (keys and values).

// Input: ["x", "y"], [1, 2]
// Output:{ x: 1, y: 2 }

let keyArray =  ["x", "y"]
let valueArray =  [1, 2]


const createObj = (keyArray,valueArray)=>{
    let obj = {}
    for(let i=0; i<=keyArray.length-1 ; i++)
    {
        obj[keyArray[i]]=valueArray[i]

    }
    console.log(obj)
}


createObj(keyArray,valueArray)

