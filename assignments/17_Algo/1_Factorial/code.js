export const factorialCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> factorial <span style="color: #666666">=</span> n <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> fact <span style="color: #666666">=</span> <span style="color: #40a070">1</span>;
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span>n; i<span style="color: #666666">&gt;</span><span style="color: #40a070">1</span>; i<span style="color: #666666">--</span>){
    fact <span style="color: #666666">*=</span> i;
  }

  <span style="color: #007020; font-weight: bold">return</span> fact;
}

console.log(factorial(<span style="color: #40a070">0</span>)); <span style="color: #60a0b0; font-style: italic">//1</span>
console.log(factorial(<span style="color: #40a070">5</span>)); <span style="color: #60a0b0; font-style: italic">//120</span>
console.log(factorial(<span style="color: #40a070">7</span>)); <span style="color: #60a0b0; font-style: italic">//5040</span>
</pre></div>
`;

export const recursiveFactorialCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> factorial <span style="color: #666666">=</span> n <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">if</span>(n<span style="color: #666666">==</span><span style="color: #40a070">0</span>){

    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #40a070">1</span>;
  }
  fact <span style="color: #666666">=</span> n<span style="color: #666666">*</span> factorial(n<span style="color: #666666">-</span><span style="color: #40a070">1</span>);

  <span style="color: #007020; font-weight: bold">return</span> fact;
}

console.log(factorial(<span style="color: #40a070">0</span>)); <span style="color: #60a0b0; font-style: italic">//1</span>
console.log(factorial(<span style="color: #40a070">5</span>)); <span style="color: #60a0b0; font-style: italic">//120</span>
console.log(factorial(<span style="color: #40a070">7</span>)); <span style="color: #60a0b0; font-style: italic">//5040</span>
</pre></div>
`;
