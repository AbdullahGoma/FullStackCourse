//This is called hoisting.

function doLogging() {
  console.log("This.");
  console.log("Then log this.");
  console.log("Then finish by logging this.");
}

function someReturn() {
  return 0;
}

function sayHello(){
  console.log("Hello, " + name + "\n");
}

function sayHelloo(Name){
  console.log("Helloo, " + Name + "\n");
}

function sayHellooo(Great,Name){
  console.log(Great + Name + "\n");
} 

function add(num1,num2){
  console.log("\n");
  return num1 + num2;
}

function sum(){
  console.log(add(10,12) + "\n");
}

function countDown(Num){
  if(Num > 0){
    console.log(Num);
    return countDown(Num - 1);
  }
}

let name = "Abdullah";

sayHello();
sayHelloo("Abdullah");
sayHellooo("Hellooo, ","Abdullah");

var summition = 10 + add(10,10);
console.log(summition + "\n");
sum();

countDown(10);
console.log("\n"); 

if(name){
  doLogging();
}

console.log("\n");

if(name && true){
  doLogging();
}

console.log("\n");

if(!someReturn() || false){
  doLogging();
}