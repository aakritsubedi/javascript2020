// List of all table of content 
const tableOfContent = [
  { sn: 1, title: 'Problem Solving in Array', github: '1_Array', demo: '1_Array' },
  { sn: 2, title: 'Queue Implementation', github: '2_Queue', demo: '2_Queue'},
  { sn: 3, title: 'Stack Implementation', github: '3_Stack', demo: '3_Stack'},
  { sn: 4, title: 'Linked List Implementation', github: '4_LinkedList', demo: '4_LinkedList' },
  { sn: 5, title: 'Tree Implementation (WIP)', github: '5_Tree', demo: '5_Tree'},
  { sn: 6, title: 'Graph Implementation (WIP)', github: '6_Graph', demo: '6_Graph'},
  { sn: 7, title: 'Hash Tables Implementation (WIP)', github: '7_HashTables', demo: '7_HashTables'}
]

let getGithubLink = value => {
  return `<a href='https://github.com/aakritsubedi/javascript2020/blob/gh-pages/assignments/16_DS/${value}' target='_blank'>Code</a>`;
}
let getDemoLink = value => {
  console.log(value);
  return `<a href='./${value}'>Demo</a>`;
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