// 67. Iterate over values in an object.

// Input: { x: 1, y: 2 }
// Output:1 2

const valueIterate = obj =>{
    let result = Object.values(obj)

    for (let key of result)
    {
        console.log(key)
    }

}

const obj = { x: 1, y: 2 }

valueIterate(obj)