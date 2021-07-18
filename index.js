const drawBtn = document.querySelector(".jsDrawBtn");
const spans = document.querySelectorAll(".jsNum");
const drawNums = document.getElementById("jsDrawNums");
const draws = drawNums.querySelector("ul");
const navBtn = document.querySelector(".navBtn");

let randomNum = [];
let drawNum = [];

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
  pass = true;
  randomNum = [];
  spans.forEach((span) => {
    span.classList.remove("yellow", "red", "blue", "black", "green");
  });
};

const validation = () => {
  let result = [...new Set(randomNum)];
  if (result.length === 6) {
    return false;
  } else if (result.length !== 6) {
    return true;
  }
};

const handleClick = () => {
  reset();
  createNum();
  do {
    reset();
    createNum();
  } while (validation());
  randomNum.sort((compareCondition = (a, b) => a - b));
  drawNum.push(randomNum);
  paintDrawNums();
  paintNum();
};

const paintDrawNums = () => {
  const lastDrawNums = drawNum[drawNum.length - 1];
  const item = document.createElement("li");
  const items = document.createElement("ul");
  lastDrawNums.forEach((num) => {
    const number = document.createElement("span");
    number.classList.add("jsDrawNum");
    if (num <= 10) {
      number.classList.add("yellow");
    } else if (num <= 20) {
      number.classList.add("blue");
    } else if (num <= 30) {
      number.classList.add("red");
    } else if (num <= 40) {
      number.classList.add("black");
    } else {
      number.classList.add("green");
    }
    number.innerText = num;
    item.appendChild(number);
  });
  draws.appendChild(item);
};

const handleNavClick = () => {
  if (drawNums.className === "hide") {
    drawNums.className = "appear";
    navBtn.innerText = "숨기기";
  } else {
    drawNums.className = "hide";
    navBtn.innerText = "항목 보기";
  }
};

const init = () => {
  drawBtn.addEventListener("click", handleClick);
  navBtn.addEventListener("click", handleNavClick);
};

init();
