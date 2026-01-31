// 88. Find the key with the highest value.

// Input: { a: 1, b: 3, c: 2 }
// Output:b


const findHightestValue = obj =>{

    let maxNumber = Number.NEGATIVE_INFINITY
    for (let key in obj)
    {
        if (maxNumber<obj[key]){
            maxNumber= obj[key]
        }

    }


    console.log(maxNumber)
    
}


let obj =  { a: 1, b: 3, c: 2 }

findHightestValue(obj)

