/**
 * Day 2: Dive!
 * https://adventofcode.com/2021/day/2
 */

// READ INPUT
const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let lines = [...data.split("\n")];

let position = 0, depth = 0;

const navigate = (path) => {
	path.forEach(instruction => {
		let direction = instruction.split(" ")[0];
		let value = parseInt(instruction.split(" ")[1]);

		switch (direction) {
			case "forward": position = position  + value; break;
			case "down" : depth = depth + value; break;
			case "up" : depth = depth - value; break;
			default: break;
		}
	})
	console.log("PART 1 ANSWER:", position * depth)
	return position * depth;
}

navigate(lines)