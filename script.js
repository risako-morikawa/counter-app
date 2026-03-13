let count = 0;

const button = document.getElementById("btn");
const display = document.getElementById("count");

button.addEventListener("click", () => {
  count = count + 1;
  display.textContent = count;
});

