const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let colors = [];

  for (let i = 0; i < 3; i++) {
    colors.push(getRandomNumber());
  }

  console.log(colors);

  const hsl = `hsl(${colors[0]}, ${colors[1] % 100}%, ${colors[2] % 100}%)`;
  document.body.style.backgroundColor = hsl;
  color.textContent = hsl;
  color.style.textTransform = "uppercase";
});

const getRandomNumber = () => {
  const maxValue = 360;
  return Math.floor(Math.random() * maxValue);
};
