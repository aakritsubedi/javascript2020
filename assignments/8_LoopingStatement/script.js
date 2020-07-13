import { forSyntaxCode, forExampleCode, whileSyntaxCode, whileExampleCode, doWhileSyntaxCode, doWhileExampleCode } from './code.js';

document.getElementById('for-syntax').innerHTML = forSyntaxCode;
document.getElementById('for-example').innerHTML = forExampleCode;
document.getElementById('while-syntax').innerHTML = whileSyntaxCode;
document.getElementById('while-example').innerHTML = whileExampleCode;
document.getElementById('do-while-syntax').innerHTML = doWhileSyntaxCode;
document.getElementById('do-while-example').innerHTML = doWhileExampleCode;