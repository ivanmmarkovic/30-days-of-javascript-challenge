
/*
https://leetcode.com/problems/counter


Runtime 60 ms Beats 40.25%
Memory 41.8 MB Beats 63.13%

Given an integer n, return a counter function. 
This counter function initially returns n 
and then returns 1 more than the previous value 
every subsequent time it is called (n, n + 1, n + 2, etc).
*/


/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        let v = n;
        n++;
        return v;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */