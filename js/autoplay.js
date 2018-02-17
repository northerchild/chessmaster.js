let totals_secs
let totals_mins
let cronometer


function autoplay(){
	for (var i =0; i <=8; i++) {
		board[i] = new Array(8)
	}
}


autoplay()

// 0 -> posicion vacia
// 1 -> posicion ocupada