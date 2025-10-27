
// // Select the display input
// let display = document.querySelector('.screen input');

// // Select all buttons
// let buttons = document.querySelectorAll('.button');

// // Initialize empty string for input
// let currentInput = "";

// // Loop through each button and add click event
// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         let value = e.target.innerText;

//         // Clear screen
//         if (value === 'C') {
//             currentInput = "";
//             display.value = "";
//         }
//         // Backspace
//         else if (value === '←' || value === '<-') {
//             currentInput = currentInput.slice(0, -1);
//             display.value = currentInput;
//         }
//         // Calculate result
//         else if (value === '=') {
//             try {
//                 currentInput = eval(currentInput);
//                 display.value = currentInput;
//             } catch {
//                 display.value = "Error";
//                 currentInput = "";
//             }
//         }
//         // Otherwise append the button value
//         else {
//             currentInput += value;
//             display.value = currentInput;
//         }
//     });
// });



let display_value = 0;
let first_value = null;
let operator_value = null;

const buttons = document.querySelectorAll('.button');


const display = document.getElementById('display');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {

        const value = button.textContent;

        if (value === 'C') {
            display.value = "";
            display_value = 0;
            first_value = null;
            operator_value = null;

        }
        else if (value === "←") {
            display.value = display.value.slice(0, -1);

        }
        else if (value === "+" || value === "-" || value === "*" || value === "/" || value === "%") {
            first_value = Number(display.value);
            operator_value = value;
            display.value += value;

        }

        else if (value === "=") {
            if (first_value !== null && operator_value !== null) {


                let parts = display.value.split(operator_value);
                let second_value = Number(parts[1]);

                let result = 0;

                if (operator_value === "+") {
                    result = first_value + second_value;
                }
                else if (operator_value === "-") {
                    result = first_value - second_value;
                }
                else if (operator_value === "*") {
                    result = first_value * second_value;
                }
                else if (operator_value === "/") {
                    result = second_value === 0 ? "Error" : first_value / second_value;
                }
                else if (operator_value === "%") {
                    result = first_value % second_value;
                }

                display.value = result;
                first_value = null;
                operator_value = null;
            }
        }

        else {
            display.value += value;
        }


    });

});


