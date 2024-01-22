var h1 = document.querySelector('h1');
var age = prompt("Son kiriting :");

if(age == 18){
    h1.textContent = "Yoshiz 18 da"
}else if(age > 18){
    h1.textContent = "Yoshiz 18 dan katta"
}else if(age < 18){
    h1.textContent = "Yoshingiz 18 dan kichik"
}else{
    h1.textContent = "Tog'ri yoz"
}

