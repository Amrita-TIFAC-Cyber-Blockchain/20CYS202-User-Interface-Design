function auth() {

    const username = login.id.value;
    const password = login.pass.value;

    if (username === "admin" && password ==="root") {
      alert("You have successfully logged in.");           
      window.open('html/admin.html');
    }

    else if (username === "pavan" && password ==="cys080") {
      alert("You have successfully logged in."); 
      window.open("html/studash - Pavan.html");
      return false;
    }

    else if (username === "rohith" && password ==="cys013") {
      alert("You have successfully logged in."); 
      window.open("html/studash - Rohith.html");
      return false;
    }

    else if (username === "sudipt" && password ==="cys075") {
      alert("You have successfully logged in."); 
      window.open("html/studash - Sudipt.html");
      return false;
    }

    else if (username === "ramaguru" && password ==="123abc") {
      alert("You have successfully logged in."); 
      window.open("html/facdash - Ramaguru.html");
      return false;
    }

    else if (username === "sethumadhavan" && password ==="123456789") {
      alert("You have successfully logged in."); 
      window.open("html/hod.html");
      return false;
    }

    else {
      alert("Enter correct credentials");
      return true;
    }
  
  }
