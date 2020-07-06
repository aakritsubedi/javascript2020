import { variableSyntaxCode, variableExampleCode, accessingVariableCode, multipleDeclarationCode, letVarExampleCode, varScopeCode, letScopeCode, loopScopeCode, functionScopeCode, letRedeclarationCode, varRedeclarationCode, example1Code, example2Code, constantExampleCode } from './code.js';

const variableSyntax = document.getElementById('variable-syntax');
const variableExamples = document.getElementById('variable-examples');
const accessingVariable = document.getElementById('accessing-variable');
const multipleDeclaration = document.getElementById('multiple-declaration');
const letVarExample = document.getElementById('let-var-example');
const varScope = document.getElementById('var-scope');
const letScope = document.getElementById('let-scope');
const loopScope = document.getElementById('loop-scope');
const functionScope = document.getElementById('function-scope');
const letRedeclaration = document.getElementById('let-redeclaration');
const varRedeclaration = document.getElementById('var-redeclaration');
const example1 = document.getElementById('example1');
const example2 = document.getElementById('example2');
const constantExample = document.getElementById('constant-example');


variableSyntax.innerHTML = variableSyntaxCode;
variableExamples.innerHTML = variableExampleCode;
accessingVariable.innerHTML = accessingVariableCode;
multipleDeclaration.innerHTML = multipleDeclarationCode;
letVarExample.innerHTML = letVarExampleCode;
varScope.innerHTML = varScopeCode;
letScope.innerHTML = letScopeCode;
loopScope.innerHTML = loopScopeCode;
functionScope.innerHTML = functionScopeCode;
letRedeclaration.innerHTML = letRedeclarationCode;
varRedeclaration.innerHTML = varRedeclarationCode;
example1.innerHTML = example1Code;
example2.innerHTML = example2Code;
constantExample.innerHTML = constantExampleCode;