const company = {
  name : "Apple",
  founded : 1997,
  founders : ["jobs","wozniak","wayne"],
  products : ["iphone","macintosh"],
  ceo : "tim cook",
  createnewproduct: function (productName) {
    this.products.push(productName);
    console.log("create new product.");
    return this.products;
  }
}

console.log(company.name);
console.log(company.founded);
console.log(company.founders);
console.log(company.products);
company.createnewproduct("Laptop");
console.log(company.products);
// another way to access objects
console.log(company["name"]);
console.log(company["founded"]);
console.log(company["founders"]);
console.log(company["products"]);
let name = "ceo";
console.log(company[name]);







