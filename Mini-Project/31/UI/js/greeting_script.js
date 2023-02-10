/*
Author : Manbendra Satpathy
Created On : 06 October 2022
Updated On : 07 January 2023
Description : JavaScript for the Greetings on every HomePage
*/
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
   greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 16)
   greet = 'Good Afternoon';
else if (hrs >= 16 && hrs <= 24)
   greet = 'Good Evening';

document.getElementById('greetings').innerHTML = '<b>' + greet + '</b>';