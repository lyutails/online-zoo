
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

// const sumGrade = document.querySelector(".sum_circles");
// const moneyInput = document.querySelector(".payment");
// sumGrade.addEventListener("click", (e) => {
//   e.target.className = "radiobutton_circle_5000" ? moneyInput.value = e.target.value : false;
//   }
// );

