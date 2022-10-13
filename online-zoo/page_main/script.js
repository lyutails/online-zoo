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

const dotaAnimals = [    
    {
        title: 'Flamingo',
        location: 'Native to Africa',
        icon: '../refs/icons/meet-fish_icon.png',
        pic: '../', 
    },
    {
        title: 'Colibri',
        location: 'Native to America',
        icon: '../refs/icons/banana-bamboo_icon.png',
        pic: '../',
    },
    {
        title: 'Polar Owl',
        location: 'North Hemisphere',
        icon: '../refs/icons/banana-bamboo_icon.png',
        pic: '../',
    },
    {
        title: 'Hedgehog',
        location: 'Worldwide',
        icon: '../refs/icons/meet-fish_icon.png',
        pic: '../',
    },
    {
        title: 'Polar Fox',
        location: 'North Hemisphere',
        icon: '../refs/icons/meet-fish_icon.png',
        pic: '../',
    },
    {
        title: 'Medoed',
        location: 'Native to Africa',
        icon: '../refs/icons/meet-fish_icon.png',
        pic: '../',
    },
    {
        title: 'Cheetahs',
        location: 'Native to Africa',
        icon: '../refs/icons/meet-fish_icon.png',
        pic: '../',
    },
    {
        title: 'Giant Pandas',
        location: 'Native to Southwest China',
        icon: '../refs/icons/banana-bamboo_icon.png',
        pic: '../',
    },
    {
        title: 'Eagles',
        location: 'Native to South America',
        icon: '../refs/icons/meet-fish_icon.png',
        pic: '../',
    },
    {
        title: 'Gorillas',
        location: 'Native to Congo',
        icon: '../refs/icons/banana-bamboo_icon.png',
        pic: '../',
    },
    {
        title: 'Gorillas',
        location: 'Native to Congo',
        icon: '../refs/icons/banana-bamboo_icon.png',
        pic: '../',
    },
    {
        title: 'Two-toed Sloth',
        location: 'Mesoamerica, South America',
        icon: '../refs/icons/banana-bamboo_icon.png',
        pic: '../',
    },
    {
        title: 'Penguins',
        location: 'Native to Antarctica',
        icon: '../refs/icons/meet-fish_icon.png',
        pic: '../',
    },
    {
        title: 'Kiwi',
        location: 'New Zealand',
        icon: '../refs/icons/banana-bamboo_icon.png',
        pic: '../',
    },
    {
        title: 'Lemur',
        location: 'Madagaskar',
        icon: '../refs/icons/banana-bamboo_icon.png',
        pic: '../',
    },
    {
        title: 'Crocodile',
        location: 'Native to Southeastern U. S.',
        icon: '../refs/icons/meet-fish_icon.png',
        pic: '../',
    },    
    ]


const sliderCards = document.querySelector('.animals_carousel');
const buttonLeft = document.querySelector('.slider_button_left');
const buttonRight = document.querySelector('.slider_button_right');
const move = 1180;
let currentTranslate = -move;


buttonLeft.addEventListener('click', function(e) {
    currentTranslate -= move;
    sliderCards.style.transform=`translateX(${currentTranslate}px)`;     
})

buttonRight.addEventListener('click', function(e) {
    currentTranslate += move;
    sliderCards.style.transform=`translateX(${currentTranslate}px)`;    
})

const sliderPic = document.querySelector('.slider_pic')




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


alert('привет :) оставляйте, пожалуйста, контакты... работа в процессе завершения');