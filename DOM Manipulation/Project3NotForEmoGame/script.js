'user strict'
//making score zero and dice disappear
// const score0=document.querySelector('#score--0');

const score0El=document.getElementById('score--0');//faster
const score1El=document.getElementById('score--1');//faster
const currentscore0El=document.getElementById('current--0');//faster
const currentscore1El=document.getElementById('current--1');//faster
const diceEl=document.querySelector('.dice');
const btnRoll=document.querySelector('.btn--roll');
 const btnNew=document.querySelector('.btn--new');
 const btnHold=document.querySelector('.btn--hold');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

//intialize
const init=function(){
    totalScore=[0,0];
     currentscore=0;
     activeplayer=0;
     playing=true;
     score0El.textContent=0;
    score1El.textContent=0;
    diceEl.classList.add('hidden');
    currentscore0El.textContent=0;
    currentscore1El.textContent=0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init();
//preset
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

//switch Player
const switchPlayer= function(){
        document.getElementById(`current--${activeplayer}`).textContent=0;
        activeplayer=(activeplayer===0) ?1:0;
        currentscore=0;
        //changinging colorby adding and removing player--active class
       player0.classList.toggle('player--active');
       player1.classList.toggle('player--active');
}

//rolling dice functionlity
const rolling=function(){
    //1.generating dice roll number
    //2.changing dice image
    //3. switching players
if(playing){
    const number=Math.trunc(Math.random()*6)+1;
    console.log(number);
    
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${number}.png`;//changing dice according to number
    if(number!==1){
        //add current score
        currentscore+=number;
        document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    }else{
        //switch  next Player
        switchPlayer();
        
    }  
}
}
btnRoll.addEventListener('click',rolling);

//creating holding functionality
const hold=function(){
    //1. add current score to total core of active player
 if(playing){
    totalScore[activeplayer]+=currentscore;
    console.log(totalScore[activeplayer]);
    document.getElementById(`score--${activeplayer}`).textContent=totalScore[activeplayer];
    //2. check if player's score is above 100
    
    if(totalScore[activeplayer] >= 20){
        //finsh game
        playing=false;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
        currentscore=0;
        
    }else{
    //switch player  
        switchPlayer();
    }
}
}

btnHold.addEventListener('click',hold);

btnNew.addEventListener('click',init);
//help button
const model=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
//only first one selected
// const btnsOpenModal=document.querySelector('.show-modal');
// console.log(btnsOpenModal);

//use this method
const btnsOpenModal=document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
// for(let i=0;i<btnsOpenModal.length;i++)
//     console.log(btnsOpenModal[i]);
const openModal=function() {
    console.log('Button clicked');
    //for adding class we can use ClassList Property method add or remove for delete
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');

} 
for(let i=0;i<btnsOpenModal.length;i++)
    btnsOpenModal[i].addEventListener('click',openModal);
const closeModal=function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click',closeModal);
//added one more functionlity that if someone click overlay then also window will be closed
overlay.addEventListener('click',closeModal);


//How To Handle KeyPress Event
//adding 'Esc' key to close the window
// three event Keyup-> when we leave the key
            // keypress->when we are pressing the key
            //keydown-> when we just pressed the key
document.addEventListener('keydown',function(e){
    //need to add key name
    //console.log(e);//{isTrusted: true, key: "Escape", code: "Escape", location: 0, ctrlKey: false, …}
    //e have property of key; can also use other variable
    //console.log(e.key); Escape
    //check if model have hidden class
    if(e.key==='Escape'&&(!model.classList.contains('hidden'))){
            closeModal();
    }

});