let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});

// Calculate the total height up to the sec section
const sectionSec = document.querySelector('.sec');
const totalHeightUpToSec = sectionSec.offsetTop + sectionSec.offsetHeight;

// Set the body height to the calculated total height
document.body.style.height = totalHeightUpToSec + 'px';

// Prevent scrolling beyond the sec section
window.addEventListener('scroll', () => {
    if (window.scrollY > totalHeightUpToSec - window.innerHeight) {
        // Scroll to the bottom of the sec section if the user tries to scroll further
        window.scrollTo(0, totalHeightUpToSec - window.innerHeight);
    }
});

//login/register 
const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.login-b');
const iconClose=document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

/* js for div .sec */
Splitting();

setTimeout(() => {
  document.querySelector(".card").focus();
},1500);