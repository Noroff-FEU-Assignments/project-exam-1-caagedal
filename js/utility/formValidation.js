const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener("load", ()=>{
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className=isValid ? "valid" : "invalid";
});

email.addEventListener("input", ()=>{
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if(isValid){
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    } else{
        email.className = "invalid";
    }
});

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (!isValid) {
        email.className = "invalid";
        error.textContent = "I expect an email, darling!";
        error.className = "error active";
      } else {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
      }
});

