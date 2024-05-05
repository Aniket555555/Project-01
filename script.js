const toggleMenu=document.querySelector('.toggle');
const navigation=document.querySelector('.navigation')
toggleMenu.onclick=function(){
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

/* js for images in section */
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let plant = document.getElementById('plant');
let tree = document.getElementById('tree');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    /* leaf.style.top = value * -1.5 + 'px'; */
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    /* hill1.style.top = value * 1 + 'px';
    hill2.style.top = value * 1 + 'px';
    hill3.style.top = value * 1 + 'px';
    hill4.style.top = value * 1 + 'px';
    hill5.style.top = value * 1 + 'px';
    plant.style.top = value * 1 + 'px';
    tree.style.top = value * 1 + 'px';
    text.style.top = value * 1 + 'px'; */

    header.style.top = value *0.5 + 'px';
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

/* js for div .sec */
Splitting();

setTimeout(() => {
  document.querySelector(".card").focus();
},1500);
