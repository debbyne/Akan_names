function akanName(){
    var a = new Date (document.getElementById("date").value)
    var b = a.getDay();
    var c = document.getElementById("gender").value;
    if(c=== male){
        if(b===0){
            alert("Kwasi");
        }
        else if(b===1){
            alert("Kwadwo");
        } 
        else if(b===2){
            alert("Kwabena");
        }
        else if(b===3){
            alert("Kwaku");
        }
        else  if(b===4){
            alert("Yaw");
        }
        else if(b===5){
            alert("Kofi");
        }
        else if(b===6){
            alert("Kwame");
        }
    }
   if(c=== female){
        if(b===0){
            alert("Akosua");
        }
        else if(b===1){
            alert("Adwoa");
        }
        else if(b===2){
            alert("Abenaa");
        }
        else if(b===3){
            alert("Akua");
        }
        else if(b===4){
            alert("Yaa");
        }
        else if(b===5){
            alert("Afua");
        }
        else if(b===6){
            alert("Ama");
        }
    }
}