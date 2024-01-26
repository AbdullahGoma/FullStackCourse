let names = ["Abdullah","Ali","Mohammed"];
let tallBuilds = {
  "BurjKhalifa": "828",
  "One World trade center": "541",
  "Shanghi tower": "632"
}

//of to arrays
for(name of names){
  console.log(name);
}

//in to objects
for(building in tallBuilds){
  console.log(tallBuilds[building]);
}