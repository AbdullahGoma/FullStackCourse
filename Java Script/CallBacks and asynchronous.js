//callbacks
//asynchronous programming : when somthing take time to connect with database we would'nt the code stop to the whole time waiting but we will do the code running when we connect with database.

//callback is a function
// function connect(callback) {
//   console.log("Connecting...");
//   console.log("....");
//   callback("Finished connecting.");
// }

// connect(console.log);



// function connect(callback) {
//   console.log("Connecting...");
//   console.log("....");
//   callback("Finished connecting.");
// }

// connect(function(value){
//   //console.log(".... ...");
//   console.log(value);
// });



function cookfood() {
  console.log("Just started cooking food.");
  setTimeout(function(){
    console.log("Time to eat. :)");
    eat();//run functions first
  }, 2000);//2000 ms
}

function eat() {
  clearTimeout(readingId);
  setTimeout(function(){
    console.log("Done eating.");
    read();
  }, 3000);
}

function read() {
  let timerId = setInterval(function(){
    console.log("Reading...");
  },500);
  return timerId;
}

let readingId = read();
cookfood();
