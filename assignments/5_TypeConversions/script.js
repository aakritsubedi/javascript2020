import { stringCoversionCode, numericConversionCode, numericRulesCode, booleanConversionCode } from './code.js';


const stringCoversion = document.getElementById('string-conversion');
const numericConversion = document.getElementById('numeric-conversion');
const numericRules = document.getElementById('numeric-rules');
const booleanConversion = document.getElementById('boolean-conversion');

stringCoversion.innerHTML = stringCoversionCode;
numericConversion.innerHTML = numericConversionCode;
numericRules.innerHTML = numericRulesCode;
booleanConversion.innerHTML = booleanConversionCode;
