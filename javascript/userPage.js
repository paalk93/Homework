// USER PAGE LIST START
(function showUserList(){
  var listContainer = document.getElementById("myUserList");
  listContainer.innerHTML = "";

for (var i = 0; i < users.length; i++){
  var listItem = users[i]
  if(listItem.id==1){


  var ul = document.createElement("ul");
  var id = document.createElement("li");
  var fName = document.createElement("li");
  var lName = document.createElement("li");
  var address = document.createElement("li");
  var number = document.createElement("li");

  ul.appendChild(id);
  ul.appendChild(fName);
  ul.appendChild(lName);
  ul.appendChild(address);
  ul.appendChild(number);

  id.innerText = "Kunde Nr: " + listItem.id;
  fName.innerText = "First name: " + listItem.fName;
  lName.innerText = "Last name: " + listItem.lName ;
  address.innerText = "Address: " + listItem.address;
  number.innerText = "Phone: " + listItem.number;
  listContainer.appendChild(ul);

    }
  }
}());
// USER PAGE LIST END
