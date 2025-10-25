const sliderBar3None = document.querySelector('#sliderBar3None');
const sliderBar4None = document.querySelector('#sliderBar4None');

const barWindowMenu2None = document.querySelector('#barWindowMenu2None');

const mainNone2 = document.querySelector('.mainNone2');

const ulWindow = document.querySelector('#ulWindow');
const ulWindow2 = document.querySelector('#ulWindow2');
const ulWindow3 = document.querySelector('#ulWindow3');
const ulWindow4 = document.querySelector('#ulWindow4');


const buttonSlider = document.querySelector('#buttonSlider');
const buttonSlider2 = document.querySelector('#buttonSlider2');





sliderBar3None.addEventListener('click', () => {
    if (sliderBar3None.classList.contains('sliderBarNone') == false && sliderBar4None.classList.contains('sliderBar2None') == true) {
        sliderBar3None.classList.add('sliderBarNone');
        sliderBar4None.classList.remove('sliderBar2None');
        mainNone2.classList.add('main-none2');
    } 
});


sliderBar4None.addEventListener('click', () => {
    if (sliderBar4None.classList.contains('sliderBar2None') == false && sliderBar3None.classList.contains('sliderBarNone') == true) {
        sliderBar4None.classList.add('sliderBar2None');
        sliderBar3None.classList.remove('sliderBarNone');
        mainNone2.classList.remove('main-none2');
    }
});


ulWindow.addEventListener('click', () => {
    if (mainNone2.classList.contains('main-none2') == true) {
        mainNone2.classList.remove('main-none2')
        barWindowMenu2None.classList.add('barWindowMenu2None');
        sliderBar4None.classList.add('sliderBar2None');
        sliderBar3None.classList.remove('sliderBarNone');
    }
});

ulWindow2.addEventListener('click', () => {
    if (mainNone2.classList.contains('main-none2') == true) {
        mainNone2.classList.remove('main-none2')
        barWindowMenu2None.classList.add('barWindowMenu2None');
        sliderBar4None.classList.add('sliderBar2None');
        sliderBar3None.classList.remove('sliderBarNone');
    }
});

ulWindow3.addEventListener('click', () => {
    if (mainNone2.classList.contains('main-none2') == true) {
        mainNone2.classList.remove('main-none2')
        barWindowMenu2None.classList.add('barWindowMenu2None');
        sliderBar4None.classList.add('sliderBar2None');
        sliderBar3None.classList.remove('sliderBarNone');
    }
});

ulWindow4.addEventListener('click', () => {
    if (mainNone2.classList.contains('main-none2') == true) {
        mainNone2.classList.remove('main-none2')
        barWindowMenu2None.classList.add('barWindowMenu2None');
        sliderBar4None.classList.add('sliderBar2None');
        sliderBar3None.classList.remove('sliderBarNone');
    }
});


sliderBar3None.addEventListener('click', () => {
    if (barWindowMenu2None.classList.contains('barWindowMenu2None') == true) {
        barWindowMenu2None.classList.remove('barWindowMenu2None');
    } else {
        barWindowMenu2None.classList.add('barWindowMenu2None');
    }
});

sliderBar4None.addEventListener('click', () => {
    if (barWindowMenu2None.classList.contains('barWindowMenu2None') == true) {
        barWindowMenu2None.classList.remove('barWindowMenu2None');
    } else {
        barWindowMenu2None.classList.add('barWindowMenu2None');
    }

});