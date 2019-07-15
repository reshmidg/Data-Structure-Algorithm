function isPrime(num){
	var isPrime = false;
	if(num === 1){
		isPrime = false;
		return isPrime;
	}else if(num === 2){
		isPrime = true;
		return isPrime;
	}else{
	    for(let i=2;i<=Math.sqrt(num);i++){
	        if(num % i === 0){
	            isPrime = false;
				return isPrime;
	        }else{
	            isPrime = true;
				
	        }
	    }
	    return isPrime;
    }
}

console.log(isPrime(121));