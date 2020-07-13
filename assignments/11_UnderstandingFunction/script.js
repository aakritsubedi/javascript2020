import { addSimpleWayCode, parameterWayCode, defaultWayCode, returnWayCode, returnBestWayCode, validCitizenshipNoCode, voteSimpleWayCode, voteArgumentWayCode, voteDefaultWayCode, voteReturnWayCode, voteReturnBestWayCode } from './code.js';

document.getElementById('add-simple-way').innerHTML = addSimpleWayCode;
document.getElementById('add-parameter-way').innerHTML = parameterWayCode;
document.getElementById('add-default-way').innerHTML = defaultWayCode;
document.getElementById('add-return-way').innerHTML = returnWayCode;
document.getElementById('add-return-best-way').innerHTML = returnBestWayCode;

document.getElementById('valid-citizenship-no').innerHTML =validCitizenshipNoCode;

document.getElementById('vote-simple-way').innerHTML = voteSimpleWayCode;
document.getElementById('vote-argument-way').innerHTML = voteArgumentWayCode;
document.getElementById('vote-default-way').innerHTML = voteDefaultWayCode;
document.getElementById('vote-return-way').innerHTML = voteReturnWayCode;
document.getElementById('vote-return-best-way').innerHTML = voteReturnBestWayCode;




