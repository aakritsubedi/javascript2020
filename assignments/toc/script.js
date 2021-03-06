// List of all table of content 
const tableOfContent = [
  { sn: 1, title: 'Introduction', github: '1_Intro', demo: '1_Intro'},
  { sn: 2, title: 'Hello World', github: '2_HelloWorld', demo: '2_HelloWorld'},
  { sn: 3, title: 'Varibales', github: '3_Variables', demo: '3_Variables'},
  { sn: 4, title: 'Data Types', github: '4_DataTypes', demo: '4_DataTypes'},
  { sn: 5, title: 'Type Conversions', github: '5_TypeConversions', demo: '5_TypeConversions'},
  { sn: 6, title: 'Basic operators, maths', github: '6_BasicOperators', demo: '6_BasicOperators'},
  { sn: 7, title: 'Conditional Statement', github: '7_CoditionalStatement', demo: '7_CoditionalStatement'},
  { sn: 8, title: 'Looping Statement', github: '8_LoopingStatement', demo: '8_LoopingStatement'},
  { sn: 9, title: 'Task: Printing patterns', github: '9_PrintingPatterns', demo: '9_PrintingPatterns'},
  { sn: 10, title: 'Functions', github: '10_Functions', demo: '10_Functions'},
  { sn: 11, title: 'Understanding Function with more examples', github: '11_UnderstandingFunction', demo: '11_UnderstandingFunction'},
  { sn: 12, title: 'Function Expressions, Callback Function, Arrow Function', github: '12_MoreFunction', demo: '12_MoreFunction'},
  { sn: 13, title: 'Objects', github: '13_Objects', demo: '13_Objects'},
  { sn: 14, title: 'Array', github: '14_Array', demo: '14_Array'},
  { sn: 15, title: 'Data Structure', github: '15_DataStructure', demo: '15_DataStructure' },
  { sn: 16, title: 'Implementation of Data Structure', github: '16_DS', demo: '16_DS' },
  { sn: 17, title: 'Implementation of Algorithm', github: '17_Algo', demo: '17_Algo'}
]

let getGithubLink = value => {
  return `<a href='https://github.com/aakritsubedi/javascript2020/blob/gh-pages/assignments/${value}' target='_blank'>Code</a>`;
}
let getDemoLink = value => {
  return `<a href='../${value}'>Demo</a>`
}

let toc = document.getElementById('toc');

tableOfContent.forEach(content => {
  let tr = document.createElement('tr');
  for (key in content) {
    let td = document.createElement('td');
    if(key !== 'github' && key !== 'demo'){
      td.innerText = content[key];
    }
    else {
      td.innerHTML = key === 'demo' ? getDemoLink(content[key]) : getGithubLink(content[key]);
    }
      tr.appendChild(td);
  }
  
  toc.appendChild(tr);
})