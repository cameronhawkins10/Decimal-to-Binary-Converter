const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function decimalToBinary(input) {
  // Arrays to store the inputs, quotients, and remainders
  const inputs = [];
  const quotients = [];
  const remainders = [];

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

  // Log the inputs array to the console to check the work
  console.log("Inputs:", inputs);
  
  // Additional logic to return or process the result will be added here later
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