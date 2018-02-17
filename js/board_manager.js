const board = new Array(8)

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
  cell.style.background='green'
}

function selectCell(x,y){
	board[x][y] = 1
	paintCell(x,y, "green")
}


x = Math.round(Math.random()*7)
y = Math.round(Math.random()*7)
clearBoard()
selectCell(x,y)