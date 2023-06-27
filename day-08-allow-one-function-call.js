/*
https://leetcode.com/problems/allow-one-function-call/

Easy

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

    The first time the returned function is called, it should return the same result as fn.
    Every subsequent time it is called, it should return undefined.


Runtime 59 ms Beats 54.93%
Memory 41.6 MB Beats 87.93%
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    return function(...args){
        if(!fn.called){
            let v = fn(...args);
            fn.called = true;
            return v;
        }
        else
            return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */