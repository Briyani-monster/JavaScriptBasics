//Landscape or Portrait
//create a function that return true if 
//object is Landscpe means width greater then length

function isLandscape(width,height){
    if(isNaN(width) || isNaN(height))
        return 'Invalid Inputs Both should be of Type Numbers';
    return width>height ?true:false;
}
console.log(isLandscape(12,2));