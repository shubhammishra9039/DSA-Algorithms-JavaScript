// 76. Count number of occurrences of characters in string using object.

// Input: "aab"
// Output:{ a: 2, b: 1 }

const createObjTOString = str => {

    let obj = {}
    for (let i = 0; i <= str.length - 1; i++) {
        if (obj[str[i]] == undefined) {
            obj[str[i]] = 1
        }
        else {
            let count = obj[str[i]]

            count++
            obj[str[i]] = count
        }


    }

    console.log(obj)

}


createObjTOString("aab")