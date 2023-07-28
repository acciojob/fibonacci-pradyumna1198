function fibonacci(num) {
// your code here
	let n = 0;
	
	for(let i=0;i<=50;i++){

		if(num <= 1)
		{
			return num;
		}
	return fibonacci(num - 1) + fibonacci(num - 2);}
}

module.exports = fibonacci;
