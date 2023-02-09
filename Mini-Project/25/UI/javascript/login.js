

function auth() {

    const username = login.un.value;
    const password = login.pwd.value;

 


     if (username === "admin" && password ==="admin@123") {           
      window.open('html/dash.html');
    }

    else if (username === "student" && password ==="welcome") {
      window.open("html/student.html");
      return false;
    }

    else if(password.length<6){  
  alert("Password must be at least 6 characters long."); 
  return false; 
  }

   


    else {
      alert("Enter correct credentials");
      return true;
    }
  
  }



