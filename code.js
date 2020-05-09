var input = [2,2,2,2,2,0,0,0,2];
var output = [1,1,1,1,1,1,1,1,1];

//0=A, 1=}I{, 2=%, 3= PP

function advance(number) {
	number++;
	return number % 4;
}

function trigger(pos, array) {
	checkRule(0,1,2);
	checkRule(3,4,5);
	checkRule(6,7,8);
	checkRule(0,3,6);
	checkRule(1,4,7);
	checkRule(2,5,8);

	array[pos] = (array[pos] + 3) % 4;

	function checkRule(a,b,c) {
		if([a,b,c].includes(pos)) {
			array[a] = advance(array[a]);
			array[b] = advance(array[b]);
			array[c] = advance(array[c]);
		}
	}

	return array;
}

var movelog = {};

var buffer = [];
var combination = 0;
var result = "";

while(buffer.join() !== output.join() && combination < 999999999) {
	buffer = [...input];
	result = "";
	// console.log("Sequence: " + combination);
	
	var steps = combination.toString().split("");

	steps.forEach(function(el){
		step = parseInt(el)-1;
		result += step;
	// console.log("Step: " + step);

		buffer = trigger(step, buffer);
		// console.log(buffer);
	});

	combination++;
}

console.log(result);