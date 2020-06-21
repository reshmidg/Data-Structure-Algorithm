function isOddEven(num){
  if(num<=0){
    return 'Number is neither odd nor even.'
  }
  if(num%2===0){
    return 'Number is even.';
  }else{
    return 'Number is odd.';
  }
}
console.log(isOddEven(1));