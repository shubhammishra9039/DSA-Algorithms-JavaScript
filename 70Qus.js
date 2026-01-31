// 92. Remove duplicate elements from an array.

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

//method 1
// const removeDuplicate = arr =>{
//     const result =new Set(arr)

//     console.log(result)



// }


//method 2

const removeDuplicate = arr => {

    let obj = {}
    for (let i = 0; i <= arr.length - 1; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 0
        }
    }

    let newArr = []
    let index = 0
    for (let key in obj) {
        newArr[index] = key

        index++
    }
    console.log(newArr)

}


let arr = [1, 2, 2, 3, 4, 4]

removeDuplicate(arr)