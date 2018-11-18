function reverseInt(num){
	var reverseNum = parseInt(num.toString().split('').reverse().join(''));
	return reverseNum * Math.sign(num);
}
var reversedInt = reverseInt(78);
console.log(reversedInt);