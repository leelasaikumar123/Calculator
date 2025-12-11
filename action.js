const display = document.querySelector("#display");



//Adding the Button Value
function append(event) {
  let ele = event.target.innerText;
  display.value = display.value + ele;
  if (ele == ".") {
    event.target.disabled = true;
  } else if (ele == "+" || ele == "-" || ele == "*" || ele == "/") {
    document.querySelector("#dot").disabled = "true";
  }
}




//Claring the Screen
function clearDisplay() {
  display.value = "";
  let btns = document.querySelectorAll(".btns");
  btns.forEach((button) => {
    button.addEventListener("click", append);
  });
  document.querySelector(".equal").addEventListener("click", calculate);
  document.querySelector("#dot").disabled = false;
}




//Calculating The Expression
function calculate() {
  let s = display.value;
  if (
    s[s.length - 1] === "+" ||
    s[s.length - 1] === "-" ||
    s[s.length - 1] === "*" ||
    s[s.length - 1] === "/"
  ) {
    display.value = "Error";
    let btns = document.querySelectorAll(".btns");
    btns.forEach((button) => {
      button.removeEventListener("click", append);
    });
    document.querySelector(".equal").removeEventListener("click", calculate);
  } else {
    display.value = eval(display.value);
    let dot = display.value;
    if (dot.includes(".")) {
      document.querySelector("#dot").disabled = true;
    } else {
      document.querySelector("#dot").disabled = false;
    }
  }
}




//Adding EventListners to Buttons
let btns = document.querySelectorAll(".btns");
btns.forEach((button) => {
  button.addEventListener("click", append);
});

document.querySelector(".clear").addEventListener("click", clearDisplay);
document.querySelector(".equal").addEventListener("click", calculate);

