/**
 * Day 1: Sonar Sweep
 * https://adventofcode.com/2021/day/1
 */

// READ INPUT
const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let lines = [...data.split("\n")];

let increase = 0;

// PART 1
const findIncrement = (series) => {
	series.forEach((ln, index, array) => {
	if (index == array.length) return 0;
	let current = parseInt(array[index]);
	let next = parseInt(array[index + 1]);
	if (isNaN(current) || isNaN(next)) return 0;
	let difference = next - current;
	if (difference > 0) {
		increase++
	}
})
	return increase;
}

// PART 2
const incrementWindow = () => {
	let sums = []
	lines.forEach((ln,index,array) => {
		let sum = 0;
		if (index >= array.length - 2) return 0;
		let triplet = [
			parseInt(array[index]), 
			parseInt(array[index+1]),
			parseInt(array[index+2])];
			sum = triplet.reduce((acc,val)=> acc + val)
			sums.push(sum)
	})
	let increase = findIncrement(sums);
	return increase;
}

// PART 1
findIncrement(lines);
console.log("PART 1 ANSWER:", increase);

//PART 2
increase = 0; // RESET PART 1 ANSWER
incrementWindow();
console.log("PART 2 ANSWER:", increase);
