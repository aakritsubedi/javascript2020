export const fibonacciNoCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> fibonacciNo <span style="color: #666666">=</span> (start, n) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">const</span> fibSequence <span style="color: #666666">=</span> [start];
  <span style="color: #007020; font-weight: bold">let</span> currentValue <span style="color: #666666">=</span> start;
  <span style="color: #007020; font-weight: bold">let</span> previousValue <span style="color: #666666">=</span> <span style="color: #40a070">0</span>;

  <span style="color: #007020; font-weight: bold">if</span>(n <span style="color: #666666">==</span><span style="color: #40a070">1</span>) <span style="color: #007020; font-weight: bold">return</span> fibSequence;

  <span style="color: #007020; font-weight: bold">for</span> (<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;</span>n; i<span style="color: #666666">++</span>){
    currentValue <span style="color: #666666">+=</span> previousValue;
    previousValue <span style="color: #666666">=</span> currentValue <span style="color: #666666">-</span> previousValue;

    fibSequence.push(currentValue);
  }

  <span style="color: #007020; font-weight: bold">return</span> fibSequence;
}

console.log(fibonacciNo(<span style="color: #40a070">1</span>,<span style="color: #40a070">10</span>)); <span style="color: #60a0b0; font-style: italic">//[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]</span>
console.log(fibonacciNo(<span style="color: #40a070">55</span>,<span style="color: #40a070">10</span>)); <span style="color: #60a0b0; font-style: italic">//[ 55, 55, 110, 165, 275, 440, 715, 1155, 1870, 3025, 4895 ]</span>
console.log(fibonacciNo(<span style="color: #40a070">1</span>,<span style="color: #40a070">1</span>)); <span style="color: #60a0b0; font-style: italic">//[1,1]</span>


<span style="color: #60a0b0; font-style: italic">//nth term </span>
console.log(fibonacciNo(<span style="color: #40a070">1</span>,<span style="color: #40a070">10</span>)[<span style="color: #40a070">5</span>]); <span style="color: #60a0b0; font-style: italic">//8</span>
</pre></div>
`;

export const fibonacciNoRecursiveCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> fibonacciNo <span style="color: #666666">=</span> (n) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">if</span> (n <span style="color: #666666">==</span> <span style="color: #40a070">0</span>) <span style="color: #007020; font-weight: bold">return</span> <span style="color: #40a070">0</span>;
  <span style="color: #007020; font-weight: bold">else</span> <span style="color: #007020; font-weight: bold">if</span> (n <span style="color: #666666">==</span> <span style="color: #40a070">1</span>) <span style="color: #007020; font-weight: bold">return</span> <span style="color: #40a070">1</span>;
  <span style="color: #007020; font-weight: bold">else</span> <span style="color: #007020; font-weight: bold">return</span> fibonacciNo(n <span style="color: #666666">-</span> <span style="color: #40a070">1</span>) <span style="color: #666666">+</span> fibonacciNo(n <span style="color: #666666">-</span> <span style="color: #40a070">2</span>);
};

<span style="color: #007020; font-weight: bold">let</span> n<span style="color: #666666">=</span><span style="color: #40a070">10</span>;
i<span style="color: #666666">=</span><span style="color: #40a070">1</span>;
<span style="color: #007020; font-weight: bold">for</span> (c <span style="color: #666666">=</span> <span style="color: #40a070">1</span>; c <span style="color: #666666">&lt;=</span> n; c<span style="color: #666666">++</span>) {
  console .log(fibonacciNo(i));<span style="color: #60a0b0; font-style: italic">//[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]</span>
  i<span style="color: #666666">++</span>;
}
</pre></div>
`;

export const nthTermFibonacciCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">// Calculate fibonacci number at specific position using closed form function (Binet&#39;s formula).</span>
<span style="color: #007020; font-weight: bold">let</span> fibnacciNthTerm <span style="color: #666666">=</span> position <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> maxValidPosition <span style="color: #666666">=</span> <span style="color: #40a070">70</span>;

  <span style="color: #007020; font-weight: bold">if</span>(position<span style="color: #666666">&lt;</span><span style="color: #40a070">1</span> <span style="color: #666666">||</span> position <span style="color: #666666">&gt;</span> maxValidPosition) {
    console.log(<span style="border: 1px solid #FF0000">\`</span>Can<span style="border: 1px solid #FF0000">&#39;</span>t handle position smaller than <span style="color: #40a070">1</span> or greater than \${maxValidPosition}<span style="border: 1px solid #FF0000">\`</span>);
  }

  <span style="color: #007020; font-weight: bold">const</span> SQRT5 <span style="color: #666666">=</span> <span style="color: #007020">Math</span>.sqrt(<span style="color: #40a070">5</span>); <span style="color: #60a0b0; font-style: italic">//Calculate √5 to re-use it in further formulas</span>
  <span style="color: #007020; font-weight: bold">const</span> PHI <span style="color: #666666">=</span> (<span style="color: #40a070">1</span> <span style="color: #666666">+</span> SQRT5) <span style="color: #666666">/</span> <span style="color: #40a070">2</span>; <span style="color: #60a0b0; font-style: italic">//Calculate φ constant (≈ 1.61803)</span>

  <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020">Math</span>.floor((PHI <span style="color: #666666">**</span> position) <span style="color: #666666">/</span> SQRT5 <span style="color: #666666">+</span> <span style="color: #40a070">0.5</span>);
}

console.log(fibnacciNthTerm(<span style="color: #40a070">8</span>)); <span style="color: #60a0b0; font-style: italic">//21</span>
</pre></div>
`;