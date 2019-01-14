function factorial(num){
	let factorial = 1;
	if(num == 1 || num == 0){
    	return 1;
    }
	while(num >= 1){
		factorial = factorial * num;
		num--;
	}
	return factorial;
}
console.log(factorial(0));