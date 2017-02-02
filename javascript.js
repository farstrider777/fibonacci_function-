function computeFibonacciNumber(fibPosition){
	if(fibPosition === 0){
		return 0;
	} else if(fibPosition === 1) {
		return 1;
	}	else {
		return computeFibonacciNumber(fibPosition - 1) + computeFibonacciNumber(fibPosition - 2)
	}
}


var fun = [1]

function fact (n) {
	var loop = function (product, count, max) {
		if (count > max) {
			return product;
		} else {
			fun.push(product);
			return loop(product + fun[count], count + 1 , max);
		}
	};
return loop(0, 0, n - 1);
}

console.log(fact(7))
console.log(fun)
