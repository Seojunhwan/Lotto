let randomNum = [];

const btn = document.querySelector("button"),
  spans = document.querySelectorAll("span");

const paintNum = () => {
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerText = randomNum[i];
    if (randomNum[i] <= 10) {
      spans[i].classList.add("yellow");
    } else if (randomNum[i] <= 20) {
      spans[i].classList.add("blue");
    } else if (randomNum[i] <= 30) {
      spans[i].classList.add("red");
    } else if (randomNum[i] <= 40) {
      spans[i].classList.add("black");
    } else {
      spans[i].classList.add("green");
    }
  }
};

const createNum = () => {
  const min = Math.ceil(1);
  const max = Math.floor(45);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const reset = () => {
  randomNum = [];
  spans.forEach((span) => {
    span.classList.remove("yellow", "red", "blue", "black", "green");
  });
};

const handleClick = () => {
  reset();
  for (let i = 0; i < 6; i++) {
    randomNum.push(createNum());
  }
  randomNum.sort((compareFuction = (a, b) => a - b));
  paintNum();
};

const init = () => {
  btn.addEventListener("click", handleClick);
};

init();
