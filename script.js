let color = "black";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "reset") {
      resetCanvasColorToWhite();
    } else {
      color = button.id;
      console.log(color);
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

function pickRandomNumberFromRange(start, end) {
  return Math.floor(Math.random() * end) + start;
}

function coloring() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${pickRandomNumberFromRange(0, 360)}, ${pickRandomNumberFromRange(15, 85)}%, ${pickRandomNumberFromRange(15, 85)}%)`;
  } else if (color === "eraser") {
    this.style.backgroundColor = "white";
  } else {
    this.style.backgroundColor = color;
  }
  console.log(this.style.backgroundColor);
}

function resetCanvasColorToWhite() {
  removeDivInCanvas();
  drawCanvas(size);
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
