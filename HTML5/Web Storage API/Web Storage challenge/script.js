

var localStorage = ('localStorage' in window);


function saveData(key, value) {
  if(localStorage) {
    localStorage.setItem(key, value);
  } else {
    console.log("Web storage not supported.");
  }
}


function loadData(key) {
  if(localStorage) {
    if(key in localStorage) {
      return localStorage.getItem(key);
    }
  } else {
    console.log("Web storage not supported.");
  }
}


function setBackground() {
  let file = document.getElementById("url").value;

  saveData("imageURL", file);
  document.body.style.backgroundImage = "url(" + file + ")";
}


function setOverlayColor() {
  let color = document.getElementById("bg-color").value;

  let RGBify = hexToRgb(color);

  let opacity = document.getElementById("opacity").value;

  let fullColor = `rgba(${RGBify.r}, ${RGBify.g}, ${RGBify.b}, ${opacity})`;

  saveData("bg-color", color);
  saveData("opacity", opacity);

  document.getElementById("section").style.backgroundColor = fullColor;
}


function setTextColor() {
  let color = document.getElementById("text-color").value;
  saveData("text-color", color);
  document.body.style.color = color;
}


function onLoad() {
  // deleteAll();
  loadData("imageURL") && (document.getElementById("url").value = loadData("imageURL"));
  loadData("bg-color") && (document.getElementById("bg-color").value = loadData("bg-color"));
  loadData("opacity") && (document.getElementById("opacity").value = loadData("opacity"));
  loadData("text-color") && (document.getElementById("text-color").value = loadData("text-color"));

  setBackground();
  setOverlayColor();
  setTextColor();
}


function deleteAll() {
  localStorage.clear();
}



function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}
