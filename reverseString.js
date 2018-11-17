function reverse(str){
	var reversedString = '';
	var arrStr = str.substr(0,str.length);
	for(var i=arrStr.length; i>=0; i--){
		reversedString += arrStr[i];
	}
	return reversedString;
}

var reverseString = reverse('apple');

console.log(reverseString);

//Solution 2
function reverse(str){
	return str.split('').reverse().join();
}

//Other solution of for loop
function reverse(str){
	let reversedString = '';
	
	for(let character of str){
		reversedString = character + reversedString;
	}
	return reversedString;
}

var reverseString = reverse('apple');

console.log(reverseString);

// Solution 3
function reverse(str){
	let reversed = '';
	return str.split('').reduce((reversed,character)=>{
		return character+reversed;
	},'');
}
var reversedStr = reverse('apple');
console.log(reversedStr);

// Optimize solution 3
function reverse(str){
	let rev = '';
	return str.split('').reduce((rev,ch)=>ch+rev,'');
}
var reversedStr = reverse('apple');
console.log(reversedStr);