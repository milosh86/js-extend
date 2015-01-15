# js-extend
Comparing performance of different JS object extension methods [learning purposes only]

Examined patterns:
* es5Extend - properties copying based on ES5 Object.keys and forEach functions. [copies only 'base' object props, no proto]
* es3Extend - properties copying based on for-in loop and Object.hasOwnProperty to filter properties from prototypes. [copies only 'base' object props, no proto]
* _extend - Underscore 1.7 extend function. (same as es3Extend)[copies only 'base' object props, no proto] It looks like the future release will change extend function to copy all properties including prototypes.
* withProtoExtend - properties copying based on for-in loop without Object.hasOwnProperty [copy all properties including prototypes]

*Results:*
es5Extend is a winner! Key factor is Object.keys that is significantly faster than for-in.

Also performed loop iteration performance test (different kinds of for loops, while loop, forEach). Any form of for loop is the fastest way to iterate through array (it seems that variant with caching is most performant). forEach is significantly slower. (Firefox optimized it better than Chrome).

Performance of object creation.

Case: Create object based on some other object.

Methods:
* Constructor function with 'extension' object in prototype
* Built-in Object.create(extension_obj)
* Object.create polyfil
* extend

Test code:
var start = performance.now()
var n = 1000000;
var p = {a:1,b:2,c:3,d:'sdasdasd',y:4};
while (--n) {
    //1. new C; //p is proto
	//2. Object.create(p);
	//3. create(p);
	//4. extend({}, p);
}
var end = performance.now();
console.log(end-start);

Result:
	#1 Constructor function
	#2 Object.create x1.8
	#3 create x2.0
	#4 extend x8.0