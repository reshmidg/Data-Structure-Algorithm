// If a number n is not a prime, it can be factored into two factors a and b:
// 
// n = a * b
// Now a and b can't be both greater than the square root of n, 
// since then the product a * b would be greater than sqrt(n) * sqrt(n) = n. 
// So in any factorization of n, at least one of the factors must be smaller than the square root of n, 
// and if we can't find any factors less than or equal to the square root, n must be a prime.

function isPrime(num){
	if(num === 1){
		return 'Number is not prime';
	}
	for(let i=2;i<=Math.sqrt(num);i++){
	    if(num % i === 0){
	        return 'Number is prime';
	    }
	}
	return 'Number is not prime';
}

console.log(isPrime(121));