// #1
var es5Extend = function extend(target) {
    if (typeof target != 'object') // typeof null === 'object'. Use _.isObject !!!!
        return target;
    
    var i,
        n = arguments.length,
        source;
    
    for(i = 1; i < n; i++){
        source = arguments[i];
        // filter null&undefiner source objects - breaks Object.keys
        source && Object.keys(source).forEach(function(key){
            target[key] = source[key];
        });
    }
    
    
    return target;
};

// a little bit faster implementation - for loop instead of forEach. Only valid if source has large number of properties. 
var es5Extend2 = function extend(target) {
    if (typeof target != 'object')
        return target;
    
    var	i,
        n = arguments.length,
        source,
        props,
        propsLen;
    
    for(i = 1; i < n; i++) {
        source = arguments[i];
        if (source) {
          props = Object.keys(source);
        }
        else 
          continue; //skip null and undefined
        
        propsLen = props.length;
        
        for (var k = 0; k < propsLen; k++) {
            var key = props[k];
            target[key] = source[key];
        }
        
    }
  
    return target;
};
// #4
var es3Extend = function extend(target) {
    if (typeof target != 'object')
        return target;
    
    var sources = [].slice.call(arguments, 1),
        i = 0,
        n = sources.length,
        source;
    
    for(; i < n; i++){
        source = sources[i];
        for(var prop in source) {
            if (hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    
    
    return target;
};

// #3
var _extend = function(obj) {
    if (typeof obj != 'object') return obj;
    var source, prop;
    
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
};

// #2
var withProtoExtend = function(obj) {
    if (typeof obj != 'object') return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
          obj[prop] = source[prop];
        
      }
    }
    return obj;
};

var proto = {pprop1:1, pprop2:'protostring', pproto3: {a:'proto object'}};

var o1 = Object.create(proto);

var arguments = [{a:'base'}];

for(var i = 0; i < 100; i++) {
    var o = Object.create(proto);
    o.a = 'added';
    o.b = i;
    arguments.push(o);
}
    

var start = performance.now();

var n = 10000;
while (--n) {
    arguments[0]={};
    es5Extend.apply(null, arguments);
}

var end = performance.now();

console.log('Time elapsed for ES5: %s', end-start);

var start = performance.now();

var n = 10000;
while (--n) {
    arguments[0]={};
    es5Extend2.apply(null, arguments);
}

var end = performance.now();

console.log('Time elapsed for ES5_2: %s', end-start);

var start = performance.now();

var n = 10000;
while (--n) {
    arguments[0]={};
    es5Extend3.apply(null, arguments);
}

var end = performance.now();

console.log('Time elapsed for ES5_3: %s', end-start);


var start = performance.now();

var n = 10000;
while (--n) {
    arguments[0]={};
    es3Extend.apply(null, arguments);
}

var end = performance.now();

console.log('Time elapsed for ES3: %s', end-start);


var start = performance.now();

var n = 10000;
while (--n) {
    arguments[0]={};
    _extend.apply(null, arguments);
}

var end = performance.now();

console.log('Time elapsed for Underscore: %s', end-start);

var start = performance.now();

var n = 10000;
while (--n) {
    arguments[0]={};
    withProtoExtend.apply(null, arguments);
}

var end = performance.now();

console.log('Time elapsed for withProto: %s', end-start);
