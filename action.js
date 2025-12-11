let eve;
const display = document.querySelector("#display");
function append(event) {

  let ele = event.target.innerText;
  display.value = display.value + ele;

if(ele=="."){
  event.target.removeEventListener("click",append);
}
else if(ele =="+" || ele =="-" || ele == "*" || ele == "/"){
  document.querySelector("#dot").addEventListener("click",append);
}
}   
function clearDisplay() {
  display.value = "";
 let btns= document.querySelectorAll(".btns");
  btns.forEach((button) => {
    button.addEventListener("click", append);
  });
  document.querySelector(".equal").addEventListener("click", calculate);
  document.querySelector("#dot").addEventListener("click",append);
}
function calculate() {
  let s = display.value;
  if (
    s[s.length - 1] === "+" ||
    s[s.length - 1] === "-" ||
    s[s.length - 1] === "*" ||
    s[s.length - 1] === "/"
  ) {
    display.value = "Error";
  let btns=document.querySelectorAll(".btns");
    btns.forEach((button) => {
      button.removeEventListener("click", append);
    });
    document.querySelector(".equal").removeEventListener("click", calculate);
  } else {
    display.value = eval(display.value);
  }
  document.querySelector("#dot").addEventListener("click",append);
}

let btns = document.querySelectorAll(".btns");
btns.forEach((button) => {
  button.addEventListener("click", append);
});

document.querySelector(".clear").addEventListener("click", clearDisplay);
document.querySelector(".equal").addEventListener("click", calculate);
