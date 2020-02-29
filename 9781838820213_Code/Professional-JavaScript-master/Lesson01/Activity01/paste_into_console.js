let csv = 'name,price,unit\n';
let elements = Array.from(document.getElementsByClassName('item'));
elements.forEach((el) => {
  // there's only one element in 'el.getElementsByTagName('span')' but the [0] is necessary due to the data type that 'getElementsByTagName' returns
  let priceAndUnitElement = el.getElementsByTagName('span')[0];
  //derive 'price' and 'unit' by separating the text at the '/'
  let priceAndUnit = priceAndUnitElement.textContent.split("/");

  let price = priceAndUnit[0].trim();
  let unit = priceAndUnit[1].trim();

  let name = el.getElementsByTagName('a')[0].textContent;

  csv += `${name},${price},${unit}\n`;
});
console.log(csv);
