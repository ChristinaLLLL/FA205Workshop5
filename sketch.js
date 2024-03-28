let data;
let colours = [];
let rowCount;
let columnCount;
let cellWidth;
let cellHeight;
 
function preload() {
  data = loadTable('FA205 M5.csv', 'csv');
}
 
function setup() {
  createCanvas(600, 400);
  background(255);
 
  rowCount = data.getRowCount();
  columnCount = data.getColumnCount();
 
  cellWidth = width / columnCount;
  cellHeight = height / rowCount;
 
  for (let column = 0; column < columnCount; column++) {
    colours.push(color(data.getString(0, column)));
  }
 
  displayShapes();
}
 
function displayShapes() {
  for (let row = 1; row < rowCount; row++) {
    for (let column = 0; column < columnCount; column++) {
      let rectX = column * cellWidth;
      let rectY = row * cellHeight;
 
      let cellValue = data.getString(row, column);
 
      if (cellValue !== '') {
        fill(colours[column]);
        rect(rectX, rectY, cellWidth, cellHeight);
      }
    }
  }
}

