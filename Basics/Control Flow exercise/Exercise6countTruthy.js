//write function that takes array and returns count of thruthy element(those element which value is true)
function countTruthy(array){
    let count=0;
    for(let i=0;i<array.length;i++)
         count=(array[i]) ? count+=1:count;
        return count;
}

console.log(countTruthy([NaN,null,undefined,0,1,2,3,4]));