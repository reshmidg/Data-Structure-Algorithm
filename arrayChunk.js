/*
Create empty array to hold chunks called 'chunked'
For each element in the *unchunked* array
	Retrieve the last element in 'chunked'
	If last element doest not exist, or if it's length is equal to chunk size
		Push a new chunk into 'chunked' with the current element
	Else add the current element into the chunk

*/

function arrayChunk(myArr,size){
	const arrayChunk = [];
	for(let i of myArr){
		const last = arrayChunk[arrayChunk.length-1];
		if(!last || last.length === size){
			arrayChunk.push([i]);
		}else{
			last.push(i);
		}
	}
	return arrayChunk;
}

var myArr = [1,6,3,8,2,5,4];
arrayChunk(myArr,2);


/*
Create empty 'chunked' array
Create 'index' start at 0
Wile index is less than array.length
	Push a slice of length 'size' from 'array' into 'chunked'
	Add 'size' to 'index'
*/
function arrayChunk(myArr,size){
	let arrayChunk = [];
	let index = 0;
	while(index < myArr.length){
		arrayChunk.push(myArr.slice(index,index+size));
		index = index + size;
	}
	return arrayChunk;
}

var myArr = [1,6,3,8,2,5,4];
var chunks = arrayChunk(myArr,2);
console.log(chunks);


