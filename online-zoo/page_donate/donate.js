
// burger menu

const burger = document.querySelector('.burger_menu_checkbox');
if (burger) {
    const burgerWrapper = document.querySelector('.burger_wrapper');
    const burgerMenu = document.querySelector('.burger_items');
    const burgerOverlay = document.querySelector('.burger_overlay');    

    burger.addEventListener('click', function(b) {
        burger.classList.toggle('active');
        burgerWrapper.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        burgerOverlay.classList.toggle('active');
    });
}

const burgerOverlay = document.querySelector('.burger_overlay');
if (burgerOverlay) {
    const burgerOverlay = document.querySelector('.burger_overlay');
    const burgerWrapper = document.querySelector('.burger_wrapper');
    const burgerMenu = document.querySelector('.burger_items');
    const body = document.querySelector('body');
    const burger = document.getElementById('burger_id');

    burgerOverlay.addEventListener('click', function(b) {
        burgerOverlay.classList.remove('active');
        burgerWrapper.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.classList.remove('active');        
        burger.checked = false;     
    })
}


// another amount 4 symbols limit

function maxLengthCheck(object)
{
    if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
}

// input amount number

const moneyButtons = document.querySelectorAll('.payment');
const inputAmount = document.querySelector('input[type="number"]');
const outOfGivenAmounts = document.getElementById('radiobutton_circle_default');
const fiveThousand = document.getElementById('radiobutton_circle_5000');
const twoThousand = document.getElementById('radiobutton_circle_2000');
const oneThousand = document.getElementById('radiobutton_circle_1000');
const fiveHundred = document.getElementById('radiobutton_circle_500');
const twoHundredFifty = document.getElementById('radiobutton_circle_250');
const oneHundred = document.getElementById('radiobutton_circle_100');
const fifty = document.getElementById('radiobutton_circle_50');
const twentyFive = document.getElementById('radiobutton_circle_25');

fiveThousand.addEventListener('click', function(e) {   
    if (radiobutton_circle_5000.checked = true) {
        inputAmount.value = 5000;
    }    
    else {
        inputAmount.value = 'Another amount';        
    }
})

twoThousand.addEventListener('click', function(e) {   
    if (radiobutton_circle_2000.checked = true) {
        inputAmount.value = 2000;
    }
    else {
        inputAmount.value = 'Another amount';
    }
})

oneThousand.addEventListener('click', function(e) {   
    if (radiobutton_circle_1000.checked = true) {
        inputAmount.value = 1000;
    }
    else {
        inputAmount.value = 'Another amount';
    }
})

fiveHundred.addEventListener('click', function(e) {   
    if (radiobutton_circle_500.checked = true) {
        inputAmount.value = 500;
    }
    else {
        inputAmount.value = 'Another amount';
    }
})

twoHundredFifty.addEventListener('click', function(e) {   
    if (radiobutton_circle_250.checked = true) {
        inputAmount.value = 250;
    }
    else {
        inputAmount.value = 'Another amount';
    }
})

oneHundred.addEventListener('click', function(e) {   
    if (radiobutton_circle_100.checked = true) {
        inputAmount.value = 100;
    }
    else {
        inputAmount.value = 'Another amount';
    }
})

fifty.addEventListener('click', function(e) {   
    if (radiobutton_circle_50.checked = true) {
        inputAmount.value = 50;
    }
    else {
        inputAmount.value = 'Another amount';
    }
})

twentyFive.addEventListener('click', function(e) {   
    if (radiobutton_circle_25.checked = true) {
        inputAmount.value = 25;
    }
    else {
        inputAmount.value = 'Another amount';
    }
})

inputAmount.addEventListener('input', function(e) {
    if (inputAmount.value != 5000 || inputAmount.value != 2000 || inputAmount.value != 1000 || 
        inputAmount.value != 500 || inputAmount.value != 250 || inputAmount.value !=100 || 
        inputAmount.value != 50 || inputAmount.value != 25 || '') {        
        outOfGivenAmounts.checked = true;
    } 
    if (e.target.value == 25) {
        radiobutton_circle_25.checked = true;
    }
    if (e.target.value == 50) {
        radiobutton_circle_50.checked = true;
    }
    if (e.target.value == 100) {
        radiobutton_circle_100.checked = true;
    }
    if (e.target.value == 250) {
        radiobutton_circle_250.checked = true;
    }
    if (e.target.value == 500) {
        radiobutton_circle_500.checked = true;
    }
    if (e.target.value == 1000) {
        radiobutton_circle_1000.checked = true;
    }
    if (e.target.value == 2000) {
        radiobutton_circle_2000.checked = true;
    }
    if (e.target.value == 5000) {
        radiobutton_circle_5000.checked = true;
    }        
})