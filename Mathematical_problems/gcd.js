/*Euclidean Algorithm
If a<b , exchange a and b.
Once a>b, divide a by b. If the remainder is 0, b is the Greatest Common Divisor of a.
If remainder is greater than 0, replace a by b and divide a by the remainder now and follow the same steps until remainder is 0.*/

function GCD(a, b){
	let temp = 0;
	let remainder = 0;
	if(a == 0){
		return b;
	} 
	if(b == 0){
		return a;
	}
	if(a == b){
		return a;
	}
	if(a < b){
        temp = a;
        a = b;
        b = temp;
	}
    while(a%b > 0){
            remainder = a % b;
	    a = b;
	    b = remainder;
    }
	return b;
}
console.log(GCD(98,56));