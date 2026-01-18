// 38. Count vowels in a string.

// Input: "education"
// Output:5


const countVowels = (str) =>{
   
    let count=0
    for(let i=0;i<=str.length-1; i++)
    {
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" )
        {
            
            count++
        }
    }
    
    return count
}

const result = countVowels("education")

console.log(result)