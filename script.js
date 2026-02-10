const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// function that returns a Promise-based delay
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function to handle button click
async function handleSubmit() {
  const message = textInput.value;
  const delay = Number(delayInput.value);

  outputDiv.textContent ="";

  // wait for the specified delay
  await wait(delay);

  // display message after delay
  outputDiv.textContent = message;
}

btn.addEventListener("click", handleSubmit);
