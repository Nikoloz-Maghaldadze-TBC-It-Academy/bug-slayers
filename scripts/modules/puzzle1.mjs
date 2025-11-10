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
  const codeInput = document.getElementById("code-input");
  const codeBttn = document.querySelector(".code-submit");
  //   const secretCode = 100;

  codeBttn.addEventListener("click", () => {
    const inputValue = codeInput.value.trim();
    if (inputValue === "100") {
      answer = true;
    } else {
      answer = false;
    }
    console.log(answer);
  });
}
