import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
	let arr = n.toString().split("");
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		arr2.push(Number(arr[i]));
	}
	function getMaxOfArray(numArray) {
  	return Math.min.apply(null, numArray);
	}
	let res = getMaxOfArray(arr2);
	for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] === res) {
			arr2.splice(i, 1);
		}
	}
	let result = Number(arr2.join(""));
	return result;
}
