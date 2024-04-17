const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function decimalToBinary(input) {
  // Check if input is 0 or 1, which are the base cases
  if (input === 0 || input === 1) {
    return String(input); // Convert input to a string and return it
  } else {
    // Recursive call to decimalToBinary, halving the input
    // and concatenating the remainder of input divided by 2 to the result
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
      alert("Please provide a decimal number");
      return;
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
};
  
  convertBtn.addEventListener("click", checkUserInput);

  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
  });