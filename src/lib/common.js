const memory = {};

function getColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  if (memory[color]) {
    return getColor();
  }

  memory[color] = true;

  return color;
}

function generateOption() {
  return [getColor(), getColor(), getColor(), getColor()];
}

export { generateOption };
