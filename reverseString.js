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