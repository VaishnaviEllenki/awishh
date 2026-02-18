const correctPassword = "imnaniii"; // change if needed

function verify() {
  const entered = document.getElementById("password").value;

  if (entered === correctPassword) {
    document.getElementById("loader").style.display = "flex";
    setTimeout(() => {
      window.location.href = "firstpage.html";
    }, 2000);
  } else {
    document.getElementById("error").innerText = "Wrong password";
  }
}

function togglePassword() {
  const field = document.getElementById("password");
  field.type = field.type === "password" ? "text" : "password";
}



