const numberInput = document.getElementById("numberInput");
const textInput = document.getElementById("textInput");
const button = document.getElementById("button");
const boxContainer = document.getElementById("boxContainer");
const shapeSelect = document.getElementById("shapeSelect");
const colorInpt = document.getElementById("colorInpt");
const deleteAllbtn = document.getElementById("deletebtn");


button.addEventListener("click", function () {

  const numberOfBoxes = numberInput.valueAsNumber;
  const textValue = textInput.value;
  const selectedShape = shapeSelect.value;
  const bgColor = colorInpt.value;

  if (isNaN(numberOfBoxes) || numberOfBoxes <= 0) {
    alert("Please enter a valid number");
    return;
  }

  for (let i = 1; i <= numberOfBoxes; i++) {

    let shape = document.createElement("div");
    shape.classList.add("shape");

    if (selectedShape === "circle") {
      shape.classList.add("circle");
    }

    shape.style.backgroundColor = bgColor;
    shape.textContent = textValue;

    boxContainer.appendChild(shape);
  }

});

deleteAllbtn.addEventListener("click" , function() {
  boxContainer.innerHTML = "";
})
