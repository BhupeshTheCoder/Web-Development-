function changeColor(color) {
    let selectNumber = document.getElementById("number").value;
    let selectBox = document.getElementById("pat" + selectNumber);
    selectBox.style.backgroundColor = color;
}