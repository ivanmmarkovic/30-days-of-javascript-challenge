/*
https://leetcode.com/problems/create-hello-world-function/

Easy

Write a function createHelloWorld. It should return a new function that always returns "Hello World". 

Runtime 57 ms Beats 55.38%
Memory 41.4 MB Beats 82.83%
*/

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */