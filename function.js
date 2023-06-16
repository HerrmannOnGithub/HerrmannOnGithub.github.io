let moon = document.getElementById('Wall_Group1');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    Wall_Group1.style.top = value * 0.3 + 'px';
    stars.style.left = value * 0.2 + 'px';
    mountains_behind.style.top = value * 0.2 + 'px';
    text.style.marginBottom = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
    header.style.marginLeft = value * 0.07 + 'px';
})