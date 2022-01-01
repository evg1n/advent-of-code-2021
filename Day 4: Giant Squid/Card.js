
 class Card {
	constructor(values){
		this.data = new Map();
		
		this.bingo = false;
		this.formatCard(values);
		this.sum = 0;
		this.winner = -1;
	}

	getData(){
		console.log("PART 1 ANSWER", this.sum * this.winner)
		return this.sum * this.winner
	}

	setData (data){
		this.data = data
	}
	
	formatCard(values) {
		values.forEach((el,index, array) => {
			let row = el.split(" ").filter(el => !isNaN(parseInt(el))).map(e => parseInt(e))
			this.data.set(index, row)
		})
		
	}

	markNumber(number) {
		this.data.forEach(el => {
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
			this.data.forEach(el => {
				let check = el.filter(e => e > -1)
				if(check.length){
					this.sum += check.reduce((acc,val)=> acc + val)
				}
			})
		}
	}



module.exports = Card;