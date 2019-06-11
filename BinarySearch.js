var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess = Math.floor((min + max) / 2);

    if(max < min || guess == 0){
      return -1;
    }
		while(array[guess] != targetValue && min < max){
			if(array[guess] < targetValue){
				min = guess + 1;
			}else if(array[guess] > targetValue){
				max = guess - 1;
			}
			guess = Math.floor((min + max) / 2);
		}
		
		if(array[guess] == targetValue){
				return guess;
		}
  
};

console.log(doSearch([1,2,3,4,5,6,7],2));