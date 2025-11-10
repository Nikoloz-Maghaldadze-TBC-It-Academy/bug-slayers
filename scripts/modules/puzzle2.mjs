export function puzzle2() {
  const up = document.querySelector(".arrow-up");
  const down = document.querySelector(".arrow-down");
  const left = document.querySelector(".arrow-left");
  const right = document.querySelector(".arrow-right");

  const inputUp = document.getElementById("up");
  const inputRight = document.getElementById("right");
  const inputDown = document.getElementById("down");
  const inputLeft = document.getElementById("left");
  const output = document.getElementById("output");
  const next = document.querySelector(".button-next");

  up.addEventListener("click", () => (inputUp.textContent = "up"));
  right.addEventListener("click", () => (inputRight.textContent = "right"));
  left.addEventListener("click", () => (inputLeft.textContent = "left"));
  down.addEventListener("click", () => (inputDown.textContent = "down"));

  const correctCombination = ["1", "2", "3", "4"];
  let userSequence = [];

  const buttons = document.querySelectorAll(".arrow");

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  function handleButtonClick(e) {
    const clickedValue = e.target.getAttribute("value");
    userSequence.push(clickedValue);

    const isCorrectSoFar = correctCombination
      .slice(0, userSequence.length)
      .every((v, i) => v === userSequence[i]);

    console.log("Current:", userSequence);

    if (!isCorrectSoFar) {
      console.log("Wrong combination, reset!");
      output.textContent = "wrong combination";
      userSequence = [];
      return;
    }

    if (userSequence.length === correctCombination.length) {
      console.log("TRUE — Correct combination!");
      output.textContent = "correct combination";
      userSequence = [];
      next.disabled = false;
      return true;
    }
  }
}
