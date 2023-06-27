document.title = 'PayPal';

let navBtn = document.querySelector('.links-btn');
let navLinks = document.querySelector('.nav-links');
let closeNavBtn = document.querySelector('.close-nav-btn');
let navBtnArrow = document.querySelectorAll('.links-btn img');
navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navBtn.parentElement.classList.toggle('active');
    arrowAnimation();
});

closeNavBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');

    if(!navLinks.classList.contains('active')){
        navBtnArrow[0].classList.remove('active');
    }
    navBtn.parentElement.classList.remove('active');
})

navBtn.addEventListener('mouseover', () => {
    navLinks.classList.add('active');
    navBtn.parentElement.classList.add('active');
    arrowAnimation();
});

const arrowAnimation = () => {
    if(navLinks.classList.contains('active')){
        navBtnArrow[0].classList.add('active');
    }else{
        navBtnArrow[0].classList.remove('active');
    };
};