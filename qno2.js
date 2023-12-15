//2. Write a js program to print all negative elements in an array

let array= [1,3,-5,-6,-4,8,10,-9];
let res= array.filter(function(numb){
    return numb < 0;
});
console.log(res);

//2nd way
let arr= [1,3,-5,-6,-4,8,10,-9];

for(i=0; i<arr.length;i++)
{
    if(arr[i]<0)
    {
        console.log(arr[i]);
    }
}

