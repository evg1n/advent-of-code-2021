const fs = require('fs');

const data = fs.readFileSync('./input.txt',
            {encoding:'utf8', flag:'r'});

let lines = [...data.split("\n")];

let increase = 0;
let decrease = 0;

const findIncrement = () => lines.forEach((ln, index, array) => {
	if (index == array.length) return 0;

	let current = parseInt(array[index]);
	let next = parseInt(array[index + 1]);
	let difference = next - current;
	if (difference > 0) {
		increase++
	}
	if (difference < 0) {
		decrease++
	}
	return increase;
})

findIncrement();

