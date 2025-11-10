export function startpuzzle3() {
  const correct = "object";
const digit3 = "Digit 3: 4";
const pin = "404";
const foundDigit = document.querySelector(".found-digits");
const buttons = document.querySelectorAll(".btn-answer");
const numbersbtn = document.querySelectorAll(".number-btn");
const code1 = document.getElementById("code1");
const code2 = document.getElementById("code2");
const code3 = document.getElementById("code3");
const clear = document.getElementById("clear");
const congratulations = document.querySelector('.puzzle-3');
buttons.forEach((el) => {
  el.addEventListener("click", function (e) {
    console.log(e);
    if (e.target.textContent === correct) {
      console.log(true);
      createDigit(foundDigit, digit3);
    } else {
      console.log(false);
    }
  });
});
let pinArr = [];
numbersbtn.forEach((btn) => {
  btn.addEventListener("click", function (el) {
    if (code1.innerText === "") {
      code1.innerText = el.target.textContent;
      pinArr.push(code1.innerText);
    } else if (code1.innerText !== "" && code2.innerText === "") {
      code2.innerText = el.target.textContent;
      pinArr.push(code2.innerText);
    }else if (code1.innerText !== "" && code2.innerText !== "" && code3.innerText === ""){
        code3.innerText = el.target.textContent;
        pinArr.push(code3.innerText);
        if(pinArr.join("") === pin){
           console.log(true);
           congratulations.innerHTML = `<h1>Hello</h1>`
        }
    }else{
        return;
    }
  });
});

clear.addEventListener("click", function(){
    code1.innerText = "";
    code2.innerText = "";
    code3.innerText = "";
    pinArr = [];
});

function createDigit(parent, data) {
  let container = document.createElement("div");
  container.innerText = data;
  console.log(container, parent);

  parent.appendChild(container);
}

// function checkAnswer(element) {
//   if (el.textContent === correct) {
//     console.log(true);
//   }
// console.log(element);

// }
}