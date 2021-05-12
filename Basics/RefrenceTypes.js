//Refrence Type Variable is also another type of Variables
// 1. Object 
// 2. Arrays
// 3. Function

// Object
let studentDetails={ firstName:'G S',
                     lastName:'Ashish',
                     universityRollNo:'0115007818',
                     branch:'EEE',
                     Year:4,
                    }
//printing
console.log(studentDetails);

//acessing value
console.log("Details "+studentDetails.Year+" : ",studentDetails.firstName);

//changing value
studentDetails.branch=3;
console.log(studentDetails);


//Arrays
let selectedColors=[];//empty array
console.log(selectedColors+" Type "+typeof selectedColors);
//asigning vaue
selectedColors=['red','green'];
console.log(selectedColors+" Type "+typeof selectedColors);

//acessing value
console.log(selectedColors[0]);
// can enter value after index also
selectedColors[3]=500;
console.log(selectedColors);


//functions

//syntax:function funcName(){
                    //work to do
// }

function greet(){
    console.log("Hello");
}
//calling
greet();

//parameterized constructor

function greet1(name) {
    console.log("Hello "+name);
    
}
//calling
greet1("ravi");

//return function
function sum(val1,val2){
    return val1+val2;
}
//calling

console.log(sum(12,500));