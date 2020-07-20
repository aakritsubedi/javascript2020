// List of all table of content 
const tableOfContent = [
  { sn: 1, title: 'Factorial', github: '1_Factorial', demo: '1_Factorial' },
]

let getGithubLink = value => {
  return `<a href='https://github.com/aakritsubedi/javascript2020/blob/gh-pages/assignments/17_Algo/${value}' target='_blank'>Code</a>`;
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