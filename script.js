const canvas = document.querySelector(".canvas");

const size = document.querySelector("#sizeRange").value;

const sizeDisplay = document.querySelector("#sizeDisplay");
sizeDisplay.textContent = `Size of Canvas is: ${size}`;

function drawCanvas(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.style.width = `calc(100%/${size})`;
      div.style.height = `calc(100%/${size})`;
      canvas.appendChild(div);
    }
  }
}

drawCanvas(size);
