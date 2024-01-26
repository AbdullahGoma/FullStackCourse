
let form = document.forms.register;

function validateForm() {
  form.username.setCustomValidity("");
  form.pass.setCustomValidity("");
  form.con_pass.setCustomValidity("");

  if(form.username.value.length < 6) {
    form.username.setCustomValidity("Your username must at least 6 characters.");
  }

  if(form.pass.value.length < 8 && form.con_pass.value.length < 8) {
    form.pass.setCustomValidity("Your password must be at least 8 characters.");
  }

  if(form.pass.value != form.con_pass.value) {
    form.con_pass.setCustomValidity("Your password does not match.");
  }
}


form.addEventListener("input", validateForm);
