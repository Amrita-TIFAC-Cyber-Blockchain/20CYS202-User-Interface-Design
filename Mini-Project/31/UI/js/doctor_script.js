/*
Author : Manbendra Satpathy
Created On : 06 October 2022
Updated On : 07 January 2023
Description : JavaScript for the Doctor Login and SignUp Page
*/
const container = document.querySelector(".container"),
   pwShowHide = document.querySelectorAll(".showHidePw"),
   pwFields = document.querySelectorAll(".password"),
   signUp = document.querySelector(".signup-link"),
   login = document.querySelector(".login-link");
pwShowHide.forEach(eyeIcon => {
   eyeIcon.addEventListener("click", () => {
      pwFields.forEach(pwField => {
         if (pwField.type === "password") {
            pwField.type = "text";

            pwShowHide.forEach(icon => {
               icon.classList.replace("uil-eye-slash", "uil-eye");
            })
         } else {
            pwField.type = "password";

            pwShowHide.forEach(icon => {
               icon.classList.replace("uil-eye", "uil-eye-slash");
            })
         }
      })
   })
})
signUp.addEventListener("click", () => {
   container.classList.add("active");
});
login.addEventListener("click", () => {
   container.classList.remove("active");
});