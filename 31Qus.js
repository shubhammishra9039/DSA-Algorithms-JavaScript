// 47. Count digits in a number.

// Input: 12345
// Output:5


const countNumber = num =>{
 let count =0
 while(num>0){
     count++
     if(num<9)
     {
         break;
     }
    
     num = Math.round(num/10) 
 }

 return count
    
}


console.log(countNumber(12345))