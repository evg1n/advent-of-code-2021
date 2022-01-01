/**
 * Day 2: Dive!
 * https://adventofcode.com/2021/day/2
 */

// READ INPUT
const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let lines = [...data.split("\n")];

<<<<<<< HEAD
// PART 1
const navigate = (path) => {
	let position = 0, depth = 0;
=======
let position = 0, depth = 0;

const navigate = (path) => {
>>>>>>> origin/main
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

<<<<<<< HEAD
// PART 2
const aimToNavigate=(path)=> {
	let position = 0, depth = 0, aim = 0;
	path.forEach(instruction => {
		let direction = instruction.split(" ")[0];
		let value = parseInt(instruction.split(" ")[1]);
		switch (direction) {
			case "forward": 
				position = position  + value; 
				depth = depth + (value * aim);
			break;
			case "down" : 
				aim = aim + value; 	
			break;
			case "up" : 
				aim = aim - value;		
			break;
			default: break;
		}
	})
	console.log("PART 2 ANSWER:", position * depth)
	return position * depth;
}

navigate(lines);
aimToNavigate(lines);
=======
navigate(lines)
>>>>>>> origin/main
