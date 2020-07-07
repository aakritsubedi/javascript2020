import { dynamicallyTypedCode, stringCode, numberCode, bigIntCode, booleanCode, nullCode, undefinedCode, objectCode, typeofCode } from './code.js';

const dynamicallyTyped = document.getElementById('dynamically-typed');
const string = document.getElementById('string');
const number = document.getElementById('number');
const bigInt = document.getElementById('big-int');
const boolean = document.getElementById('boolean');
const nullValue = document.getElementById('null-value');
const undefinedValue = document.getElementById('undefined-value');
const objects = document.getElementById('objects');
const typeofVal = document.getElementById('typeof')

dynamicallyTyped.innerHTML = dynamicallyTypedCode;
string.innerHTML = stringCode;
number.innerHTML = numberCode;
bigInt.innerHTML = bigIntCode;
boolean.innerHTML = booleanCode;
nullValue.innerHTML = nullCode;
undefinedValue.innerHTML = undefinedCode;
objects.innerHTML = objectCode;
typeofVal.innerHTML = typeofCode;