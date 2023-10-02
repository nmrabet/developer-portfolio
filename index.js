const emailInput = document.getElementById("femail");
const alert = document.getElementById("alert");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  e.preventDefault();
  const email = emailInput.value.toLowerCase();
  if (validateEmail(email)) {
    alert.innerHTML = "Congrats, your email has been sent";
  } else {
    alert.innerHTML = "Sorry, invalid format here";
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
