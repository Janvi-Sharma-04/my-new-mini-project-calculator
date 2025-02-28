let inputfield = document.getElementById("input");
let resultfield = document.getElementById("result");

function appendValue(value) {
    inputfield.textContent += value;
}

function cleardisplay() {
    inputfield.textContent = " ";
    resultfield.textContent = " ";
}

function calculateResult() {
    inputfield.textContent = eval(inputfield.textContent);
    // inputfield.textContent = " ";
}