var flapDisplay = function(lines, rotors) {
	const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789";
	let result = [];
	let current = '';

	rotors[0].forEach((v, index) => {
		let mainStr = current || lines[0];
		let otherStr = ''

		mainStr.split('').forEach((val, innerIndex) => {
			let currentCharIndex = ALPHABET.indexOf(val);
			let indexOfCurrentRotor = currentCharIndex + rotors[0][index];

			if (indexOfCurrentRotor > ALPHABET.length - 1) {
				otherStr += ALPHABET[indexOfCurrentRotor - ALPHABET.length];
			} else {
				otherStr += ALPHABET[indexOfCurrentRotor];
				
			}
		})
		
		current = otherStr;
		result.push(current[index]);
		
	} )		
  return [result.join('')];
}

console.log(flapDisplay(["CAT"], [[1, 13, 27]]))