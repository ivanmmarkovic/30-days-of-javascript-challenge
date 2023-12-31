/*
https://leetcode.com/problems/array-reduce-transformation

Easy

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.


Runtime 57 ms Beats 80.27%
Memory 42.7 MB Beats 37.61%
*/


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    for(let i = 0; i < nums.length; i++){
        let v = fn(init, nums[i]);
        init = v;
    }

    return init;
};