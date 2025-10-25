const sliderBarNone = document.querySelector('#sliderBarNone');
const sliderBar2None = document.querySelector('#sliderBar2None');
const sliderBar3None = document.querySelector('#sliderBar3None');
const sliderBar4None = document.querySelector('#sliderBar4None');

const barWindowMenu2None = document.querySelector('#barWindowMenu2None');

const mainNone = document.querySelector('#mainNone');

const ulWindow = document.querySelector('#ulWindow');
const ulWindow2 = document.querySelector('#ulWindow2');
const ulWindow3 = document.querySelector('#ulWindow3');
const ulWindow4 = document.querySelector('#ulWindow4');


const buttonSlider = document.querySelector('#buttonSlider');
const buttonSlider2 = document.querySelector('#buttonSlider2');

const styleLeft = document.querySelector('#styleLeftIndex')
const styleLeftIndex = document.querySelector('.styleLeftIndex');
const styleLeftIndex100px = document.querySelector('.styleLeftIndex100px');
const styleLeftIndex422px = document.querySelector('.styleLeftIndex422px');
const styleLeftIndex655px = document.querySelector('.styleLeftIndex655px');

const christmasSlider440px = document.querySelector('.christmas-slider440px');
const christmasSlider770px = document.querySelector('.christmas-slider770px');
const christmasSlider1330px = document.querySelector('.christmas-slider1300px');

const sliderWidth = window.innerWidth;

let date = new Date('Jan 1 2025 00:00:00');
let date2 = new Date('Jan 1 2026 00:00:00')


function counts() {
    let now = new Date();
    gap2 = date2 - now;
    gap = date - now;

    if (gap < 0 ) {
            let deyss = Math.floor(gap2 / 1000 / 60 / 60 / 24);
            let houers = Math.floor(gap2 / 1000 / 60 / 60 ) % 24;
            let mintuts = Math.floor(gap2 / 1000 / 60 ) % 60;
            let secends = Math.floor(gap2 / 1000 ) % 60;
            document.getElementById('d').innerText = deyss;
            document.getElementById('h').innerText = houers;
            document.getElementById('m').innerText = mintuts;
            document.getElementById('s').innerText = secends;
    } else {
    let deys = Math.floor(gap / 1000 / 60 / 60 / 24);
    let houer = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    let mint = Math.floor(gap / 1000 / 60 ) % 60;
    let secend = Math.floor(gap / 1000 ) % 60;

    document.getElementById('d').innerText = deys;
    document.getElementById('h').innerText = houer;
    document.getElementById('m').innerText = mint;
    document.getElementById('s').innerText = secend;
    }
};

counts();
setInterval(counts, 1000);


sliderBarNone.addEventListener('click', () => {
    if (sliderBarNone.classList.contains('sliderBarNone') == false && sliderBar2None.classList.contains('sliderBar2None') == true) {
        sliderBarNone.classList.add('sliderBarNone');
        sliderBar2None.classList.remove('sliderBar2None');
        mainNone.classList.add('main-none');
    } 
});


sliderBar2None.addEventListener('click', () => {
    if (sliderBar2None.classList.contains('sliderBar2None') == false && sliderBarNone.classList.contains('sliderBarNone') == true) {
        sliderBar2None.classList.add('sliderBar2None');
        sliderBarNone.classList.remove('sliderBarNone');
        mainNone.classList.remove('main-none');
    }
});


ulWindow.addEventListener('click', () => {
    if (mainNone.classList.contains('main-none') == true) {
        mainNone.classList.remove('main-none')
        barWindowMenu2None.classList.add('barWindowMenu2None');
        sliderBar2None.classList.add('sliderBar2None');
        sliderBarNone.classList.remove('sliderBarNone');
    }
});

ulWindow2.addEventListener('click', () => {
    if (mainNone.classList.contains('main-none') == true) {
        mainNone.classList.remove('main-none')
        barWindowMenu2None.classList.add('barWindowMenu2None');
        sliderBar2None.classList.add('sliderBar2None');
        sliderBarNone.classList.remove('sliderBarNone');
    }
});

ulWindow3.addEventListener('click', () => {
    if (mainNone.classList.contains('main-none') == true) {
        mainNone.classList.remove('main-none')
        barWindowMenu2None.classList.add('barWindowMenu2None');
        sliderBar2None.classList.add('sliderBar2None');
        sliderBarNone.classList.remove('sliderBarNone');
    }
});

ulWindow4.addEventListener('click', () => {
    if (mainNone.classList.contains('main-none') == true) {
        mainNone.classList.remove('main-none')
        barWindowMenu2None.classList.add('barWindowMenu2None');
        sliderBar2None.classList.add('sliderBar2None');
        sliderBarNone.classList.remove('sliderBarNone');
    }
});


sliderBarNone.addEventListener('click', () => {
    if (barWindowMenu2None.classList.contains('barWindowMenu2None') == true) {
        barWindowMenu2None.classList.remove('barWindowMenu2None');
    } else {
        barWindowMenu2None.classList.add('barWindowMenu2None');
    }
});

sliderBar2None.addEventListener('click', () => {
    if (barWindowMenu2None.classList.contains('barWindowMenu2None') == true) {
        barWindowMenu2None.classList.remove('barWindowMenu2None');
    } else {
        barWindowMenu2None.classList.add('barWindowMenu2None');
    }

});


buttonSlider2.addEventListener('click', () => {
    if (styleLeft.classList.contains('styleLeftIndex') == true && sliderWidth > 781) {
        styleLeft.classList.remove('styleLeftIndex');
        styleLeft.classList.add('styleLeftIndex100px');
        buttonSlider.classList.remove('button-slider-main-none');
    } else if (styleLeft.classList.contains('styleLeftIndex100px') == true) {
        styleLeft.classList.remove('styleLeftIndex100px');
        styleLeft.classList.add('styleLeftIndex422px');
    }  else if (styleLeft.classList.contains('styleLeftIndex422px') == true) {
        styleLeft.classList.remove('styleLeftIndex422px');
        styleLeft.classList.add('styleLeftIndex655px');
        buttonSlider2.classList.add('button-slider-main-none');
    }
});


buttonSlider2.addEventListener('click', () => {
    if (styleLeft.classList.contains('styleLeftIndex') == true && sliderWidth < 780) {
        styleLeft.classList.remove('styleLeftIndex');
        styleLeft.classList.add('christmas-slider440px');
        buttonSlider.classList.remove('button-slider-main-none');
    } else if (styleLeft.classList.contains('christmas-slider440px') == true) {
        styleLeft.classList.remove('christmas-slider440px');
        styleLeft.classList.add('christmas-slider770px');
    }  else if (styleLeft.classList.contains('christmas-slider770px') == true) {
        styleLeft.classList.remove('christmas-slider770px');
        styleLeft.classList.add('christmas-slider1300px');
        buttonSlider2.classList.add('button-slider-main-none');
    }
});



buttonSlider.addEventListener('click', () => {
    if (styleLeft.classList.contains('styleLeftIndex655px') == true && sliderWidth > 781) {
        styleLeft.classList.remove('styleLeftIndex655px');
        styleLeft.classList.add('styleLeftIndex422px');
        buttonSlider2.classList.remove('button-slider-main-none');
    } else if (styleLeft.classList.contains('styleLeftIndex422px') == true) {
        styleLeft.classList.remove('styleLeftIndex422px');
        styleLeft.classList.add('styleLeftIndex100px');
    }  else if (styleLeft.classList.contains('styleLeftIndex100px') == true) {
        styleLeft.classList.remove('styleLeftIndex100px');
        styleLeft.classList.add('styleLeftIndex');
        buttonSlider.classList.add('button-slider-main-none');
    }
});

buttonSlider.addEventListener('click', () => {
    if (styleLeft.classList.contains('christmas-slider1300px') == true && sliderWidth < 780) {
        styleLeft.classList.remove('christmas-slider1300px');
        styleLeft.classList.add('christmas-slider770px');
        buttonSlider.classList.remove('button-slider-main-none');
    } else if (styleLeft.classList.contains('christmas-slider770px') == true) {
        styleLeft.classList.remove('christmas-slider770px');
        styleLeft.classList.add('christmas-slider440px');
    }  else if (styleLeft.classList.contains('christmas-slider440px') == true) {
        styleLeft.classList.remove('christmas-slider440px');
        styleLeft.classList.add('styleLeftIndex');
        buttonSlider.classList.add('button-slider-main-none');
    }
});
