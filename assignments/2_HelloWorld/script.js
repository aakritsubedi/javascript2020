import { helloWorldCode, scriptTagCode, externalScriptCode1, externalScriptCode2, multipleScriptCode, wontWorkCode, multipleWorkingCode } from './code.js';

const helloWorld = document.getElementById('hello-world');
const scriptTag = document.getElementById('script-tag'); 
const externalScript1 = document.getElementById('external-script1');
const externalScript2 = document.getElementById('external-script2');
const multipleScript = document.getElementById('multiple-script');
const wontWork = document.getElementById('wont-work');
const multipleWorking = document.getElementById('multiple-working');


helloWorld.innerHTML = helloWorldCode;
scriptTag.innerHTML = scriptTagCode;
externalScript1.innerHTML = externalScriptCode1;
externalScript2.innerHTML = externalScriptCode2;
multipleScript.innerHTML = multipleScriptCode;
wontWork.innerHTML = wontWorkCode;
multipleWorking.innerHTML = multipleWorkingCode;


