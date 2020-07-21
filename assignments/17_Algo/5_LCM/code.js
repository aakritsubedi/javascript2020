export const lcmCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//Compute GCD</span>
<span style="color: #007020; font-weight: bold">let</span> gcd <span style="color: #666666">=</span> (num1, num2) <span style="color: #666666">=&gt;</span> {
  num1 <span style="color: #666666">=</span> <span style="color: #007020">Math</span>.abs(num1);
  num2 <span style="color: #666666">=</span> <span style="color: #007020">Math</span>.abs(num2);

  <span style="color: #007020; font-weight: bold">return</span> (num2<span style="color: #666666">===</span><span style="color: #40a070">0</span>) <span style="color: #666666">?</span> num1 <span style="color: #666666">:</span> gcd(num2, num1 <span style="color: #666666">%</span> num2);
}

<span style="color: #007020; font-weight: bold">let</span> lcm <span style="color: #666666">=</span> (num1, num2) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">return</span> ((num1 <span style="color: #666666">===</span> <span style="color: #40a070">0</span>) <span style="color: #666666">||</span> (num2 <span style="color: #666666">===</span> <span style="color: #40a070">0</span>)) <span style="color: #666666">?</span> <span style="color: #40a070">0</span> <span style="color: #666666">:</span> <span style="color: #007020">Math</span>.abs(num1 <span style="color: #666666">*</span> num2) <span style="color: #666666">/</span> gcd(num1, num2);
}

console.log(lcm(<span style="color: #40a070">4</span>,<span style="color: #40a070">6</span>)); <span style="color: #60a0b0; font-style: italic">//12</span>
</pre></div>
`;