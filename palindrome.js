//Solution 1
function palindrome(str){
	var reversedStr = str.split('').reduce((rev,ch)=>ch+rev,'');
	return str == reversedStr ? true : false;
}
var isPalindrome = palindrome('malayalam');
console.log(isPalindrome);

// Solution 2
function palindrome(str){
	var reversedStr = str.split('').reverse().join('');
	return str === reversedStr;
}
var isPalindrome = palindrome('malayalam');
console.log(isPalindrome);

// Solution 3
function palindrome(str){
	return reversedStr = str.split('').every((character,i)=>{
		return character === str[str.length-i-1];
	});
}
var isPalindrome = palindrome('malayalam');
console.log(isPalindrome);