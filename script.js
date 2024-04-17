const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
// Define animation data for visualizing call stack or other animations
const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000
  }
];

const decimalToBinary = (input) => {
  // Check if input is 0 or 1, which are the base cases
  if (input === 0 || input === 1) {
    return String(input); // Convert input to a string and return it
  } else {
    // Recursive call to decimalToBinary, halving the input
    // and concatenating the remainder of input divided by 2 to the result
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// Function to display animation based on predefined data
const showAnimation = () => {
  // Set initial text to indicate what is being shown
  result.innerText = "Call Stack Animation";

  // Process each object in the animation data array
  animationData.forEach((obj) => {
    // Delay the display of each element based on specified delay
    setTimeout(() => {
      // Add paragraph elements with specified styles and contents dynamically
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);
  });
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (!numberInput.value || isNaN(inputInt)) {
    alert("Please provide a decimal number");
    return;
  }
  if (inputInt === 5) {
    showAnimation();
    return;
  }
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
};
  
  convertBtn.addEventListener("click", checkUserInput);

  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
  });