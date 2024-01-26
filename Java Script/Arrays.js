let Elements = ["Abdullah" , "Ali" , "Mohammed"];
console.log(Elements);
console.log(Elements[0]);
console.log(Elements.length);
console.log(Elements[Elements.length - 1]);
//delete last element
Elements.pop();
//delete first element
Elements.shift();
//Add Element in last
Elements.push("Mohammed");
//Add in first
Elements.unshift("Abdullah");
console.log(Elements);

let Arrayin = ["Abdullah" , "Ali" , [0 , 1 , [2,3,4]]];
console.log(Arrayin[2]); //[0 , 1 , [2,3,4]]
console.log(Arrayin[2][2]); //[2,3,4]
console.log(Arrayin[2][2][2]); //4