const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let colors = [];

  for (let i = 0; i < 4; i++) {
    colors.push(getRandomNumber());
  }

  console.log(colors);

  const cymk = `cymk(${colors})`;
  document.body.style.backgroundColor = cymk;
  color.textContent = cymk;
  color.style.textTransform = "uppercase";
});

const getRandomNumber = () => {
  const maxValue = 100;
  const randomNumber = Math.floor(Math.random() * maxValue);
  return `${randomNumber}%`;
};
