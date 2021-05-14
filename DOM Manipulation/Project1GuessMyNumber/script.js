/*//easy way of selecting a data in java script
console.log(document.querySelector('.message'));//selects complete <p class='message>Start Guessing...</p>
console.log(document.querySelector('.message').textContent);//return start guessing
*/
//What is DOM manipulation
//stands for Document Object Model: Structured Representation of HTMl docs. Allows javascript to acess HTML

// DoM Methods and Propertie For DOM Manupulation is noy part of Javascript
// DOM is part of web API
//Se
//changing message text content
/*document.querySelector('.message').textContent='🎉 Correct Number!';
//changing text contents
document.querySelector('.number').textContent='10';
document.querySelector('.score').textContent='18';
//changing the number in the Textbox
document.querySelector('.guess').value=23;
console.log("hello "+(document.querySelector('.guess').value));
*/
//to check click we use Event Listener

//I want To listen event click on Check button

//Random scret Number
let number=Math.trunc(Math.random()*20)+1;
// console.log(number);
//document.querySelector('.number').textContent=number;
let score=20;
let highscore=0;
const myfun=function(){
    //guess is string so convert it to number
    const guess=Number(document.querySelector('.guess').value);
    // console.log(guess,typeof guess);

    if(!guess){//if zero then it will not run
        document.querySelector('.message').textContent='⛔ No Number!';
    }
    else if(guess===number && score>1){
        document.querySelector('.message').textContent='🥳 Your Guess Is Correct';
        document.querySelector('.number').textContent=number;
    //How To Manupulate the CSS making whole  green in this case        
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    }
    else if(guess==(number+1)||guess==(number-1)){
        if(score>1){
        document.querySelector('.message').textContent="❗❗❗ You're Close";
        score--;
        document.querySelector('.score').textContent=score;
        
        }
        else{
            document.querySelector('.message').textContent=("😩 You Loose The Game");
            document.querySelector('.score').textContent=0;
    }
        }
    
    else if(guess>number){
        if(score>1){
        document.querySelector('.message').textContent='📈 TOO High';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent=("😩 You Loose The Game");
            document.querySelector('.score').textContent=0;
    }
        }
    
    else if(guess<number){
        if(score>1){
        document.querySelector('.message').textContent='📉 TOO Low';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            // document.querySelector('body').style.backgroundColor='red';
            document.querySelector('.message').textContent=("😩 You Loose The Game");
            document.querySelector('.score').textContent=0;
            

            

    }
        }    
}

const myAgain=function(){
    score=20;
    document.querySelector('.score').textContent=score;
    number=Math.trunc(Math.random()*20)+1;
    // console.log(number);
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
}
document.querySelector('.check').addEventListener('click',myfun);

document.querySelector('.again').addEventListener('click',myAgain);


