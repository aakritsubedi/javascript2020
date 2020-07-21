export const gcdRecursiveCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> gcd <span style="color: #666666">=</span> (no1, no2) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> num1 <span style="color: #666666">=</span> <span style="color: #007020">Math</span>.abs(no1);
  <span style="color: #007020; font-weight: bold">let</span> num2 <span style="color: #666666">=</span> <span style="color: #007020">Math</span>.abs(no2);

  <span style="color: #60a0b0; font-style: italic">// To make algorithm work faster instead of subtracting one number from the other we use mod op.</span>
  <span style="color: #007020; font-weight: bold">let</span> result <span style="color: #666666">=</span> (num2<span style="color: #666666">===</span><span style="color: #40a070">0</span>) <span style="color: #666666">?</span> num1 <span style="color: #666666">:</span> gcd(num2, num1 <span style="color: #666666">%</span> num2);

  <span style="color: #007020; font-weight: bold">return</span> result;
}

console.log(gcd(<span style="color: #40a070">252</span>, <span style="color: #40a070">105</span>)); <span style="color: #60a0b0; font-style: italic">//21</span>
console.log(gcd(<span style="color: #40a070">8</span>, <span style="color: #40a070">12</span>)); <span style="color: #60a0b0; font-style: italic">//4</span>
</pre></div>
`;

export const gcdIterativeCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> gcd <span style="color: #666666">=</span> (no1, no2) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> num1 <span style="color: #666666">=</span> <span style="color: #007020">Math</span>.abs(no1);
  <span style="color: #007020; font-weight: bold">let</span> num2 <span style="color: #666666">=</span> <span style="color: #007020">Math</span>.abs(no2);

  <span style="color: #60a0b0; font-style: italic">// Subtract one number from another until both numbers would become the same. </span>
  <span style="color: #60a0b0; font-style: italic">// This will be out GCD. Also quit the loop if one of the numbers is zero.</span>
  <span style="color: #007020; font-weight: bold">while</span>(num1 <span style="color: #666666">&amp;&amp;</span> num2 <span style="color: #666666">&amp;&amp;</span> num1 <span style="color: #666666">!==</span> num2) {
    [num1, num2] <span style="color: #666666">=</span> num1 <span style="color: #666666">&gt;</span> num2 <span style="color: #666666">?</span> [num1<span style="color: #666666">-</span>num2, num2] <span style="color: #666666">:</span> [num1, num2<span style="color: #666666">-</span>num1];
  }

  <span style="color: #007020; font-weight: bold">return</span> num1 <span style="color: #666666">||</span> num2;
}

console.log(gcd(<span style="color: #40a070">252</span>, <span style="color: #40a070">105</span>)); <span style="color: #60a0b0; font-style: italic">//21</span>
console.log(gcd(<span style="color: #40a070">8</span>, <span style="color: #40a070">12</span>)); <span style="color: #60a0b0; font-style: italic">//4</span>
</pre></div>
`;