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
  for (let i = randomNum.length; i < 6; i++) {
    const min = Math.ceil(1);
    const max = Math.floor(45);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum.push(result);
  }
};

const reset = () => {
  randomNum = [];
  spans.forEach((span) => {
    span.classList.remove("yellow", "red", "blue", "black", "green");
  });
};

const handleClick = () => {
  reset();
  createNum();
  const result = [...new Set(randomNum)];
  if (result.length != 6) {
    reset();
    createNum();
    console.log("중복값이 있어 다시 추첨합니다.");
  }

  randomNum.sort((compareFuction = (a, b) => a - b));
  paintNum();
};

const init = () => {
  btn.addEventListener("click", handleClick);
};

init();
