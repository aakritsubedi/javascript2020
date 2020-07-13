import { conditionalStatementCode, ifSyntaxCode, ifExampleCode, elseExampleCode, elseSyntaxCode, elseIfSyntaxCode, elseIfExampleCode, example1Code, example2Code, example3Code, taskOneCode, taskTwoCode, switchSyntaxCode, switchExampleCode, switchExampleOneCode } from './code.js';

const conditionalStatement = document.getElementById('conditional-statement');
const ifSyntax = document.getElementById('if-syntax');
const ifExample = document.getElementById('if-example');
const elseSyntax = document.getElementById('else-syntax');
const elseExample = document.getElementById('else-example');
const elseIfSyntax = document.getElementById('else-if-syntax');
const elseIfExample = document.getElementById('else-if-example');
const example1 = document.getElementById('example-1');
const example2 = document.getElementById('example-2');
const example3 = document.getElementById('example-3');
const taskOne = document.getElementById('task-one');
const taskTwo = document.getElementById('task-two');
const switchSyntax = document.getElementById('switch-syntax');
const switchExample = document.getElementById('switch-example');
const switchExampleOne = document.getElementById('switch-example-one');

conditionalStatement.innerHTML = conditionalStatementCode;
ifSyntax.innerHTML = ifSyntaxCode;
ifExample.innerHTML = ifExampleCode;
elseSyntax.innerHTML = elseSyntaxCode;
elseExample.innerHTML = elseExampleCode;
elseIfSyntax.innerHTML = elseIfSyntaxCode;
elseIfExample.innerHTML = elseIfExampleCode;
example1.innerHTML = example1Code;
example2.innerHTML = example2Code;
example3.innerHTML = example3Code;
taskOne.innerHTML = taskOneCode;
taskTwo.innerHTML = taskTwoCode;
switchSyntax.innerHTML = switchSyntaxCode;
switchExample.innerHTML = switchExampleCode;
switchExampleOne.innerHTML = switchExampleOneCode;

