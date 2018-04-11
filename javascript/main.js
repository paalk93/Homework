

window.addEventListener("click",outsideClick)
//MODAL LOGIN START
function openLogin(){
  var loginContainer = document.getElementById("loginBox");
  loginContainer.style.display = "block";
}

function closeLogin(){
  var loginContainer = document.getElementById("loginBox");
  loginContainer.style.display ="none";
}
//MODAL LOGIN END
//OUTSIDE CLICK START
function outsideClick(e){
  var loginContainer = document.getElementById("loginBox");
  var contactContainer = document.getElementById("contactBox")
  if(e.target == loginContainer){
  loginContainer.style.display="none";
     }
     else if(e.target == contactContainer){
       contactContainer.style.display="none"
     }
}
//OUTSIDE CLICK END

// MODAL CONCATCT US START
function openContact(){
  var contactContainer = document.getElementById("contactBox")
  contactContainer.style.display="block";
}

function closeContact(){
    var contactContainer = document.getElementById("contactBox")
  contactContainer.style.display = "none";
}

// MODAL CONCACT US END

// LOGIN FUNCTION START
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "hei123" && password == "lol456"){
alert ("Welcome "+ username);
  window.location = "user.html";
}
 else{
   alert("Wrong login")
 }
}
// LOGIN FUNCTION END


// COLOR CHANGE START
// COLOR CHANGE END
