// 9. Count occurrences of a value.


// Input:
// const arr = [1, 2, 2, 3, 2];
// Output for value = 2:
// 3
//


const arr = [1, 2, 2, 3, 2];

const findTheAcco = (value)=>{
    
    let count =0
    for(let i =0;i<=arr.length-1;i++)
    {
        if (value== arr[i]) count++
    }
    
    return count
}

let count =findTheAcco(5)

console.log(count)