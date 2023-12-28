const darkEl = document.querySelector(".dark");
const lightEl = document.querySelector(".light");
const title1 = document.querySelector(".title-spn");
const title2 = document.querySelector(".title-h2");
const title3 = document.querySelector(".title-p");
const items = document.querySelectorAll("li");
const itemLink = document.querySelectorAll(".item-link");
// ///////////////////////////////////
///////////////////////////////////
// dark mode
darkEl.addEventListener("click", () => {
  darkEl.classList.add("block");
  lightEl.classList.remove("block");
  document.body.style = "background: var(--Dark-Navy, #313E51);";
  title1.style = "color: var(--Pure-White, #FFF);";
  title2.style = "color: var(--Pure-White, #FFF);";
  title3.style = "color: var(--Light-Bluish, #ABC1E1);";

  items.forEach((i) => {
    i.style.backgroundColor = "#3B4D66";
  });
  itemLink.forEach((i) => {
    i.style.color = "#FFF";
  });
});
lightEl.addEventListener("click", () => {
  lightEl.classList.add("block");
  darkEl.classList.remove("block");
  document.body.style = "background: var(--Light-Grey, #F4F6FA);";
  title1.style = "color: var(--Dark-Navy, #313E51);";
  title2.style = "color: var(--Dark-Navy, #313E51);";
  title3.style = "color: var(--Grey-Navy, #626C7F);";
  items.forEach((i) => {
    i.style.backgroundColor = "#FFF";
  });
  itemLink.forEach((i) => {
    i.style.color = "#313E51";
  });
});
// //////////////////////