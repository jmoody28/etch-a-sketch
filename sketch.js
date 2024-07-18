const container = document.querySelector("#container");
const colorPicker = document.querySelector("#color-picker");
const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector(".eraser");
const newGrid = document.querySelector(".newGrid");
const reset = document.querySelector(".reset");
const rainbowImg = document.getElementById("rainbowImg");
const eraserImg = document.getElementById("eraserImg");
let count = 16;
let prevColor = "";
let eraserState = false;
let rainbowState = false;

window.onload = function () {
  createGrid(16);
};

function createGrid(num) {
  container.innerHTML = "";
  for (let i = 0; i < num ** 2; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "sketch-grid");
    newDiv.style.flexBasis = `${100 / num}%`;
    container.appendChild(newDiv);
    if (rainbowState == true) {
      newDiv.addEventListener("mouseenter", function () {
        rainbowMode();
        newDiv.style.backgroundColor = colorPicker.value;
      });
    } else {
      newDiv.addEventListener("mouseenter", function () {
        newDiv.style.backgroundColor = colorPicker.value;
      });
    }
  }
}

colorPicker.addEventListener("change", function () {
  colorPicker.value = this.value;
});

rainbow.addEventListener("click", function () {
  rainbowState = !rainbowState;
  console.log(rainbowState);
  createGrid(count);
  rainbowImg.style.borderColor = "#7fa99b";
  if (rainbowState == false) {
    rainbowImg.style.borderColor = "#fdc57b";
  }
});

function rainbowMode() {
  if (rainbowState == true && eraserState == false) {
    colorPicker.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else {
    colorPicker.value = "#f0f8ff";
  }
}

eraser.addEventListener("click", function () {
  eraserState = !eraserState;
  console.log(eraserState);
  updateButton();
});

function updateButton() {
  if (eraserState == true) {
    eraserImg.style.borderColor = "#7fa99b";
    prevColor = colorPicker.value;
    colorPicker.value = "#f0f8ff";
  } else {
    colorPicker.value = prevColor;
    eraserImg.style.backgroundColor = "#f0f8ff";
    eraserImg.style.borderColor = "#fdc57b";
  }
}

newGrid.addEventListener("click", function () {
  let size = prompt(
    "Enter a number to change the amount of rows and columns in the grid."
  );
  count = size;
  createGrid(size);
});

reset.addEventListener("click", function () {
  createGrid(count);
});
