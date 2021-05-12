/*//Types of Operator
        1. ARthematic
        2. Assignment
        3.Comparision
        4. Logical
        5. Bitwise
 */


/*// 1. Arthematic Operators
        Add:'+' 
        Sub:'-' 
        Multiply:'*' 
        Devide:'/' 
        Reminder:'%'  
        exponential:'**'
*/

let x=10;
let y=20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

// -------------------------------------------------------------------------------------------------------------------------------------


/*// 2.Assignment Operator
            1.equal '='
            2.increment: '++'
            3. decrement: '--'
            4.arthematic and equals combination *= , -= , += , /=
*/

let m=20;
/*// Increment operator
        prefix: ++m first increment then assign value 
        postfix: m++ first assign than increment
*/
console.log(m++);//print 20 then increment it to 21
console.log(++m); // increment it again 21 to 22 then prints

/*// decrement operator
        prefix: --m first increment then assign value 
        postfix: m-- first assign than increment
*/

console.log(m--);//print 22 then decrement it to 21
console.log(--m); // decrement it again 21 to 20 then prints
console.log(m+=50);
//------------------------------------------------------------------------------------------------------------------------------------

/*// 3.comparision Operator
     I Relational operator
        i greater than: >
        ii less than: <
        iii greter than or  equals to >=
        iv less than or equals to <=
        v equality operator: ==
        vi not equal : !=
        */
 /* strict equality vs loose equality

        Strict equalty |  Loose equality
        1. '==='       |    '=='
                       |
        2. Type + value| only value is checked
            is checked |  
                       |
*/

// Ternary Operator
    let points=150;
    let type= points>100 ? 'gold' : 'silver';
            //condition     value1   value2
                        /*  to be      to be
                           assign     assign 
                           if true    if false*/
console.log("type: "+type);

/*//4 Logical Operators
        Logical AND (&&)
                syntax: condition1 && condition2
                -> return true if both condition true
        Logical OR (||)
                syntax: condition1 || condition2
                -> return true if one of the condition true
        Logical NOT (!)
                syntax: !condition2
                -> return true if both condition false or vice versa 
*/

/*//some values are Falsy 
        i undefined
        ii null
        iii 0
        iv false
        v  ''
        vi NaN
        */