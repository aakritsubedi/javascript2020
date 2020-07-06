// List of all table of content 
const tableOfContent = [
  { sn: 1, title: 'Introduction to JS', github: '1_Intro', demo: '1_Intro'},
  { sn: 2, title: 'Hello World in JS', github: '2_HelloWorld', demo: '2_HelloWorld'}
]

let toc = document.getElementById('toc');

tableOfContent.forEach(content => {
  let tr = document.createElement('tr');
  for (key in content) {
    let td = document.createElement('td');
    if(key !== 'github' && key !== 'demo'){
      td.innerText = content[key];
    }
    else {
      td.innerHTML = key === 'demo' ? `<a href='../${content[key]}'>Demo</a>` : `<a href='https://github.com/aakritsubedi/javascript2020/blob/gh-pages/assignments/${content[key]}' target='_blank'>Code</a>`;
    }
    tr.appendChild(td);
  }

  toc.appendChild(tr);
})