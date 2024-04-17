const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function decimalToBinary(input) {
  // Create a variable to store the binary string
  let binary = "";

  // Check if the input is 0
  if (input === 0) {
    binary = "0";
  }

  // While loop that runs as long as input is greater than 0
  while (input > 0) {
    // Calculate the remainder of input divided by 2 and prepend it to the binary string
    binary = (input % 2) + binary;
    // Calculate the quotient of input divided by 2 and round it down
    input = Math.floor(input / 2);
  }

  // Set the binary string to the result element's innerText
  result.innerText = binary;

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