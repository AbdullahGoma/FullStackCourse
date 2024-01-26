const company = {
  name : "Apple",
  founded : 1997,
  founders : ["jobs","wozniak","wayne"],
  products : [{
    name:"iphone",
    year:2007
  },{
    name:"mac",
    year:2008
  }],
  ceo : "tim cook",
  createnewproduct: function (product) {
    this.products.push(product);
    return this.products;
  },
  fireceo: function() {
    console.log("Fire ceo");
    this.ceo = null;
    return this.ceo;
  },
  hireceo: function(ceo) {
    this.ceo = ceo;
    console.log("Hiring ceo : ");
    return this.ceo;
  }
}

company.createnewproduct({name:"ihome",year:2008});
console.log(company.products);
company.fireceo();
company.hireceo("Abdullah");
console.log(company.ceo);

