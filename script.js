const canvas = document.querySelector(".canvas");

const slider = document.querySelector("#sizeRange");

const sizeDisplay = document.querySelector("#sizeDisplay");

let size = slider.value;
sizeDisplay.textContent = `Size of Canvas is: ${size}`;
canvas.style.gridTemplateColumns = "repeat(${size}, 1fr)";
canvas.style.gridTemplateRows = "repeat(${size}, 1fr)";

slider.oninput = () => {
  size = slider.value;
  sizeDisplay.textContent = `Size of Canvas is: ${size}`;
  canvas.style.gridTemplateColumns = "repeat(${size}, 1fr)";
  canvas.style.gridTemplateRows = "repeat(${size}, 1fr)";
  drawCanvas(size);
};

function drawCanvas(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      canvas.appendChild(div);
    }
  }
}

drawCanvas(size);
