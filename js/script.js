const selectBtn = document.getElementById('select-btn');


selectBtn.addEventListener('click', function() {
    player('select-btn', 'player-name', 'player-list');

   
})

const selectBtn2 = document.getElementById('select-btn2');


selectBtn2.addEventListener('click', function() {
    player('select-btn2', 'player-name2', 'player-list');

})

const selectBtn3 = document.getElementById('select-btn3');


selectBtn3.addEventListener('click', function() {
    player('select-btn3', 'player-name3', 'player-list');

})

const selectBtn4 = document.getElementById('select-btn4');

selectBtn4.addEventListener('click', function() {
    player('select-btn4', 'player-name4', 'player-list');

})

const selectBtn5 = document.getElementById('select-btn5');

selectBtn5.addEventListener('click', function() {
    player('select-btn5', 'player-name5', 'player-list');

})

const selectBtn6 = document.getElementById('select-btn6');

selectBtn6.addEventListener('click', function() {
    player('select-btn6', 'player-name6', 'player-list');

})

const selectBtn7 = document.getElementById('select-btn7');

selectBtn7.addEventListener('click', function() {
    player('select-btn7', 'player-name7', 'player-list');

})

const selectBtn8 = document.getElementById('select-btn8');

selectBtn8.addEventListener('click', function() {
    player('select-btn8', 'player-name8', 'player-list');

})

const selectBtn9 = document.getElementById('select-btn9');

selectBtn9.addEventListener('click', function() {
    player('select-btn9', 'player-name9', 'player-list');
})


const calculateBtn = document.getElementById('calculate-btn');
let playerAmount;
calculateBtn.addEventListener('click', function() {
   let playerPrice = document.getElementById('player-price');
    
    const playerPriceParse = parseInt(playerPrice.value);
    playerPrice.value ='';

    let playerTotalPrice = playerPriceParse * parseInt(playerList.children.length);

    const playerTotal = document.getElementById('player-total');
    playerAmount = playerTotal.innerText = playerTotalPrice;
     
})


const totalBtn = document.getElementById('total-btn');

totalBtn.addEventListener('click', function() {
   
    const managerPrice = document.getElementById('manager-price');

    let managerPriceParse = parseInt(managerPrice.value);
    managerPrice.value = '';
    const coachPrice = document.getElementById('coach-price');

    let coachPriceParse = parseInt(coachPrice.value);
    coachPrice.value = '';
    let totalAmount = playerAmount + managerPriceParse + coachPriceParse;

    const total = document.getElementById('total');

    total.innerText = totalAmount;
})