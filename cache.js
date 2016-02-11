foo = function(x) {
	var y = x + 5;
    console.log("calculating!");
    console.log(y);
    return y;
}
var cache = {};

var memoize = function(foo) {
    return function(x) {
        if (cache[x] === undefined || cache[x] === null) //not null
        {
            return cache[x] = foo(x);
        } else {
        	console.log('cache:'+cache[x]);
            //return cache[x];
        }
    }

};
var memoizedFoo = memoize(foo);

memoizedFoo(5);
// calculating!
// 10

memoizedFoo(5);
// 10 (notice how 'calculating!' is not printed this time)

memoizedFoo(10);
// calculating!
// 15