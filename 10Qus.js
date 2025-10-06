// 10. Find the index of the second occurrence of a value.


// Input:
// const arr = [5, 1, 5, 2, 5];
// Output for value = 5:
// 2



const arr = [5, 1, 5, 2, 5];


const secondAccornce = (value)=>{
    let count =0
    for(let i=0 ; i<= arr.length-1 ;i++)
    {
        if(value == arr[i] && count == 1) return i
        else if (value== arr[i]) count ++
    }
}

console.log(secondAccornce(5))