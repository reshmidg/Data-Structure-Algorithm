/* An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 33 + 73 + 13 = 371*/
//3 digit Armstrong number
function armStrong(num){
let sumOfAllDigits = 0,originalNumber = num;
	while(num>0){
        const unitDigit = num%10;
		sumOfAllDigits += (unitDigit * unitDigit * unitDigit);
        const tensDigit = Math.floor(num/10);
		num = Math.floor(num/10);
    }
	if(sumOfAllDigits === originalNumber){
		return "Number is an Armstrong number";
    }
	else{
		return "Number is not an Armstrong number";
	}
}
console.log(armStrong(200));


//any digit armstrong number
function anyDigitArmstrongNumber(num){
	const originalNumber = num;
	let numberArray = num.toString().split('');
	let numberOfDigits = numberArray.length;
	let sumOfDigits = 0;
	numberArray.forEach((digit) => {
		sumOfDigits += Math.pow(parseInt(digit),numberOfDigits);
	});
	if(sumOfDigits === originalNumber){
		console.log('Armstrong number');
	}else{
		console.log('Not an Armstrong number');
	}
}
anyDigitArmstrongNumber(1634);