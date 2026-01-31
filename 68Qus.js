// 90. Convert JSON string to object and vice versa.

// Input: '{"a":1}'
// Output:{ a: 1 }
// Input: { a: 1 }
// Output:'{"a":1}'


const convertJSONToString = obj =>{
      let result=null
    if (typeof obj == String)
    {
         result = JSON.parse(obj)
      console.log( result)
    }else{
        result = JSON.stringify(obj)
    
    }

    console.log(result)
}

convertJSONToString({a:1})