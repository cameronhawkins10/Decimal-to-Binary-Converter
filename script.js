const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function decimalToBinary(input) {
  // Arrays to store the inputs, quotients, and remainders
  const inputs = [];
  const quotients = [];
  const remainders = [];

  // Check if the input is 0
  if (input === 0) {
    result.innerText = "0"; // Set the output to "0"
    return; // Exit the function early
  }

  // While loop that runs as long as input is greater than 0
  while (input > 0) {
      
      // Calculate the quotient of input divided by 2 and round it down
      const quotient = Math.floor(input / 2);

      // Calculate the remainder of input divided by 2
      const remainder = input % 2;

      // Append current input to the inputs array
      inputs.push(input);

      // Append quotient to the quotients array
      quotients.push(quotient);

      // Append remainder to the remainders array
      remainders.push(remainder);

      // Assign quotient to input for the next iteration
      input = quotient;
  }

  // Log the arrays to the console to check the work
  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
  
  // Create the binary number string and set to the result element's innerText
  result.innerText = remainders.reverse().join("");
}


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