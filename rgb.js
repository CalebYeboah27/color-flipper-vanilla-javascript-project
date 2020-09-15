const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let colors = [];

  for (let i = 0; i < 3; i++) {
    colors.push(getRandomNumber());
  }

  const rgb = `rgb(${colors})`;
  document.body.style.backgroundColor = rgb;
  color.textContent = rgb;
  color.style.textTransform = "uppercase";
});

const getRandomNumber = () => {
  const maxValue = 255;
  return Math.floor(Math.random() * maxValue);
};
