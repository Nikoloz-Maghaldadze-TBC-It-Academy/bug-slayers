export function insertValue(callback) {
  const codeInput = document.getElementById("code-input");
  const codeBttn = document.querySelector(".code-submit");

  codeBttn.addEventListener("click", () => {
    const inputValue = codeInput.value.trim();
    const isCorrect = inputValue === "100";
    callback(isCorrect);
  });
}
