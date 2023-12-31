/*
https://leetcode.com/problems/apply-transform-over-each-element-in-array

Easy

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.


Runtime 55 ms Beats 76.87%
Memory 41.6 MB Beats 91.80%
*/


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let r = [];

    for(let i = 0; i < arr.length; i++){
        r.push(fn(arr[i], i));
    }

    return r;
};