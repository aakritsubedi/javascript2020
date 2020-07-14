export const functionExpressionCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> sayHi <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">function</span>() {
  alert( <span style="color: #4070a0">&quot;Hello&quot;</span> );
};

<span style="color: #007020; font-weight: bold">let</span> x <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">function</span> (a, b) {
  <span style="color: #007020; font-weight: bold">return</span> a <span style="color: #666666">*</span> b
};
</pre></div>
`;

export const copyAsVariableCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> sayHi() {   <span style="color: #60a0b0; font-style: italic">//  create </span>
console.log( <span style="color: #4070a0">&quot;Hello&quot;</span> );
}

<span style="color: #007020; font-weight: bold">let</span> add <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">function</span>(a<span style="color: #666666">=</span><span style="color: #40a070">3</span>,b<span style="color: #666666">=</span><span style="color: #40a070">6</span>) {
<span style="color: #007020; font-weight: bold">return</span> a <span style="color: #666666">+</span> b;
} <span style="color: #60a0b0; font-style: italic">//create using function expression </span>

<span style="color: #007020; font-weight: bold">let</span> func <span style="color: #666666">=</span> sayHi;    <span style="color: #60a0b0; font-style: italic">//  copy</span>
func(); <span style="color: #60a0b0; font-style: italic">// Hello     //  run the copy (it works)!</span>
sayHi(); <span style="color: #60a0b0; font-style: italic">// Hello    //     this still works too (why wouldn&#39;t it)</span>

<span style="color: #007020; font-weight: bold">let</span> summation <span style="color: #666666">=</span> add; <span style="color: #60a0b0; font-style: italic">//copy</span>
console.log(add(<span style="color: #40a070">5</span>,<span style="color: #40a070">10</span>)); <span style="color: #60a0b0; font-style: italic">//15</span>
console.log(summation(<span style="color: #40a070">5</span>,<span style="color: #40a070">10</span>)); <span style="color: #60a0b0; font-style: italic">//15</span>
</pre></div>
`;

export const callbackFunctionCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> ask(question, yes, no) {
  <span style="color: #007020; font-weight: bold">if</span> (confirm(question)) yes()
  <span style="color: #007020; font-weight: bold">else</span> no();
}

<span style="color: #007020; font-weight: bold">function</span> showOk() {
  alert( <span style="color: #4070a0">&quot;You agreed.&quot;</span> );
}

<span style="color: #007020; font-weight: bold">function</span> showCancel() {
  alert( <span style="color: #4070a0">&quot;You canceled the execution.&quot;</span> );
}

<span style="color: #60a0b0; font-style: italic">// usage: functions showOk, showCancel are passed as arguments to ask</span>
ask(<span style="color: #4070a0">&quot;Do you agree?&quot;</span>, showOk, showCancel);
</pre></div>
`;

export const functionDeclerationEgCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">// Function Declaration</span>
<span style="color: #007020; font-weight: bold">function</span> sum(a, b) {
  <span style="color: #007020; font-weight: bold">return</span> a <span style="color: #666666">+</span> b;
}
</pre></div>
`;
export const functionExpressionEgCode = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">// Function Expression</span>
<span style="color: #007020; font-weight: bold">let</span> sum <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">function</span>(a, b) {
  <span style="color: #007020; font-weight: bold">return</span> a <span style="color: #666666">+</span> b;
};
</pre></div>
`;

export const egOneCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">sayHi(<span style="color: #4070a0">&quot;John&quot;</span>); <span style="color: #60a0b0; font-style: italic">// Hello, John</span>
<span style="color: #60a0b0; font-style: italic">//Function Declaration</span>
<span style="color: #007020; font-weight: bold">function</span> sayHi(name) {
  alert( <span style="border: 1px solid #FF0000">\`</span>Hello, \${name}<span style="border: 1px solid #FF0000">\`</span> );
}

sayHello(<span style="color: #4070a0">&quot;John&quot;</span>); <span style="color: #60a0b0; font-style: italic">// error!</span>
<span style="color: #60a0b0; font-style: italic">//Function Expression</span>
<span style="color: #007020; font-weight: bold">let</span> sayHello <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">function</span>(name) {  
  alert( <span style="border: 1px solid #FF0000">\`</span>Hello, \${name}<span style="border: 1px solid #FF0000">\`</span> );
};
</pre></div>
`;

export const arrowFunctionOneCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//Before</span>
hello <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">function</span>() {
  <span style="color: #007020; font-weight: bold">return</span> <span style="color: #4070a0">&quot;Hello World!&quot;</span>;
}

<span style="color: #60a0b0; font-style: italic">//After: with arrow function</span>
hello <span style="color: #666666">=</span> () <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">return</span> <span style="color: #4070a0">&quot;Hello World!&quot;</span>;
}
</pre></div>
`;
export const arrowFunctionSyntax = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> func <span style="color: #666666">=</span> (arg1, arg2, ...argN) <span style="color: #666666">=&gt;</span> expression
</pre></div>
`;

export const arrowFunctionTwoCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> hello <span style="color: #666666">=</span> () <span style="color: #666666">=&gt;</span> <span style="color: #4070a0">&quot;Hello World!&quot;</span>;
</pre></div>
`;
export const arrowFunctionThreeCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> hello <span style="color: #666666">=</span> (val) <span style="color: #666666">=&gt;</span> <span style="color: #4070a0">&quot;Hello &quot;</span> <span style="color: #666666">+</span> val;

<span style="color: #60a0b0; font-style: italic">//also without perentnesis</span>
<span style="color: #60a0b0; font-style: italic">//only one parameter, you can skip the parentheses </span>

<span style="color: #007020; font-weight: bold">let</span> hello <span style="color: #666666">=</span> val <span style="color: #666666">=&gt;</span> <span style="color: #4070a0">&quot;Hello &quot;</span> <span style="color: #666666">+</span> val;
</pre></div>

`;