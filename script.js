const canvas = document.querySelector('.canvas');

for (let i = 0; i < 16; i++) {
  for(let j = 0; j < 16; j++){
    const div = document.createElement('div');
    div.style.width = `calc(100%/16)`;
    div.style.height = `calc(100%/16)`;
    canvas.appendChild(div);
  }
}
