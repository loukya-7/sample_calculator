// Get all the number buttons
const numberButtons = document.querySelectorAll('.numbers button'); 

// Get the operators
const operators = document.querySelectorAll('.operators button');

// Get the equal button
const equalButton = document.querySelector('.equalto');

// Get the clear button 
const clearButton = document.getElementById('clear');
// Get the display element
const display = document.getElementById('sum-el');

// Variables to store the values
let firstOperand = '';
let operator = '';
let secondOperand = '';

// Add click event to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Append the clicked number to the operand
    if(!operator) {
      firstOperand += button.textContent;
    } else {
      secondOperand += button.textContent;
    }
    
    // Update display
    display.textContent = `${firstOperand} ${operator} ${secondOperand}`;
  });
});

// Add click event to operators
operators.forEach(button => {
  button.addEventListener('click', () => {
    // Store the operator
    operator = button.textContent;
    
    // Update display
    display.textContent = `${firstOperand} ${operator} ${secondOperand}`;
  });
});

// On click of equal button
equalButton.addEventListener('click', () => {
  // Convert string operands to numbers
  firstOperand = Number(firstOperand); 
  secondOperand = Number(secondOperand);
  
  // Perform operation
  let result;
  if(operator === '+') {
    result = firstOperand + secondOperand;
  } else if(operator === '-') {
    result = firstOperand - secondOperand; 
  } else if(operator === '×') {
    result = firstOperand * secondOperand;
  } else if(operator === '÷') {
    result = firstOperand / secondOperand;
  }
 // Display result
 display.textContent = result;
  
 // Clear operands and operator
 firstOperand = '';
 secondOperand = '';
 operator = '';
 

});
clearButton.addEventListener("click", function() {
    // Clear display and reset variables
    display.textContent = "0";
    firstOperand = '';
    secondOperand = '';
    operator = '';
});
