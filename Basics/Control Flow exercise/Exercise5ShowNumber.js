//limit is given print odd even 
//example:limit is 6
// output
//            0 EVEN
//            1 ODD 
//            2 Even 
//            3 ODD 
//            4 EVEN 
//            5 ODD 
//            6 EVEN

function showNumber(limit){
    let list=[];
    for(let i=0;i<=limit;i++){
        list[i]=(i%2===0) ? 'EVEN':'ODD';
    }

    for(let print in list){
        console.log(print+" "+list[print]);
    }
}
showNumber(10);