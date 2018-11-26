const getIds = function(x){
	console.log('x is: ' + x)
		var start = x + 1
		var nums = []
		for (var i = start; i < start + 10; i ++){
			nums.push(i)
		}
		var idString = '';
		nums.forEach(function(num){
			idString = idString + num + '|';
		})
		idString = idString.slice(0, -1);
		console.log('idString: ' + idString)
		return idString;
	}

export default getIds