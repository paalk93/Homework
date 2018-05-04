// PRODUCT PAGE TABLE START
(function showProductTable(){
  var productContainer = document.getElementById("myProductTable");
  productContainer.innerHTML = "";

  for (var i = 0; i < products.length; i++){
    var productItem = products[i];

    var row = document.createElement("tr");
    var productId = document.createElement("td");
    var productName = document.createElement("td");
    var productPrice = document.createElement("td");
    var productQuantity = document.createElement("td");
    var productButtons = document.createElement("td");
    var productBuyButton = document.createElement("button");

    row.appendChild(productId);
    row.appendChild(productName);
    row.appendChild(productPrice);
    row.appendChild(productQuantity);
    row.appendChild(productButtons);
    productButtons.appendChild(productBuyButton);

    productId.innerText = productItem.id;
    productName.innerText = productItem.name;
    productPrice.innerText = productItem.price;
    productQuantity.innerText = productItem.quantity;
    productBuyButton.innerText = "Buy";
    productContainer.appendChild(row);

  }
}())
// PRODUCT PAGE TABLE END
