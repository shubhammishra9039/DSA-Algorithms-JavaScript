let randomNumber = Math.round(Math.random()*10)

let arr = [1,2,3]

for(let i=0 ; i<=randomNumber;i++)
{
   for(let j=0 ; j<arr.length-1;j++)
   {
       let temp=0
       temp=arr[j]
       arr[j]=arr[j+1]
       arr[j+1]=temp
    }
}


console.log(arr)