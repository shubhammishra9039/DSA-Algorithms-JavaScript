// 87. Count frequency of words in a string.

// Input: "hi hi hello"
// Output:{ hi: 2, hello: 1 }


let str = "hi hi hello"

const strConvertInArray = str => {
    let arr = []
    let index = 0
    let newStr = ""
    for (let i = 0; i <= str.length; i++) {

        if (str[i] == " " || i == str.length) {
            arr[index] = newStr
            index++

            newStr = ""
        } else {
            newStr += str[i]


        }

    }


    let obj = {}
   

    for(let j=0; j<=arr.length-1;j++)
    {
        if (obj[arr[j]]== undefined)
        {
            obj[arr[j]]=1
        }else{
            let count =  obj[arr[j]]
            count++
             obj[arr[j]]= count
        }
    }


    console.log(obj)
}




strConvertInArray(str)