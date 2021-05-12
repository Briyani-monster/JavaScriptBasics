// write a function that return following values
// fizz: when Divisible By 3
// Buzz: when divisible By 5
// fizzBuzz when divisible by both
//Samevalue : when all above fails 

function fizzbuzz(value){
    if(isNaN(value))
        return 'ERROR:Invalid Input';
    if(value%3==0 && !(value%5==0))
        return 'fizz';
    else if(value%5==0 && !(value%3==0))
        return 'Buzz';
    else if(value%3==0 && value%5==0)
        return 'fizzbuzz';
    else 
        return value;

}

console.log(fizzbuzz(2));