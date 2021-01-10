'use strict';

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = () => {
    const nav = document.querySelector('.fixed-top');
    const textGrey = document.querySelectorAll('.no-hover');
    if ( window.scrollY < 1 ) {
        nav.className = 'navbar fixed-top navbar-expand-md navbar-light bg-transparent';
        
        textGrey.forEach(element => {
            element.className = 'no-hover';
        });
    } else {
        nav.className = 'navbar fixed-top navbar-expand-md navbar-light bg-white';        
        
        textGrey.forEach(element => {
            element.className = 'no-hover text-black-50';
        });
    }
};