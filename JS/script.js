// console.log("JS fajl se učitao! ✅");

// const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Forma je učitana!");
// });

document.addEventListener("DOMContentLoaded", function () {
  console.log("JS fajl se učitao! ✅");

  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Forma je poslata");
    validateForm(form);
  }

  function validateForm(form) {
    console.log("Provera vam formu");

    const requiredFields = form.querySelectorAll("input[required], textarea[required]");
    
    requiredFields.forEach(field => {
      // ukloni stari error ako postoji
      const existingError = field.parentElement.querySelector(".error-message");
      if (existingError) existingError.remove();

      // ako polje nema vrednost
      if (!field.value.trim()) {
        showErrorMessage(field, "This field is required");
        field.style.borderBottom = "2px solid #d93025";
      } else {
        field.style.borderBottom = "1px solid #ccc";
      }
    });
  }

  function showErrorMessage(field, message) {
    const error = document.createElement("span");
    error.classList.add("error-message");
    error.textContent = message;
    error.style.color = "#d93025";
    error.style.fontSize = "0.9rem";
    error.style.display = "block";
    error.style.marginTop = "4px";

    field.parentElement.appendChild(error);
  }
});