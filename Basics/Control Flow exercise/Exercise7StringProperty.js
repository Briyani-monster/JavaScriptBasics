//write a function which returns a objects property if its value i type String
/* 
const movie={
    title:'a',
    releaseYear:2018,
    rating :4.5,
    director:'b',
};
output:
    title a 
    director b
*/
let movie={
    title:'a',
    releaseYear:2018,
    rating :4.5,
    director:'b',
};
showProperties(movie);
function showProperties(object){
   
    for(let key in object)
        if(typeof object[key]==='string')
            console.log(key,object[key]);
}

let array=['jan','Feb','Mar'];
if( array)
    console.log("working");


