/**
 * Day 3: Binary Diagnosis
 * https://adventofcode.com/2021/day/3
 */

// READ INPUT
const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let lines = [...data.split("\n")];

// PART 1
const powerConsumption = (input) => {
	let iterations = input[0].split("").length;
	let gamma = [];
	let epsilon = [];
	let consumption = 0;

	for (let i = 0; i < iterations; i++){
		let ones = 0, zeros = 0;
		input.forEach(line => {
			let digits = line.split("");
			digits[i] === "1" ? ones++ : zeros++
		})
		ones > zeros ? gamma.push(1): gamma.push(0)
		ones > zeros ? epsilon.push(0): epsilon.push(1)
	}
	consumption = parseInt(gamma.join(""),2) * parseInt(epsilon.join(""),2)
	console.log("PART 1 ANSWER: ", consumption);
	return consumption;
}

// PART 2
const findMostRepBits = (input, mostRepBits = [], iteration = 0) => {
	let iterationLimit = input[0].split("").length;
	let ones = 0, zeros = 0;
		input.forEach(line => {
		let digits = line.split("");
		digits[iteration] === "1" ? ones++ : zeros++
	})
	if (ones > zeros){	
			mostRepBits.push(1)
		} else if (ones === zeros){
			mostRepBits.push(1)
		} else {
			mostRepBits.push(0);
		}
	let filteredInput = input.filter(el => {
		return parseInt(el.split("")[iteration]) === mostRepBits[iteration]
	})
	if(input.length < 2) {
		return mostRepBits;
	}
	if(iteration === iterationLimit || input.length < 2){
		return mostRepBits;
	} else {
		return findMostRepBits(filteredInput, mostRepBits, ++iteration);
	}
}

const findLeastRepBits = (input, leastRepBits = [], iteration = 0) => {
	let iterationLimit = input[0].split("").length;
	let ones = 0, zeros = 0;
		input.forEach(line => {
		let digits = line.split("");
		digits[iteration] === "1" ? ones++ : zeros++
	})
	if (ones > zeros){	
			leastRepBits.push(0)
		} else if (ones === zeros){
			leastRepBits.push(0)
		} else {
			leastRepBits.push(1);
		}
	let filteredInput = input.filter(el => {
		return parseInt(el.split("")[iteration]) === leastRepBits[iteration]
	})
	if(iteration === iterationLimit || input.length < 2){
		return leastRepBits;
	} else {
		return findLeastRepBits(filteredInput, leastRepBits, ++iteration);
	}
}

const lifeSupportRating = (input) => {
	let iterations = input[0].split("").length;
	let mostRepBits = findMostRepBits(input);
	let leastRepBits = findLeastRepBits(input);
	let oxyRating = getRating(input, mostRepBits);
	let co2Rating = getRating(input, leastRepBits);

	console.log("PART 2 ANSWER: ", oxyRating * co2Rating)
	return oxyRating * co2Rating;
}

const getRating = (input, bitCriteria, iteration = 0) => {
	let bits = input;
	let filtered = input.filter(el => parseInt(el[iteration]) === bitCriteria[iteration])
	console.log("F:", iteration, bits, bitCriteria, filtered)
	bits = [...filtered]
	if( bits.length < 2) {
		return parseInt(bits[0], 2);
	} else {
		return getRating(bits, bitCriteria, ++iteration);	
	}
}

powerConsumption(lines);
lifeSupportRating(lines);