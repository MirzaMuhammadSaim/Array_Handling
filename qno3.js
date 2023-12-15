let arr =[1,2,3,,4,5,6,7,8,9,10];
let res= arr.reduce(function(a,b) {
    return a+b;
});
console.log(res);

///2nd way
let array=[1,2,3,4,5,6,7,8,9]
let sum=0;

for (let i = 0; i< array.length; i++) {
   
    sum+=array[i]
}
console.log("sum of arrays are", sum)