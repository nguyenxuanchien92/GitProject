let inputWidth;
let inputHeight;
let width;
let height;
let area;

inputWidth = prompt("Nhập chiều rộng");
inputHeight = prompt("Nhập chiều dài");

width = parseInt(inputWidth);
height = parseInt(inputHeight);

area = width * height;

document.write("The area is:" + area);
