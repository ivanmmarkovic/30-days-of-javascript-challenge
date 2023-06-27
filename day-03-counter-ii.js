/*
https://leetcode.com/problems/counter-ii/

Easy

Write a function createCounter. 
It should accept an initial integer init. 
It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.


Runtime72 ms Beats 33.47%
Memory 44.5 MB Beats 77.74%
*/


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    
    let i = init;

    return {
        increment(){
            init++;
            return init;
        },
        decrement(){
            init--;
            return init;
        },
        reset(){
            init = i;
            return init;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */