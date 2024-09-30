const display = document.getElementById("display");
<<<<<<< HEAD
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
=======

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

>>>>>>> 0c1cbe9f0471749a934073e6960f05245cbcba97
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error!";
    }
<<<<<<< HEAD
=======

>>>>>>> 0c1cbe9f0471749a934073e6960f05245cbcba97
}