let arr=[1,2,3,4,99,89,9];
let max=arr[0];
let min=arr[0];

for(i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
    else if(arr[i]<min) {
        min=arr[i];
    }

}
console.log("maximum is ",max, "and minimis",min);