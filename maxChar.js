const str = 'Hello There!';
const charObj = {};

for(var character of str){
	if(!charObj[character])
		charObj[character] = 1;
	else
		charObj[character]++;
}
console.log(charObj);

for(var character of str){
	charObj[character] = charObj[character]+1 || 1;
}
console.log(charObj);

function maxChar(charObj){
	for(var ch of charObj){
		console.log(ch);
	}
}



// Max character solution
var str = 'Hello There!';
var charObj = {};

for(var character of str){
	charObj[character] = charObj[character]+1 || 1;
}
//console.log(charObj);
function maxChar(charObj){
var max = 0;
var maxValue = 0;
var charArrValue = Object.values(charObj);
var charArrKey = Object.keys(charObj);
	for(var ch=0;ch<charArrValue.length ;ch++){
		   if(charArrValue[ch]>max){
				max = charArrValue[ch];
				maxValue = ch;
			}
	}
console.log('Max character is '+charArrKey[maxValue]);
}
maxChar(charObj);