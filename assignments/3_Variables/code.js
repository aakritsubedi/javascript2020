export const variableSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> <span style="color: #666666">&lt;</span>variable<span style="color: #666666">-</span>name<span style="color: #666666">&gt;</span>;

<span style="color: #007020; font-weight: bold">let</span> <span style="color: #666666">&lt;</span>variable<span style="color: #666666">-</span>name<span style="color: #666666">&gt;</span> <span style="color: #666666">=</span> <span style="color: #666666">&lt;</span>value<span style="color: #666666">&gt;</span>;
</pre></div>

`;

export const variableExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> name <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Aakrit Subedi&#39;</span>;
<span style="color: #007020; font-weight: bold">let</span> age <span style="color: #666666">=</span> <span style="color: #40a070">24</span>;
<span style="color: #007020; font-weight: bold">let</span> gender <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Male&#39;</span>;
<span style="color: #007020; font-weight: bold">let</span> isNepali;
<span style="color: #007020; font-weight: bold">let</span> contactNo;

isNepal <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">true</span>;
contactNo <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;+977-980XXXXXXX&#39;</span>;
</pre></div>
`;

export const accessingVariableCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> name;
message <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Aakrit Subedi&#39;</span>;

alert(message); <span style="color: #60a0b0; font-style: italic">// shows the variable </span>
</pre></div>
`;

export const multipleDeclarationCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> user <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Aakrit Subedi&#39;</span>, age <span style="color: #666666">=</span> <span style="color: #40a070">24</span>, message <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Let\&#39;s learn javascript...&#39;</span>;
</pre></div>
`;

export const letVarExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">var</span> firstName <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Aakrit&quot;</span>;
alert(firstName); <span style="color: #60a0b0; font-style: italic">// Aakrit</span>

<span style="color: #007020; font-weight: bold">let</span> lastName <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Subedi&quot;</span>;
alert(lastName); <span style="color: #60a0b0; font-style: italic">//Subedi</span>
</pre></div>
`;

export const varScopeCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">if</span> (<span style="color: #007020; font-weight: bold">true</span>) {
  <span style="color: #007020; font-weight: bold">var</span> test <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">true</span>; <span style="color: #60a0b0; font-style: italic">// use &quot;var&quot; instead of &quot;let&quot;</span>
}

alert(test); <span style="color: #60a0b0; font-style: italic">// true, the variable lives after if</span>
</pre></div>
`;

export const letScopeCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">if</span> (<span style="color: #007020; font-weight: bold">true</span>) {
  <span style="color: #007020; font-weight: bold">let</span> test <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">true</span>; <span style="color: #60a0b0; font-style: italic">// use &quot;let&quot;</span>
}

alert(test); <span style="color: #60a0b0; font-style: italic">// Error: test is not defined</span>
</pre></div>
`;

export const loopScopeCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">for</span> (<span style="color: #007020; font-weight: bold">var</span> i <span style="color: #666666">=</span> <span style="color: #40a070">0</span>; i <span style="color: #666666">&lt;</span> <span style="color: #40a070">10</span>; i<span style="color: #666666">++</span>) {
  <span style="color: #60a0b0; font-style: italic">// ...</span>
}

alert(i); <span style="color: #60a0b0; font-style: italic">// 10, &quot;i&quot; is visible after loop, it&#39;s a global variable</span>
</pre></div>
`;

export const functionScopeCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> sayHi() {
  <span style="color: #007020; font-weight: bold">if</span> (<span style="color: #007020; font-weight: bold">true</span>) {
    <span style="color: #007020; font-weight: bold">var</span> phrase <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Hello&quot;</span>;
  }

  alert(phrase); <span style="color: #60a0b0; font-style: italic">// works</span>
}

sayHi();
alert(phrase); <span style="color: #60a0b0; font-style: italic">// Error: phrase is not defined (Check the Developer Console)</span>
</pre></div>
`;

export const letRedeclarationCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> user;
<span style="color: #007020; font-weight: bold">let</span> user; <span style="color: #60a0b0; font-style: italic">// SyntaxError: &#39;user&#39; has already been declared</span>
</pre></div>
`;

export const varRedeclarationCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">var</span> user <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Pete&quot;</span>;

<span style="color: #007020; font-weight: bold">var</span> user <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;John&quot;</span>; <span style="color: #60a0b0; font-style: italic">// this &quot;var&quot; does nothing (already declared)</span>
<span style="color: #60a0b0; font-style: italic">// ...it doesn&#39;t trigger an error</span>

alert(user); <span style="color: #60a0b0; font-style: italic">// John</span>
</pre></div>
`;

export const example1Code = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> message;

message <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Hello!&#39;</span>;

message <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;World!&#39;</span>; <span style="color: #60a0b0; font-style: italic">// value changed</span>

alert(message);
</pre></div>
`;

export const example2Code = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> hello <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Hello world!&#39;</span>;

<span style="color: #007020; font-weight: bold">let</span> message;

<span style="color: #60a0b0; font-style: italic">// copy &#39;Hello world&#39; from hello into message</span>
message <span style="color: #666666">=</span> hello;

<span style="color: #60a0b0; font-style: italic">// now two variables hold the same data</span>
alert(hello); <span style="color: #60a0b0; font-style: italic">// Hello world!</span>
alert(message); <span style="color: #60a0b0; font-style: italic">// Hello world!</span>
</pre></div>
`;

export const constantExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">const</span> COLOR_RED <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;#F00&quot;</span>;
<span style="color: #007020; font-weight: bold">const</span> COLOR_GREEN <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;#0F0&quot;</span>;
<span style="color: #007020; font-weight: bold">const</span> COLOR_BLUE <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;#00F&quot;</span>;
<span style="color: #007020; font-weight: bold">const</span> COLOR_ORANGE <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;#FF7F00&quot;</span>;

COLOR_ORANGE <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;#F4F4F4&#39;</span>; <span style="color: #60a0b0; font-style: italic">// error, can&#39;t reassign the constant!</span>
</pre></div>
`;