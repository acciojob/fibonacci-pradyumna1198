function fibonacci(num) {
// your code here
	const n = 0;
	if(num <= 1)
	{
		return num;
	}
	for(let i=0;i<=50;i++){
	return fibonacci(num-1) + fibonacci(num-2);}
}

module.exports = fibonacci;
