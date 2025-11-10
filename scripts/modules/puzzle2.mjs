export function puzzle2() {
  const up = document.querySelector(".arrow-up");
  const down = document.querySelector(".arrow-down");
  const left = document.querySelector(".arrow-left");
  const right = document.querySelector(".arrow-right");
  const inputUp = document.getElementById("up");
  const inputRight = document.getElementById("right");
  const inputDown = document.getElementById('down')
  const inputLeft = document.getElementById('left')

  up.addEventListener("click", () => {
    const valueToUp = "up";
    inputUp.textContent = valueToUp;
  });

  right.addEventListener("click", () => {
    const valueToRight = "right";
    inputRight.textContent = valueToRight;
  });

  left.addEventListener("click", () => {
    const valueToLeft = "left";
    inputLeft.textContent = valueToLeft;
  });

  down.addEventListener("click", () => {
    const valueToDown = "left";
    inputDown.textContent = valueToDown;
  });

  const correctCombination = ["1", "3", "4", "2"];
  let userSequence = [];
  const outputElement = document.querySelectorAll(".arrow");

  // buttons.forEach((button) => {
  //   button.addEventListener("click", handleButtonClick);
  // });

  function handleButtonClick(event) {
    const clickedValue = event.target.value;
    userSequence.push(clickedValue);

    const isCorrectSoFar = correctCombination
      .slice(0, userSequence.length)
      .every((value, index) => value === userSequence[index]);

    if (!isCorrectSoFar) {
      userSequence = [];
    } else if (userSequence.length === correctCombination.length) {
      updateOutput(true, "Status: True - Correct combination!");
      userSequence = [];
    } else {
      updateOutput(null, "Status: Continuing sequence...");
    }
  }
}
