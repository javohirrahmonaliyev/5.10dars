const darkEl = document.querySelector(".dark");
const lightEl = document.querySelector(".light");
const textEl = document.querySelector(".question-text");
const titleText = document.querySelector(".acces-title");
const items = document.querySelectorAll(".answers-item");
const answersLet = document.querySelectorAll(".answer-let");
const answersV = document.querySelectorAll(".answer-v");

// ///////////////////////////////////
///////////////////////////////////
// dark mode
darkEl.addEventListener("click", () => {
  darkEl.classList.add("block");
  lightEl.classList.remove("block");
  document.body.style = "background: var(--Dark-Navy, #313E51);";
  titleText.style = "color: var(--Pure-White, #FFF);";
  textEl.style = "color: var(--Pure-White, #FFF);";

  items.forEach((i) => {
    i.style.backgroundColor = "#3B4D66";
  });
  answersV.forEach((i) => {
    i.style.color = "#FFF";
  });
});
lightEl.addEventListener("click", () => {
  lightEl.classList.add("block");
  darkEl.classList.remove("block");
  document.body.style = "background: var(--Light-Grey, #F4F6FA);";
  titleText.style = "color: var(--Dark-Navy, #313E51);";
  textEl.style = "color: var(--Dark-Navy, #313E51);";

  items.forEach((i) => {
    i.style.background = "#fff";
  });
  answersV.forEach((i) => {
    i.style.color = "#313E51";
  });
});
// //////////////////////
// //////////////////////

items.forEach((i) => {
  i.addEventListener("click", () => {
    if (i.id == "a") {
      i.classList.add("green");
    } else {
      i.classList.add("red");
    }
  });
});
