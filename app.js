const rangeForm = document.querySelector("#range-form");
const guessForm = document.querySelector("#guess-form");
const maxNumberInput = document.querySelector("#max-number");
const guessNumberInput = document.querySelector("#guess-number");
const gameCardTitle = document.querySelector("#game-card-title");
const gameMessage = document.querySelector("#game-message");
const resetButton = document.querySelector("#reset-game");
const rangeLabel = document.querySelector("#range-label");
const rangeStatus = document.querySelector("#range-status");
const attemptCount = document.querySelector("#attempt-count");
const statusText = document.querySelector(".status");

let number = 0;
let random = 0;
let attempts = 0;

function setMessage(message, state = "") {
  gameMessage.textContent = message;
  gameMessage.dataset.state = state;
}

function updateAttempts() {
  attemptCount.textContent = `${attempts} ${attempts === 1 ? "attempt" : "attempts"}`;
}

function resetGame() {
  number = 0;
  random = 0;
  attempts = 0;

  rangeForm.hidden = false;
  guessForm.hidden = true;
  resetButton.hidden = true;
  maxNumberInput.value = "";
  guessNumberInput.value = "";
  guessNumberInput.disabled = false;
  guessForm.querySelector("button").disabled = false;
  gameCardTitle.textContent = "Set your range.";
  setMessage("Choose the highest possible number to begin.");
  rangeLabel.textContent = "01 — 09";
  rangeStatus.textContent = "unknown";
  statusText.lastChild.textContent = " session ready";
  document.querySelector(".game-card").classList.remove("is-success");
  updateAttempts();
  maxNumberInput.focus();
}

rangeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  number = Number(maxNumberInput.value);
  if (!Number.isInteger(number) || number < 1) {
    setMessage("Enter a whole number greater than zero.", "error");
    maxNumberInput.focus();
    return;
  }

  random = Math.floor(Math.random() * number) + 1;
  attempts = 0;
  rangeForm.hidden = true;
  guessForm.hidden = false;
  rangeLabel.textContent = `01 — ${String(number).padStart(2, "0")}`;
  rangeStatus.textContent = "range locked";
  gameCardTitle.textContent = "Find the hidden number.";
  setMessage(`It is somewhere between 1 and ${number}.`);
  updateAttempts();
  guessNumberInput.max = number;
  guessNumberInput.focus();
});

guessForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const guess = Number(guessNumberInput.value);
  if (!Number.isInteger(guess) || guess < 1 || guess > number) {
    setMessage(`Choose a whole number between 1 and ${number}.`, "error");
    guessNumberInput.focus();
    return;
  }

  attempts += 1;
  updateAttempts();

  if (guess === random) {
    gameCardTitle.textContent = "You got it!";
    setMessage(`Congratulations! ${random} was the hidden number.`, "success");
    rangeStatus.textContent = "solved";
    statusText.lastChild.textContent = " session complete";
    guessNumberInput.disabled = true;
    guessForm.querySelector("button").disabled = true;
    resetButton.hidden = false;
    document.querySelector(".game-card").classList.add("is-success");
  } else if (guess < random) {
    setMessage("Your guess was too small. Try again.");
    guessNumberInput.select();
  } else {
    setMessage("Your guess was too big. Try again.");
    guessNumberInput.select();
  }
});

resetButton.addEventListener("click", resetGame);

updateAttempts();
