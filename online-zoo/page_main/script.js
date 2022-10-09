// limit on numbers in Another amount on donate page

const element = document.querySelector('.submit_button');

function submitDefault (object) {
    if ((object.placeholder.match('Enter your email')))
    element.style.color = '#404950';
    element.style.border = '#404950';
}


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



// carousel animals 



// popup testimonials

const testimonial = document.querySelector('.testimonial_one');
if (testimonial) {
    const burgerOverlay = document.querySelector('.testimonial_overlay');
}
