/* email validation */

let myButton = document.getElementById('button');
document.getElementById('email').focus();

function checkBlankEmail() {
  let email = document.getElementById('email').value;
  if(email != "") {
    return true;
  } else { return false;
    }
}

function checkValidEmail () {
  let email = document.getElementById('email').value;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

myButton.onclick = function() {
  let email = document.getElementById('email').value;
  if(checkBlankEmail()==false ) {
    alert("O campo referente ao e-mail deve ser preenchido");
  } else {
      if(checkValidEmail()==false) {
        alert("E-mail inválido")
      } else { 
          alert("O e-mail " + email + " foi enviado");
          let user = document.querySelector(".usuario");
          user.innerHTML = "Bem vindo " + email + "!";
        }
    }
}