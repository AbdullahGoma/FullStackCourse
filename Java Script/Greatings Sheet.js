function greatings(name , Name){
  let Great = "Hello, " + name + Name;
  console.log(Great);
  //Add Element in last
  Elements.push(Great);
  
}

let Elements = [];

greatings("Abdullah" , " ,How are You?");
greatings("Ali" , ",How are You?");
console.log(Elements);