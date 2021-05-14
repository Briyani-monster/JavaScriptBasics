'use strict'
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