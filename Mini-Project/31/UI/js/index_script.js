/*
Author : Manbendra Satpathy
Created On : 06 October 2022
Updated On : 07 January 2023
Description : JavaScript for the Home Page
*/
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}