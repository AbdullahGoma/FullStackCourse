
let x = "Aloo";

//truthy
if(x){
  console.log("truthy");
}else{
  console.log("falsey");
}

x = " ";
//truthy
if(x){
  console.log("truthy");
}else{
  console.log("falsey");
}

let y;
console.log(typeof y);
//falsey
x = "";
if(x){
  console.log("truthy");
}else{
  console.log("falsey");
}

//falsey
if(undefined){
  console.log("truthy");
}else{
  console.log("falsey");
}

if(!!!!!x){
  console.log("Do Somthing.");
}

if(!""){
  console.log("Do Somthing Again.");
}