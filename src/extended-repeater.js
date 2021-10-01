import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  	if (str === null)
		str = String(str);
	if (options.addition === null)
		options.addition = String(options.addition);
	if (options.separator === undefined) {
		options.separator = '+';
	}
	if (options.additionSeparator === undefined) {
		options.additionSeparator = '|';
  }
	if (options.addition === undefined){
		options.addition = '';
	}
	if (options.repeatTimes === undefined)
		options.repeatTimes = 1;
	if (options.additionRepeatTimes == undefined)
		options.additionRepeatTimes = options.addition ? 1 : 0;
	return new Array(options.repeatTimes).fill(str + Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator)).join(options.separator);
}
