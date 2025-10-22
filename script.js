
// Select the display input
let display = document.querySelector('.screen input');

// Select all buttons
let buttons = document.querySelectorAll('.button');

// Initialize empty string for input
let currentInput = "";

// Loop through each button and add click event
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        // Clear screen
        if (value === 'C') {
            currentInput = "";
            display.value = "";
        }
        // Backspace
        else if (value === '←' || value === '<-') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        }
        // Calculate result
        else if (value === '=') {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        }
        // Otherwise append the button value
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

