let translate_value = 1331;

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

const dataAnimals = [    
    {
        title: 'Flamingo',
        location: 'Native to Africa',
        foodIcon: 'food_omnivores',
        pic: '../', 
        id: 'flamingo',
    },
    {
        title: 'Colibri',
        location: 'Native to America',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'kolibri',
    },
    {
        title: 'Polar Owl',
        location: 'North Hemisphere',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'polar_owl',
    },
    {
        title: 'Hedgehog',
        location: 'Worldwide',
        foodIcon: 'food_omnivores',
        pic: '../',
        id: 'hedgehog',
    },
    {
        title: 'Polar Fox',
        location: 'North Hemisphere',
        foodIcon: 'food_omnivores',
        pic: '../',
        id: 'polar_fox',
    },
    {
        title: 'Medoed',
        location: 'Native to Africa',
        foodIcon: 'food_omnivores',
        pic: '../',
        id: 'medoed',
    },
    {
        title: 'Cheetahs',
        location: 'Native to Africa',
        foodIcon: 'food_omnivores',
        pic: '../',
        id: 'cheetahs',
    },
    {
        title: 'Giant Pandas',
        location: 'Native to Southwest China',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'pandas',
    },
    {
        title: 'Eagles',
        location: 'Native to South America',
        foodIcon: 'food_omnivores',
        pic: '../',
        id: 'eagles',
    },
    {
        title: 'Gorillas',
        location: 'Native to Congo',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'gorillas',
    },
    {
        title: 'Gorillas',
        location: 'Native to Congo',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'gorilla_2',
    },
    {
        title: 'Two-toed Sloth',
        location: 'Mesoamerica, South America',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'sloth',
    },
    {
        title: 'Penguins',
        location: 'Native to Antarctica',
        foodIcon: 'food_omnivores',
        pic: '../',
        id: 'penguins',
    },
    {
        title: 'Kiwi',
        location: 'New Zealand',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'kiwi_1',
    },
    {
        title: 'Lemur',
        location: 'Madagaskar',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'lemur',
    },
    {
        title: 'Crocodile',
        location: 'Native to Southeastern U. S.',
        foodIcon: 'food_omnivores',
        pic: '../',
        id: 'crocodile',
    },    
    {
        title: 'Kangaroo',
        location: 'Native to Australia',
        foodIcon: 'food_vegetarian',
        pic: '../',
        id: 'kangaroo',
    },
    {
        title: 'Whale',
        location: 'Oceans',
        foodIcon: 'food_omnivores',
        pic: '../',
        id: 'whale',
    },
    ]

const sliderPic = document.querySelector('.slider_pic')
const sliderCards = document.querySelector('.animals_carousel');
const buttonLeft = document.querySelector('.slider_button_left');
const buttonRight = document.querySelector('.slider_button_right');
const move = 1180;
let currentTranslate = -move;
let direction = 1;

buttonRight.addEventListener('click', function(e) {
    currentTranslate -= move;
    sliderCards.style.transition=``;
    sliderCards.style.transform=`translateX(${currentTranslate}px)`;    
    buttonLeft.style.pointerEvents = 'none'; 
    buttonRight.style.pointerEvents = 'none';
    direction = 1; 
})

sliderCards.addEventListener('transitionend', (e) => {
    if (e.target === e.currentTarget) {
        sliderCards.style.transition=`none`;
        buttonLeft.style.pointerEvents = 'all'; 
        buttonRight.style.pointerEvents = 'all';
        const slides = shuffle(dataAnimals).map(el => generateCard(el));
        if (direction === 1) { 
            currentTranslate += move;
            [...sliderCards.children].forEach((el, index) => {
                if (index < 6) {
                    el.remove();
                }
            });                                     
            sliderCards.append(...slides);    
            sliderCards.style.transform=`translateX(${currentTranslate}px)`;        
        } 
        else { 
            currentTranslate -= move;                     
            [...sliderCards.children].forEach((el, index) => {
                if (index >= 12) {
                    el.remove();
                }
            });                       
            sliderCards.prepend(...slides);
            sliderCards.style.transform=`translateX(${currentTranslate}px)`;
        }               
    }    
})

buttonLeft.addEventListener('click', function(e) {
    currentTranslate += move;
    sliderCards.style.transition=``;
    sliderCards.style.transform=`translateX(${currentTranslate}px)`; 
    buttonLeft.style.pointerEvents = 'none'; 
    buttonRight.style.pointerEvents = 'none';    
    direction = -1;
})

function generateCard ({title, location, id, foodIcon}) {
    const card = document.createElement('div');
    card.className = `slider_pic ${id}`;
    card.innerHTML = `<img class="${id}_pic">
    <div class="slider_info_icon_${id}">
        <div class="slider_text_${id}">
            <p class="${id}_name">${title}</p>
            <p class="${id}_habitation">${location}</p>
        </div>
        <span class="${foodIcon}"></span>
    </div>    
`;
return card;    
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array.slice(0, 6);
  }

  function init() {
    sliderCards.style.transition='none';
    sliderCards.innerHTML = '';   
    const slides1 = shuffle(dataAnimals).map(el => generateCard(el));
    const slides2 = shuffle(dataAnimals).map(el => generateCard(el));
    const slides3 = shuffle(dataAnimals).map(el => generateCard(el));
    sliderCards.append(...slides1, ...slides2, ...slides3);  
    sliderCards.style.transition=''; 
  }
  
  init();


// testimonials

const dataTestimonials = [    
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Michael John',
        location: 'Local Austria',
        date: 'Today',
        circle: '0x2022',
        text: `The best online zoo I\’ve met. My son delighted
        very much ljves to watch gouillas. Online zoo is one jf the ways to instill
         a love for animals.The best online zoo I\’ve met. My son delighted very
          much ljves to watch gouillas. Online zoo is one jf the ways to instill a 
          love for animals. The best online zoo I\’ve met. My son delighted very 
          much ljves to watch gouillas. Online zoo is one jf the ways to instill a 
          love for animals.<br>The best online zoo I\’ve met. My son delighted very
          much ljves to watch gouillas. Online zoo is one jf the ways to instill a 
          love for animals.`,
    },
    {
        ava: '../refs/icons/user_one.png',
        name: 'Oskar Samborsky',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `Online zoo is one jf the ways to instill 
        a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas. Online zoo is one jf the ways to 
        instill a love for animals.The best online zoo I’ve met. My son delighted
         very much ljves to watch gouillas. 
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals`,
    },
    {
        ava: '../refs/icons/user_two.png',
        name: 'Fredericka Michelin',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas. Online zoo is one jf the ways to instill
         a love for animals.The best online zoo I’ve met. My son delighted very 
         much ljves to watch gouillas. Online zoo is one jf the ways to instill 
         a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
    {
        ava: '../refs/icons/user_three.png',
        name: 'Mila Riksha',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas. Online zoo is one jf the ways to instill
         a love for animals.The best online zoo I’ve met. My son delighted very 
         much ljves to watch gouillas. Online zoo is one jf the ways to instill 
         a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Sarah Jane',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Tony Stark',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Lois Lane',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`, 
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Brad Pitt',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Brad Pitt',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Sandra Bullock',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Jonny Depp',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Linda Burrow',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`
    },
    {
        ava: '../refs/icons/user_icon.svg',
        name: 'Violetta Mirrow',
        location: 'Local Austria',
        date: 'Yesterday',
        circle: '0x2022',
        text: `The best online zoo I’ve met. My son delighted very 
        much ljves to watch gouillas. Online zoo is one jf the ways to instill a love 
        for animals.The best online zoo I’ve met. My son delighted very much ljves to 
        watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. Online zoo is one jf the ways to instill a love for animals.The
         best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch
         gouillas. Online zoo is one jf the ways to instill a love for animals.
         The best online zoo I’ve met. My son delighted very much ljves to watch 
         gouillas. Online zoo is one jf the ways to instill a love for animals.`
    },
    ]

    const createCard = (card) => {
        const testimonial_slider = document.getElementById('testimonials_carousel')
      
        const testimonial = document.createElement('div')
        const user_info = document.createElement('div')
        const user_icon = document.createElement('img')
        const user_name_location = document.createElement('div')
        const user_name = document.createElement('div')
        const where_when = document.createElement('div')
        const user_country = document.createElement('p')
        const circle = document.createElement('span')
        const testimonial_date = document.createElement('p')
        const testimonial_text = document.createElement('div')
      
        testimonial.classList.add('testimonial')
        user_info.classList.add('user_info')
        user_icon.classList.add('user_icon')
        user_name_location.classList.add('user_name_location')
        user_name.classList.add('user_name')
        where_when.classList.add('where_when')
        user_country.classList.add('user_country')
        circle.classList.add('country_date_between_circle')
        testimonial_date.classList.add('testimonial_date')
        testimonial_text.classList.add('testimonial_text')

        user_icon.src = card.ava;
        user_icon.alt = card.name;
      
        user_name.textContent = card.name
        user_country.textContent = card.location
        testimonial_date.textContent = card.date
        circle.textContent = String.fromCodePoint(card.circle)
        testimonial_text.textContent = card.text
      
        testimonial.appendChild(user_info)
        testimonial.appendChild(testimonial_text)
        user_info.appendChild(user_icon)
        user_info.appendChild(user_name_location)
        user_name_location.appendChild(user_name)
        user_name_location.appendChild(where_when)
        where_when.appendChild(user_country)
        where_when.appendChild(circle)
        where_when.appendChild(testimonial_date)
        testimonial_slider.appendChild(testimonial)
        return testimonial;
      }

      dataTestimonials.map(item => {
        const card = createCard(item);
        card.onclick = () => createPopup(item);
      })


// testimonials slider

const inputRange = document.querySelector('input[type="range"]');
const rangeValue = (value, gap=296) => {
    let newValue = inputRange.value;
    let target = document.querySelector('.testimonials_slider');
    target.style.transform = `translateX(${value - (newValue * gap)}px)`;
}




const windowSize = () => {    
    if (document.body.clientWidth >= 1600) { 
        translate_value = 1331
        inputRange.removeEventListener('input', rangeValue)
        inputRange.addEventListener('input', () => rangeValue (translate_value));
    }
    if (document.body.clientWidth < 1600 && document.body.clientWidth >= 1000) {
      translate_value = 1450
      inputRange.removeEventListener('input', rangeValue)
      inputRange.addEventListener('input', () => rangeValue (translate_value, 350));
    }  
    if (document.body.clientWidth < 768) {
      translate_value = 0
    }
  }
  window.addEventListener('resize', () => { windowSize() })
 



const createPopup = (card) => {

    const body = document.querySelector('body');
    
    const popup = document.createElement('div')
    const cross = document.createElement('div'); 
    const shadow = document.createElement('div'); 
    const testimonial = document.createElement('div')
    const user_info = document.createElement('div')
    const user_icon = document.createElement('img')
    const user_name_location = document.createElement('div')
    const user_name = document.createElement('div')
    const where_when = document.createElement('div')
    const user_country = document.createElement('p')
    const circle = document.createElement('span')
    const testimonial_date = document.createElement('p')
    const testimonial_text = document.createElement('div')
    
    popup.classList.add('popup');
    testimonial.classList.add('testimonial')
    user_info.classList.add('user_info')
    user_icon.classList.add('user_icon')
    user_name_location.classList.add('user_name_location')
    user_name.classList.add('user_name')
    where_when.classList.add('where_when')
    user_country.classList.add('user_country')
    circle.classList.add('country_date_between_circle')
    testimonial_date.classList.add('testimonial_date')
    testimonial_text.classList.add('testimonial_text')
    cross.classList.add('cross');
    shadow.classList.add('shadow');

    user_icon.src = card.ava;
    user_icon.alt = card.name;
  
    user_name.textContent = card.name
    user_country.textContent = card.location
    testimonial_date.textContent = card.date
    circle.textContent = String.fromCodePoint(card.circle)
    testimonial_text.textContent = card.text
  
    testimonial.appendChild(user_info)
    testimonial.appendChild(testimonial_text)
    user_info.appendChild(user_icon)
    user_info.appendChild(user_name_location)
    user_name_location.appendChild(user_name)
    user_name_location.appendChild(where_when)
    where_when.appendChild(user_country)
    where_when.appendChild(circle)
    where_when.appendChild(testimonial_date)
    popup.appendChild(shadow)
    shadow.appendChild(testimonial)
    body.appendChild(popup)
    testimonial.appendChild(cross);      
    cross.onclick = () => {
        popup.remove()
        document.body.removeAttribute('style')
      }  
    shadow.onclick = (e) => {
              if (e.target !== shadow) {
                return
              } else {
                popup.remove()
                document.body.removeAttribute('style')
              }
            }
    return popup;
}

windowSize(translate_value)
