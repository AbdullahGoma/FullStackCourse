//let num = 2;
//=** exponential
//console.log(num**=5);

for(let i = 1;i < 100;i++){
  let output = "";
  if(i % 3 == 0) (output += "fizz");
  if(i % 5 == 0) (output += "buzz");
  console.log(output || i);
  // if(output){
  //   console.log(output);
  // }else {
  //   console.log(i);
  // }
}