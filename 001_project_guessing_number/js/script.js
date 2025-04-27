let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//* Using Functions in order to avoid repitition in code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number, width) {
  const givenNumber = document.querySelector(".number");
  givenNumber.textContent = number;

  givenNumber.style.width = width;
};

const displayScore = function (currentScore) {
  document.querySelector(".score").textContent = currentScore;
};

let check = document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
      displayMessage("🚫 No Number!");
      score--;
      displayScore(score);
    } else if (guess === secretNumber) {
      displayMessage("✅ Correct Number");

      displayNumber(secretNumber, "30rem");

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }

      document.querySelector("body").style.backgroundColor = "#60b347";
    } else if (guess !== secretNumber) {
      if (score > 0) {
        displayMessage(guess > secretNumber ? "😔 Too High!" : "😔 Too Low!");
        score--;
        displayScore(score);
      } else {
        displayMessage("💥Oops! You Lost The Game");
      }
    }
  });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");

  displayNumber("?");

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  displayNumber("15rem");
});
