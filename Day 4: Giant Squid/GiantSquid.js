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

lines.forEach((el,index) => {
	if(index === 0) return;
	let rows = el.split("\n");
	let input = 
	rows.map((row,index) => {
		return row//.split(" ").map(el => parseInt(el)).filter(el => !isNaN(el))
	})
	cards.push(new Card(input))
})

numbers.forEach(el => {
	if(bingo){
		return
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