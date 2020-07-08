// List of all table of content 
const tableOfContent = [
  { sn: 1, title: 'Introduction', github: '1_Intro', demo: '1_Intro'},
  { sn: 2, title: 'Hello World', github: '2_HelloWorld', demo: '2_HelloWorld'},
  { sn: 3, title: 'Varibales', github: '3_Variables', demo: '3_Variables'},
  { sn: 4, title: 'Data Types', github: '4_DataTypes', demo: '4_DataTypes'},
  { sn: 5, title: 'Type Conversions', github: '5_TypeConversions', demo: '5_TypeConversions'}
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