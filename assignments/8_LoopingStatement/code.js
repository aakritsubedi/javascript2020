export const forSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">for</span> (begin; condition; step) {
  <span style="color: #60a0b0; font-style: italic">// ... loop body ...</span>
}
</pre></div>
`;
export const forExampleCode = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> n<span style="color: #666666">=</span><span style="color: #40a070">5</span>;
<span style="color: #007020; font-weight: bold">for</span>(i<span style="color: #666666">=</span><span style="color: #40a070">1</span>;i<span style="color: #666666">&lt;=</span><span style="color: #40a070">10</span>;i<span style="color: #666666">++</span>){
  console.log(<span style="border: 1px solid #FF0000">\`</span>\${n} <span style="color: #666666">*</span> \${i} <span style="color: #666666">=</span> \${n<span style="color: #666666">*</span>i}<span style="border: 1px solid #FF0000">\`</span>);
}
</pre></div>
`;

export const whileSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">while</span> (condition) {
  <span style="color: #60a0b0; font-style: italic">// code</span>
}
</pre></div>
`;
export const whileExampleCode = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> j <span style="color: #666666">=</span> <span style="color: #40a070">1</span>; <span style="color: #60a0b0; font-style: italic">//initilization</span>
<span style="color: #007020; font-weight: bold">while</span> (j <span style="color: #666666">&lt;=</span> <span style="color: #40a070">10</span>) {
  console.log(<span style="border: 1px solid #FF0000">\`</span>\${n} <span style="color: #666666">*</span> $\{j} <span style="color: #666666">=</span> \${n<span style="color: #666666">*</span>j}<span style="border: 1px solid #FF0000">\`</span>);
  j<span style="color: #666666">++</span>; <span style="color: #60a0b0; font-style: italic">//update</span>
}
</pre></div>
`;

export const doWhileSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">do</span> {
  <span style="color: #60a0b0; font-style: italic">// loop body</span>
  <span style="color: #60a0b0; font-style: italic">//code is exectued once even if condition fails in first case</span>
} <span style="color: #007020; font-weight: bold">while</span> (condition);
</pre></div>
`;
export const doWhileExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> k <span style="color: #666666">=</span> <span style="color: #40a070">1</span>; <span style="color: #60a0b0; font-style: italic">//initilize</span>
<span style="color: #007020; font-weight: bold">do</span> {
  console.log(<span style="border: 1px solid #FF0000">\`</span>\${n} <span style="color: #666666">*</span> \${k} <span style="color: #666666">=</span> \${n<span style="color: #666666">*</span>k}<span style="border: 1px solid #FF0000">\`</span>);
  k<span style="color: #666666">++</span>; <span style="color: #60a0b0; font-style: italic">//update</span>
}<span style="color: #007020; font-weight: bold">while</span>(k <span style="color: #666666">&lt;=</span> <span style="color: #40a070">10</span>);
</pre></div>
`;