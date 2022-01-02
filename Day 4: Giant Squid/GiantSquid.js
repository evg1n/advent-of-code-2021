/**
 * Day 4: Giant Squid
 * https://adventofcode.com/2021/day/4
 */

// READ INPUT
const Card = require("./Card");

const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let lines = [...data.split("\n\n")];

let numbers = lines[0].split(",").map(el => parseInt(el));

let cards = [];
let bingo = false;

const initBingo = () => lines.forEach((el,index) => {
	if(index === 0) return;
	let rows = el.split("\n");
	
	let input = 
	rows.map((row,index) => {
		return row//.split(" ").map(el => parseInt(el)).filter(el => !isNaN(el))
	})
	cards.push(new Card(input, index))
})

numbers.forEach(el => {
	if(bingo){
		//return
	}
	cards.forEach(c => {
		if(!c.bingo){
		c.markNumber(el)
		} else {
			bingo = true
			c.getData()
		}
	})
})

initBingo();

// PART 2
cards = [];
initBingo();
let bingoOrder = [];
console.log("PART 2");
numbers.forEach(el => {
	cards.forEach(c => {
		
			c.markNumber(el)
			if(c.bingo){
				if(bingoOrder.find(bingo => bingo.id === c.id)) {
					return
				}
				bingoOrder.push(c)
			
		}
	})
})

let lastWinningCard = ()=> bingoOrder[bingoOrder.length -1].getData();

lastWinningCard()

// REFACTOR