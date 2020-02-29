//csv-compile.js

//  csvData holder for full string
const keys = "name, price, unit\n";
//load the first line of the CSV file with the fields/columns of the data
let csvData = `${keys}`;

//find all elements that represent a product
const products = document.getElementsByTagName("section")[0].getElementsByClassName("items")[0].getElementsByClassName("item");

// check that the products are there
console.log(products);

for(let i = 0; i< products.length; i++){

  let name = products[i].getElementsByClassName("header")[0].textContent;
  let priceAndUnit = products[i].getElementsByClassName("unitPrice")[0].textContent;
  priceAndUnit = priceAndUnit.split("/");
  csvData += `${name}, ${priceAndUnit[0]}, ${priceAndUnit[1]} \n`
}

console.log(csvData);

//GET NODE TYPE (get node type)
console.log(products[0].getElementsByClassName("description")[0].ELEMENT_NODE);
// 1

//iterate:
//  find: price, productName
//add to csvData & separate with 'commas'




