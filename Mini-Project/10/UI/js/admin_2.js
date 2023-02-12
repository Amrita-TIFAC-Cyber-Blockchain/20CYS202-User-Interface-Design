function select() {

    let a= document.getElementById("year").value;
    let b= document.getElementById("course").value;
    let c= document.getElementById("branch").value;
    let d= document.getElementById("sem").value;
    let e= document.getElementById("section").value;


    let x = document.getElementById("class1");
    let y = document.getElementById("class2");


   
    if ( a==="2" && b==="btech" && c==="cys") {
        x.style.display = "block";
        y.style.display = "none";
    }

    else if (a==="1" && b==="btech" && c==="cys") {
        y.style.display = "block";
    }
    

    else {
        alert("Enter Correct Details.");
    }

    /*switch(a) {
        case '2':
            if (x.style.display == "none" && b==="btech" && c==="cys" && d=== "3" && e==="a") {
                x.style.display = "block";
                y.style.display = "none";
            } 
            
           
            else {
                x.style.display = "none";
            }   
          break;

        case '1':
            if (x.style.display == "none" && y.style.display=="none" && b==="btech" && c==="cys" && d=== "1" && e==="a") {
                
                y.style.display = "block";


            } 

            else {
                y.style.display = "block" ;
            }
          break;
        default:
          alert("Enter Correct Details");
      }*/
}

function addClass1() {
    var x = document.getElementById("class1");
    x.style.display = "none";
}