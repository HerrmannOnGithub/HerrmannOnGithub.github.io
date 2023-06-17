let wall_group1 = document.getElementById('wall_group1');
let dots = document.getElementById('dots');
let wall_group2 = document.getElementById('wall_group2');
let wall_moon = document.getElementById('wall_moon')
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    wall_group1.style.left = value * 0.3 + 'px';
    wall_group1.style.marginBottom = value + 'px';
    dots.style.top = value * 0.2 + 'px';
    dots.style.left = value * 0.1 + 'px';
    header.style.top = value * 0.5 + 'px';
    wall_moon.style.left = value * 0.1 + 'px';
})