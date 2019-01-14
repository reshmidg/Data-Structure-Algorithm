function sumOfDigitsPalindromeOrNot(num){
	const digitsInNumber = num.toString().split('');
	let sumOfDigit = 0;
	digitsInNumber.forEach((digit) => {
		sumOfDigit += parseInt(digit);
	});

	function isPalindrome(num){
		let isPalindrome = false;
		if(num>=10){
            let numberArray = num.toString().split('');
            let reversedNumber = num.toString().split('').reverse();

            numberArray.forEach((digit) => {
                reversedNumber.forEach((dig)=>{
                    if(digit === dig){
                    isPalindrome = true;
                    }else{
                    isPalindrome = false;
                    return isPalindrome;
                    }
                });
            });
        }
		return isPalindrome;
	}
	return isPalindrome(sumOfDigit);
}
sumOfDigitsPalindromeOrNot(98);