function matchpass(){  
var firstpassword=document.f1.password.value;  
var secondpassword=document.f1.password2.value;  
  
if(firstpassword==secondpassword){ 
alert("password is updated");
window.open("../index.html") 
return true;  
}  
else{  
alert("password must be same!");  
return false;  
}  
}  