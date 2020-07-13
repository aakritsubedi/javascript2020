import { functionSyntaxCode, functionEgOneCode, functionVariableCode, funcParameterCode, funcDefaultValueCode, funcDefaultAlternateCode, nullishOperatorCode, functionReturnCode, emptyReturnCode, breakFunctionCode } from './code.js';

document.getElementById('function-syntax').innerHTML = functionSyntaxCode;
document.getElementById('function-eg-one').innerHTML = functionEgOneCode;
document.getElementById('function-variable').innerHTML = functionVariableCode;
document.getElementById('func-parameters').innerHTML = funcParameterCode;
document.getElementById('func-default-value').innerHTML = funcDefaultValueCode;
document.getElementById('func-default-alternate').innerHTML = funcDefaultAlternateCode;
document.getElementById('nullish-operator').innerHTML = nullishOperatorCode;
document.getElementById('func-return').innerHTML = functionReturnCode;
document.getElementById('empty-return').innerHTML = emptyReturnCode;
document.getElementById('break-function').innerHTML = breakFunctionCode;