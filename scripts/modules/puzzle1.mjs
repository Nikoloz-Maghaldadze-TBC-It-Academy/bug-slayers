import {data1} from "../data1.js";

export default function toggleLamp() {
  const toggleSwitch = document.querySelector(".toggle-input");
  const toggleCode = document.getElementById("puzzle-1-code");

  toggleSwitch.addEventListener("change", () => {
    if (toggleCode.style.display === "block") {
      toggleCode.style.display = "none";
    } else {
      toggleCode.style.display = "block";
    }
  });

  //   console.log(toggleSwitch, toggleCode);
}
export let answer = null;
export function insertValue() {
  const asideData = document.querySelector(".aside-puzzle-id");
  const nextButton = document.querySelector(".button-next");
  const codeInput = document.getElementById("code-input");
  const codeBttn = document.querySelector(".code-submit");
  const puzzle1 = document.querySelector('.puzzle-1');
  //   const secretCode = 100;

  codeBttn.addEventListener("click", () => {
    const inputValue = codeInput.value.trim();
    if (inputValue === "100") {
      answer = true;
      nextButton.disabled = false;
      let sum = parseInt(data1.id);
      sum += 1;
      console.log(sum);
      nextButton.addEventListener('click', ()=>{
      puzzle1.style.display='none';
      asideData.innerText = sum;
    })
      
    } else {
      answer = false;
    }

    

    console.log(answer);
  });
}
