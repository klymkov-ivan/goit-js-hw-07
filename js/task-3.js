const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value !== "") {
    nameOutput.textContent = nameInput.value.trim();
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
