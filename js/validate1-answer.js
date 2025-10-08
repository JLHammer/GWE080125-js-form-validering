document.getElementById("validate").addEventListener("click", (event) => {
  const form = event.target.form;
  let formIsValid = true;

  if (!form.fullname.value) {
    form.fullname.parentElement.classList.add("error");
    if (!form.fullname.nextElementSibling) {
      const errorMsg = document.createElement("span");
      errorMsg.classList.add("error-message");
      errorMsg.innerText = "Du skal udfylde feltet";
      form.fullname.parentElement.append(errorMsg);
    }

    formIsValid = false;
  }

  form.fullname.addEventListener("input", () => {
    if (form.fullname.nextElementSibling) {
      form.fullname.nextElementSibling.remove();
    }
    form.fullname.parentElement.classList.remove("error");
    formIsValid = true;
  });

  if (formIsValid) {
    console.log("Alt er godt og formularen kan sendes");
  }
});
