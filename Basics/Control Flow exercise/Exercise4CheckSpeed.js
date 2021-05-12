//speed Limit less than =70-> Okay
//every more 5km -> 1 point will be given
//use Math.floor(1.3)
//more than 12 points licence suspended

function checkSpeed(speed){
    let count=0;
    speed=Math.floor(speed);
    if(isNaN(speed))
        return 'ERROR: Invalid speed';
    if(speed<=70)
        return 'Ok';
    else{
        for(let i=speed;i>=70;i-=5){
                count+=1;
                console.log(count);
        }
        if(count>12)
            return 'License Suspende';
        else
            return 'ok'
    }

}
console.log(checkSpeed(75.3));