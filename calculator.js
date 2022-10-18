const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

document.getElementById('op').disabled = true;

buttons.forEach((item) => 
{
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        }
    
    else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length -1);
    }
    else if (display.innerText != "" && item.id == "equal") {    
        display.innerText = eval(display.innerText);
    }

    else if ( item.id == "op") { 
        display.innerHTML += ')'
        document.getElementById("op").disabled = true;
    }

    else if (item.id == "openP") { 
        display.innerHTML += '('
        document.getElementById("op").disabled = false; 
    }
    
    else if (display.innerText == "" && item.id =="equal") {
        document.getElementById("equal").disabled = false;
        setTimeout(() => (display.innerText = ""), 0);
    }
    else {
        display.innerText += item.id; 
    }
};
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};