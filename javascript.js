function computeFibonacciNumber(fibPosition){
	if(fibPosition === 0){
		return 0;
	} else if(fibPosition === 1) {
		return 1;
	}	else {
		return computeFibonacciNumber(fibPosition - 1) + computeFibonacciNumber(fibPosition - 2)
	}
}
