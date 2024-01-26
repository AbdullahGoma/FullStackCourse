
var localStorage = ('localStorage' in window);
let userForm = document.forms.user;


function updateUser(event) {
  event.preventDefault();
  console.log("Update User");
  saveData("name", userForm.name.value);
  saveData("favColor", userForm.color.value);
  refresh();
}

function saveData(key, value) {
  if(localStorage) {
    localStorage.setItem(key, value);
  } else {
    alert("Web Storage is not supported.")
  }
}

function loadData(key) {
  if(localStorage) {
      if (key in localStorage) {
        return localStorage.getItem(key);
      }
  } else {
    alert("Web Storage is not supported.")
  }
}


function refresh() {
  if (loadData("name")) {
    let name = loadData("name");
    let color = loadData("favColor");


    userForm.name.setAttribute("value", name);
    userForm.color.setAttribute("value", color);

    document.getElementById("welcome").style.display = "block";
    document.getElementById("user-name").innerHTML = name;
    document.getElementById("delete-button").style.display = "inline";
    document.body.style.backgroundColor = color;
  }
}

function deleteData(key) {
  if(localStorage) {
      localStorage.removeItem(key);
  } else {
    alert("Web Storage is not supported.")
  }
}

function deleteAll() {
  // deleteData("name");
  // deleteData("favColor");
  localStorage.clear();
  location.reload();
}
