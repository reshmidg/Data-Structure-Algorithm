function fibonacci(n){
	if(n<2){
		return 1;
	}else{
		return fibonacci(n-1) + fibonacci(n-2);
	}
}
var fibonacciSeries = 0;
for(var i=8; i>0; i--){
 	fibonacciSeries = fibonacci(i);
	console.log(fibonacciSeries);
}