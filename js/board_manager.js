const board = new Array(8)

let cellSelected_x
let cellSelected_y
let moves

moves = 64

for (var i =0; i <=8; i++) {
		board[i] = new Array(8)
	}

function clearBoard(){
	for (var i =0; i <8; i++) {
		for (j =0; j<8; j++) {
			board[i][j] = 0;
		}
	}
}

function paintCell(x,y,color){
  cell = document.getElementById('c'+x+y)
  cell.style.background='orange'
}

function paintHorseCell(x,y,color){
  cell = document.getElementById('c'+x+y)
  cell.style.background='green'
  cell.innerHTML = '<img src="horse.gif" alt="Caballo" />'
}

function selectCell(x,y){
	board[x][y] = 1
	paintCell(cellSelected_x,cellSelected_y, "orange")
	paintHorseCell(x,y, "green")
	cellSelected_x = x
	cellSelected_y = y
	moves--
	document.getElementById('moves').innerHTML = moves
}


x = Math.round(Math.random()*7)
y = Math.round(Math.random()*7)
cellSelected_x = x
cellSelected_y = y
clearBoard()
selectCell(x,y)

function CheckCell(x,y){
	checkTrue = false
	dif_x = x - cellSelected_x
	dif_y = y - cellSelected_y
	//alto == a 2 pasos
	if (dif_x == 1 && dif_y == 2)   checkTrue = true; // derecha arriba alto
	if (dif_x == 1 && dif_y == -2)  checkTrue = true; // derehca abajo alto
	if (dif_x == 2 && dif_y == 1)   checkTrue = true; // derecha alto arriba
	if (dif_x == 2 && dif_y == -1)  checkTrue = true; // derecha alto abajo
	if (dif_x == -1 && dif_y == 2)  checkTrue = true; // izquierda arriba alto
	if (dif_x == -1 && dif_y == -2) checkTrue = true; // izquierda abajo alto
	if (dif_x == -2 && dif_y == 1)  checkTrue = true; // izquierda alto arriba
	if (dif_x == -2 && dif_y == -1) checkTrue = true; // izquierda alto abajo
	if (board[x][y] == 1) checkTrue = false
	if(checkTrue)selectCell(x,y)
}