# js-extend
Comparing performance of different JS object extension methods [learning purposes only]

Examined patterns:
* es5Extend - properties copying based on ES5 Object.keys and forEach functions. [copies only 'base' object props, no proto]
* es3Extend - properties copying based on for-in loop and Object.hasOwnProperty to filter properties from prototypes. [copies only 'base' object props, no proto]
* _extend - Underscore 1.7 extend function. (same as es3Extend)[copies only 'base' object props, no proto] It looks like the future release will change extend function to copy all properties including prototypes.
* withProtoExtend - properties copying based on for-in loop without Object.hasOwnProperty [copy all properties including prototypes]
