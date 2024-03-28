let table;
function preload(){
  table = loadTable('FA205 M5.csv', 'csv', 'header');
} 


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let rows = table.getRowCount();
  text("Total number of rows in the table = " + rows, 20, 100);
  let row = table.getRow(0);
  

}
