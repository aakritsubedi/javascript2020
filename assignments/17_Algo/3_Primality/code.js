export const primalityTestCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> isPrime <span style="color: #666666">=</span> n <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">if</span>(n <span style="color: #666666">&lt;=</span> <span style="color: #40a070">3</span>){
    <span style="color: #007020; font-weight: bold">return</span> n <span style="color: #666666">&gt;</span> <span style="color: #40a070">1</span>;
  }
  <span style="color: #007020; font-weight: bold">else</span> <span style="color: #007020; font-weight: bold">if</span>(n<span style="color: #666666">%</span><span style="color: #40a070">2</span> <span style="color: #666666">==</span> <span style="color: #40a070">0</span> <span style="color: #666666">||</span> n<span style="color: #666666">%</span><span style="color: #40a070">3</span> <span style="color: #666666">==</span> <span style="color: #40a070">0</span>) {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
  }

  <span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">5</span>;
  <span style="color: #007020; font-weight: bold">while</span>(i<span style="color: #666666">*</span>i <span style="color: #666666">&lt;=</span> n) {
    <span style="color: #007020; font-weight: bold">if</span>(n<span style="color: #666666">%</span>i <span style="color: #666666">==</span> <span style="color: #40a070">0</span> <span style="color: #666666">||</span> n<span style="color: #666666">%</span>(i<span style="color: #666666">+</span><span style="color: #40a070">2</span>) <span style="color: #666666">==</span><span style="color: #40a070">0</span>) {
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
    }
    i <span style="color: #666666">+=</span><span style="color: #40a070">6</span>;
  }

  <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>;
}

console.log(isPrime(<span style="color: #40a070">5</span>)); <span style="color: #60a0b0; font-style: italic">//true</span>
console.log(isPrime(<span style="color: #40a070">4</span>)); <span style="color: #60a0b0; font-style: italic">//false</span>
console.log(isPrime(<span style="color: #40a070">12</span>)); <span style="color: #60a0b0; font-style: italic">//false</span>
console.log(isPrime(<span style="color: #40a070">117</span>)); <span style="color: #60a0b0; font-style: italic">//false</span>
console.log(isPrime(<span style="color: #40a070">17</span>)); <span style="color: #60a0b0; font-style: italic">//true</span>
</pre></div>
`;