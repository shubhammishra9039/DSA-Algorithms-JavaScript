// 66. Iterate over keys in an object.

// Input: { x: 1, y: 2 }
// Output:x y




const iterateKey = obj => {
    let arr = Object.keys(obj)



    for (let key of arr) {
        console.log(key)
    }




}

let obj = { x: 1, y: 2 }

iterateKey(obj)



