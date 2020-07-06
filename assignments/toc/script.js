// List of all table of content 
const tableOfContent = [
  { sn: 1, title: 'Introduction to JS', desc: '...' ,github: '#', demo: '#'}
]

let toc = document.getElementById('toc');

tableOfContent.forEach(content => {
  let tr = document.createElement('tr');
  for (key in content) {
    let td = document.createElement('td');
    td.innerText = content[key];
    tr.appendChild(td);
  }

  toc.appendChild(tr);
})