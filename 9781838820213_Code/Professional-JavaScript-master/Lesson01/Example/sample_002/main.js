var elementList = document.getElementsByClassName("item");
console.log(elementList);
console.log(elementList[0]);

let priceList = new Array();
for(let i = 0; i< elementList.length; i++){
  priceList.push(elementList[i].getElementsByClassName("unitPrice")[0].textContent);
}

for(let i = 0; i< elementList.length; i++){
  console.log(priceList[i]);
}










