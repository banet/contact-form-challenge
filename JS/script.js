// console.log("JS fajl se učitao! ✅");

// const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Forma je učitana!");
// });

document.addEventListener("DOMContentLoaded", function () {
  console.log("JS fajl se učitao! ✅");

  const form = document.querySelector("form");
  console.log("Forma:", form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Forma je uspešno poslata!");
  });
});