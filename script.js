let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
function validate() {
  let genders = document.getElementsByName("gender");
else if(genders[female].checked==false && genders[male].checked==false ) {
    alert("You must select male or female");
    return false;
} 
}  