var measure = (function () {
	function measure(fun, desc, count) {
		desc || (desc = '');
		count || (count = 1);
		
		console.log('starting performance measuring: %s', desc);
		
		var start = performance.now(),
			end,
			elapsed;
		
		while (count) {
			fun();
			count--;
		}
		
		
		end = performance.now();
		
		elapsed = end - start;
		console.log('measuring ended: %s, result: %s [ms]', desc, elapsed);
		
		return elapsed;
	}
	
	return measure;
}());