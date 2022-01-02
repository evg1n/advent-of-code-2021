
 class Card {
	constructor(values, id){
		this.rows = new Map();
		this.columns = new Map();
		this.bingo = false;
		this.rowSum = 0;
		this.columnSum = 0;
		this.winner = -1;
		this.id = undefined;
		this.initCard(values, id);
	}

	getData(){
		console.log("PART 1 ANSWER", this.rowSum * this.winner)
		console.log("PART 2 ANSWER", this.columnSum * this.winner)
	}
	
	initCard(values, id) {
		values.forEach((el,index, array) => {
			let row = el.split(" ").filter(el => !isNaN(parseInt(el))).map(e => parseInt(e))
			this.rows.set(index, row)
			this.id = id
		})
		
		let serialData = []
		this.rows.forEach(el => {
			serialData = [...serialData, ...el]
		})
		let columnCount = this.rows.get(0).length;

		for (let i = 0;i < columnCount;i++){
			this.columns.set(i,[]);
		}
		serialData.forEach((el,index) => {
			let column = this.columns.get(index % 5)
			this.columns.set(index % 5,[...column, el])
		})
	}

	markNumber(number) {
		this.rows.forEach(el => {
			if(el.indexOf(number) > -1){
				if(this.bingo){
					return;
					}
				el.splice(el.indexOf(number), 1, -1)
				let sum = el.reduce((acc,val) => acc + val);
				if (sum < -4){
					this.bingo = true;
					this.winner = number;
					this.getSum();
					return;
				}
			} 
		})
		this.columns.forEach(el => {
			if(el.indexOf(number) > -1){
				if(this.bingo){
					return;
					}
				el.splice(el.indexOf(number), 1, -1)
				let sum = el.reduce((acc,val) => acc + val);
				if (sum < -4){
					this.bingo = true;
					this.winner = number;
					this.getSum();
					return;
				}
			} 
		})
		}

		getSum() {
			this.rows.forEach(el => {
				let check = el.filter(e => e > -1)
				if(check.length){
					this.rowSum += check.reduce((acc,val)=> acc + val)
				}
			})
			this.columns.forEach(el => {
				let check = el.filter(e => e > -1)
				if(check.length){
					this.columnSum += check.reduce((acc,val)=> acc + val)
				}
			})
		}
	}



module.exports = Card;