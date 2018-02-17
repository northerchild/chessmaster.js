const board = new Array(8)

let cellSelected_x
let cellSelected_y

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
}


x = Math.round(Math.random()*7)
y = Math.round(Math.random()*7)
cellSelected_x = x
cellSelected_y = y
clearBoard()
selectCell(x,y)

function CheckCell(x,y){
	selectCell(x,y)
}