// List of all table of content 
const tableOfContent = [
  { sn: 1, title: 'Factorial', github: '1_Factorial', demo: '1_Factorial' },
  { sn: 2, title: 'Fibonacci Number', github: '2_FibonacciNo', demo: '2_FibonacciNo'},
  { sn: 3, title: 'Primality Test(Prime no. or not)', github:'3_Primality', demo: '3_Primality'},
  { sn: 4, title: 'Euclidean algorithm, calculate GCD', github: '4_GCD', demo: '4_GCD'},
  { sn: 5, title: 'Least Common Factor, LCM', github: '5_LCM', demo:'5_LCM'},
  { sn: 6, title: 'Sieve of Eratosthenes', github: '6_SieveOfEratosthenes', demo: '6_SieveOfEratosthenes'}
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