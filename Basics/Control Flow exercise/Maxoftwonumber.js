//create a function which takes two number and return max of two no

function maxOfTwo(number1,number2){
    if(isNaN(number1) || isNaN(number2))// checking variable number or not
        return 'Invalid input Numbers';

    return number1 > number2 ? number1:number2;
}


console.log(maxOfTwo(12,12));