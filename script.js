let color = "black";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (this.id === "reset") {
      colorCanvasWhite();
    } else {
      color = this.id;
    }
  });
});

const canvas = document.querySelector(".canvas");

const slider = document.querySelector("#sizeRange");

const sizeDisplay = document.querySelector("#sizeDisplay");

let size = slider.value;
sizeDisplay.textContent = `Size of Canvas is: ${size}`;
canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

slider.oninput = () => {
  removeDivInCanvas();
  size = slider.value;
  sizeDisplay.textContent = `Size of Canvas is: ${size}`;
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  drawCanvas(size);
};

function removeDivInCanvas() {
  const squaresInCanvas = canvas.querySelectorAll("div");
  squaresInCanvas.forEach((div) => {
    div.remove();
  });
}

function coloring() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 100%)`;
  } else if (color === "eraser") {
    this.style.backgroundColor = "white";
  } else {
    this.style.backgroundColor = color;
  }
}

function colorCanvasWhite() {
  const squaresInCanvas = canvas.querySelectorAll("div");
  squaresInCanvas.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

function drawCanvas(size) {
  const totalSize = size * size;
  for (let i = 0; i < totalSize; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", coloring);
    canvas.appendChild(div);
  }
}

drawCanvas(size);
