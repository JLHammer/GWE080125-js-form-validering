const validateBtn = document.getElementById("validate"); //Get the form button

// Add event listener to the button
validateBtn.addEventListener("click", (event) => {
  const form = event.target.form; //Get the form element
  let formIsValid = true; //Check to see if the form is valid

  // Check if the fullname field is empty
  if (!form.fullname.value) {
    console.log("fullname field is currently empty");
    const div = form.fullname.parentElement; // Get the parent element of the fullname input field
    div.classList.add("error"); // Then add the error class to it
    console.log("Added error class to parent element");
    let errorSpan = document.createElement("span"); // Create a span element for the error message
    console.log("Created span element");
    errorSpan.classList.add("error-message"); // Add the error-message class to it
    console.log("Added error-message class to span element");
    errorSpan.innerText = "Du skal udfylde feltet"; // Add the error message text to it
    console.log("Added error text to span element");

    div.appendChild(errorSpan); // Append the span element to the parent element

    formIsValid = false; // Set formIsValid to false since the form is not valid

    fullnameInput = form.fullname; // Get the fullname input field

    // Add event listener to the fullname input field
    fullnameInput.addEventListener("input", () => {
      // If there is a next sibling element (the error message), remove it
      if (fullnameInput.nextElementSibling) {
        fullnameInput.nextElementSibling.remove();
      }

      fullnameInput.parentElement.classList.remove("error"); // Remove the error class from the parent element when the user starts typing
      console.log("Removed error class from parent element");

      if (!form.fullname.value) {
        console.log("fullname field is currently empty");
        formIsValid = false; // Set formIsValid to false since the form is not valid
      } else {
        console.log("fullname field has a value");
        formIsValid = true; // Set formIsValid to true since the form is now valid
      }
    });
  } else {
    console.log("Form is valid");
  }
});
