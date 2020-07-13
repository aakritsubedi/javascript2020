export const patternOneCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i <span style="color: #666666">&lt;</span> <span style="color: #40a070">5</span>; i<span style="color: #666666">++</span>){
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> j<span style="color: #666666">=</span><span style="color: #40a070">0</span>; j<span style="color: #666666">&lt;</span><span style="color: #40a070">5</span>; j<span style="color: #666666">++</span>){
    process.stdout.write(<span style="color: #4070a0">&quot; * &quot;</span>);
  }
  process.stdout.write(<span style="color: #4070a0">&#39;\n&#39;</span>);
}
</pre></div>
`;

export const patternTwoCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> n<span style="color: #666666">=</span><span style="color: #40a070">8</span>;
<span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;</span>n; i<span style="color: #666666">++</span>){
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> j<span style="color: #666666">=</span><span style="color: #40a070">0</span>; j<span style="color: #666666">&lt;=</span>i; j<span style="color: #666666">++</span>){
    process.stdout.write(<span style="color: #4070a0">&quot; * &quot;</span>);
  }
  process.stdout.write(<span style="color: #4070a0">&quot;\n&quot;</span>);
}
</pre></div>
`;

export const patternThreeCode = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> n <span style="color: #666666">=</span> <span style="color: #40a070">8</span>;
<span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;=</span>n; i<span style="color: #666666">++</span>){
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> j<span style="color: #666666">=</span>n; j<span style="color: #666666">&gt;=</span>i; j<span style="color: #666666">--</span>){
    process.stdout.write(<span style="color: #4070a0">&quot; &quot;</span>);
  }
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> k<span style="color: #666666">=</span><span style="color: #40a070">1</span>; k<span style="color: #666666">&lt;=</span>i; k<span style="color: #666666">++</span>){
    process.stdout.write(<span style="color: #4070a0">&quot;*&quot;</span>);
  }
  process.stdout.write(<span style="color: #4070a0">&quot;\n&quot;</span>);
}
</pre></div>
`;
export const patternFourCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> n<span style="color: #666666">=</span><span style="color: #40a070">5</span>; <span style="color: #007020; font-weight: bold">let</span> t <span style="color: #666666">=</span><span style="color: #40a070">0</span>;
<span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">1</span>; i<span style="color: #666666">&lt;</span>n; i<span style="color: #666666">++</span>){
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> k<span style="color: #666666">=</span>t; k<span style="color: #666666">&lt;</span>n; k<span style="color: #666666">++</span>){
   process.stdout.write(<span style="color: #4070a0">&quot; &quot;</span>);
  }
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> j<span style="color: #666666">=</span><span style="color: #40a070">0</span>; j<span style="color: #666666">&lt;</span>i; j<span style="color: #666666">++</span>){
   process.stdout.write(<span style="color: #4070a0">&quot; * &quot;</span>);
   t<span style="color: #666666">++</span>;
  }
  process.stdout.write(<span style="color: #4070a0">&quot;\n&quot;</span>);
}
</pre></div>
`;