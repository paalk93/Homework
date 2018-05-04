

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
else if(username == "admin.hei123" && password == "admin.lol456"){
  alert("Welcome "+ username);
    window.location ="admin.html"
}
 else{
   alert("Wrong login")
 }
}
// LOGIN FUNCTION END





// TABS START
function tab2(){
  document.getElementById("table2").style.display = "block";
  document.getElementById("table1").style.display ="none";
  document.getElementsByClassName("button-style")[1].style.background = "white";
  document.getElementsByClassName("button-style")[0].style.background = "#4995b7";
}
function tab1(){
  document.getElementById("table1").style.display ="block";
  document.getElementById("table2").style.display = "none";
  document.getElementsByClassName("button-style")[0].style.background = "white";
  document.getElementsByClassName("button-style")[1].style.background = "#4995b7";
}

// TABS END


// COLOR CHANGE START
// COLOR CHANGE END
