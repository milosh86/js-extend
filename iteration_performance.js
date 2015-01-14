// init
var n = 10000,
	bigArr = Array(n);
while (n--) {
	bigArr[n] = n;//{a:1, b:"hello"};
}
//

// it seems that regular for loop with 'cached' i and n has the best performance. Generaly, there is no much of the difference between any of the for loop forms.
function forLoopCached() {
	var i,
		n;
	
	for (i = 0, n = bigArr.length; i < n; i++) {
		bigArr[i];//bigArr[i].a + bigArr[i].b;
	}
}


function forLoop() {
	for (var i=0; i < bigArr.length; i++) {
		bigArr[i];//bigArr[i].a + bigArr[i].b;
	}
}

function forLoopReverse() {
	var n = bigArr.length - 1;
	
	for (; n >= 0; n--) {
		bigArr[n];//bigArr[n].a + bigArr[n].b;
	}
}

function whileLoop() {
	var n = bigArr.length;
	
	while (n--) {
		bigArr[n];//bigArr[n].a + bigArr[n].b;
	}
}

function forEachLoop() {
	bigArr.forEach(function (el) {el});
}

measure(forLoop, '_for loop_', 10000);
measure(forLoopCached, '_for loop cached', 10000);
measure(forLoopReverse, '_for loop reverse_', 10000);
measure(whileLoop, '_while loop_', 10000);
measure(forEachLoop, '_for Each Loop_', 10000);
