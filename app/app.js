const stepInfos = [...document.querySelectorAll(".count")];
const steps = [...document.querySelectorAll(".steps")];
const nextBtn = document.querySelector(".next-btn");

let index = 0;
nextBtn.addEventListener("click", handleNext);

function handleNext(event) {
  index++;
  if (index === 3) {
    nextBtn.style.display = "none";
  }
  document.querySelector(".count.active").classList.remove("active");
  stepInfos[index].classList.add("active");
  document.querySelector(".steps.active").classList.remove("active");
  steps[index].classList.add("active");
}
