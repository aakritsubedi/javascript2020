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
  { sn: 15.1, title: 'Problem Solving in Array', github: '15.1_Array', demo: '15.1_Array' },
  { sn: 15.2, title: 'Queue Implementation (WIP)', github: '15.2_Queue', demo: '15.2_Queue'},
  { sn: 15.3, title: 'Stack Implementation (WIP)', github: '15.3_Stack', demo: '15.3_Stack'},
  { sn: 15.4, title: 'Linked List Implementation (WIP)', github: '15.4_LinkedList', demo: '15.4_LinkedList' },
  { sn: 15.5, title: 'Tree Implementation (WIP)', github: '15.5_Tree', demo: '15.5_Tree'},
  { sn: 15.6, title: 'Graph Implementation (WIP)', github: '15.6_Graph', demo: '15.6_Graph'},
  { sn: 15.7, title: 'Hash Tables Implementation (WIP)', github: '15.7_HashTables', demo: '15.7_HashTables'}
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