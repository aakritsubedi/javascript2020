export const functionSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> nameOfFunction() {
  <span style="color: #60a0b0; font-style: italic">//statements</span>
}
</pre></div>
`;

export const functionEgOneCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//declare the function</span>
<span style="color: #007020; font-weight: bold">function</span> showMessage() {
  alert( <span style="color: #4070a0">&#39;Hello everyone!&#39;</span> );
}

<span style="color: #60a0b0; font-style: italic">//function call</span>
showMessage();
</pre></div>
`;

export const functionVariableCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> userName <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Aakrit&#39;</span>;
<span style="color: #007020; font-weight: bold">let</span> email <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;aakritsubedi9@gmail.com&#39;</span>;

<span style="color: #007020; font-weight: bold">function</span> showMessage() {
  <span style="color: #007020; font-weight: bold">let</span> message <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Hello, I&#39;m JavaScript!&quot;</span>; <span style="color: #60a0b0; font-style: italic">// local variable</span>
  email <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;contactme@aakritsubedi.com.np&#39;</span>; <span style="color: #60a0b0; font-style: italic">//can be change inside the function</span>
  console.log(userName); <span style="color: #60a0b0; font-style: italic">//Aakrit,  the variable is global</span>
  console.log(email); <span style="color: #60a0b0; font-style: italic">//contactme@aakritsubedi.com.np</span>
  console.log( message );
}

console.log(email); <span style="color: #60a0b0; font-style: italic">//aakritsubedi9@gmail.com, Before the function call</span>

showMessage(); <span style="color: #60a0b0; font-style: italic">// calling function</span>

console.log(email); <span style="color: #60a0b0; font-style: italic">//contactme@aakritsubedi.com.np, the value was modified by the function</span>

console.log( message ); <span style="color: #60a0b0; font-style: italic">// &lt;-- Error! The variable is local to the function</span>

console.log(userName); <span style="color: #60a0b0; font-style: italic">//Aakrit</span>
</pre></div>
`;

export const funcParameterCode = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> showMessage(from, text) { <span style="color: #60a0b0; font-style: italic">// arguments: from, text</span>
console.log(from <span style="color: #666666">+</span> <span style="color: #4070a0">&#39;: &#39;</span> <span style="color: #666666">+</span> text);
}

showMessage(<span style="color: #4070a0">&#39;Aakrit Subedi&#39;</span>, <span style="color: #4070a0">&#39;Hello!&#39;</span>); <span style="color: #60a0b0; font-style: italic">// Aakrit Subedi: Hello!</span>
showMessage(<span style="color: #4070a0">&#39;Aakrit Subedi&#39;</span>, <span style="color: #4070a0">&quot;What&#39;s up?&quot;</span>); <span style="color: #60a0b0; font-style: italic">// Aakrit Subedi: What&#39;s up?</span>
</pre></div>
`;

export const funcDefaultValueCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> showMessage(from, text <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;no text given&quot;</span>) {
  alert( from <span style="color: #666666">+</span> <span style="color: #4070a0">&quot;: &quot;</span> <span style="color: #666666">+</span> text );
}

showMessage(<span style="color: #4070a0">&quot;AAkrit&quot;</span>); <span style="color: #60a0b0; font-style: italic">// AAkrit: no text given</span>

showMessage(<span style="color: #4070a0">&quot;AAkrit&quot;</span>,<span style="color: #4070a0">&quot;Hello I am here.&quot;</span>); <span style="color: #60a0b0; font-style: italic">// AAkrit: Hello I am here.</span>
</pre></div>
`;

export const funcDefaultAlternateCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> showMessage(name, text) {
  name <span style="color: #666666">=</span> name <span style="color: #666666">||</span> <span style="color: #4070a0">&#39;John Doe&#39;</span>;
  <span style="color: #007020; font-weight: bold">if</span> (text <span style="color: #666666">===</span> <span style="color: #007020; font-weight: bold">undefined</span>) {
    text <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;empty message&#39;</span>;
  }

  console.log(name<span style="color: #666666">+</span><span style="color: #4070a0">&#39;:&#39;</span><span style="color: #666666">+</span> text);
}

showMessage(); <span style="color: #60a0b0; font-style: italic">//John Doe: empty message</span>
showMessage(<span style="color: #4070a0">&#39;Aakrit&#39;</span>); <span style="color: #60a0b0; font-style: italic">//Aakrit: empty message </span>
showMessage(<span style="color: #4070a0">&#39;Aakrit&#39;</span>,<span style="color: #4070a0">&#39;Hello, I am here.&#39;</span>); <span style="color: #60a0b0; font-style: italic">//Aakrit: Hello, I am here.</span>
</pre></div>
`;

export const nullishOperatorCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">// if there&#39;s no &quot;count&quot; parameter, show &quot;unknown&quot;</span>
<span style="color: #007020; font-weight: bold">function</span> showCount(count) {
  alert(count <span style="color: #666666">??</span> <span style="color: #4070a0">&quot;unknown&quot;</span>);
}

showCount(<span style="color: #40a070">0</span>); <span style="color: #60a0b0; font-style: italic">// 0</span>
showCount(<span style="color: #007020; font-weight: bold">null</span>); <span style="color: #60a0b0; font-style: italic">// unknown</span>
showCount(); <span style="color: #60a0b0; font-style: italic">// unknown</span>
</pre></div>
`;

export const functionReturnCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> sum(a, b) {
  <span style="color: #007020; font-weight: bold">return</span> a <span style="color: #666666">+</span> b;
}

<span style="color: #007020; font-weight: bold">let</span> result <span style="color: #666666">=</span> sum(<span style="color: #40a070">1</span>, <span style="color: #40a070">2</span>);
console.log(<span style="color: #4070a0">&#39;The result is: &#39;</span> <span style="color: #666666">+</span> result ); <span style="color: #60a0b0; font-style: italic">//The result is: 3</span>
</pre></div>
`;

export const emptyReturnCode =  `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> checkAge(age) {
  <span style="color: #007020; font-weight: bold">if</span> (age <span style="color: #666666">&gt;=</span> <span style="color: #40a070">18</span>) {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>;
  } <span style="color: #007020; font-weight: bold">else</span> {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
  }
}

<span style="color: #007020; font-weight: bold">function</span> showMovie(age) {
  <span style="color: #007020; font-weight: bold">if</span> ( checkAge(age) ) {
    <span style="color: #007020; font-weight: bold">return</span>;
  }

  alert( <span style="color: #4070a0">&quot;Showing you the movie&quot;</span> ); <span style="color: #60a0b0; font-style: italic">// (*)</span>
  <span style="color: #60a0b0; font-style: italic">// ...</span>
}

<span style="color: #60a0b0; font-style: italic">//then showMovie won’t proceed to the alert.</span>

console.log( showMovie() <span style="color: #666666">===</span> <span style="color: #007020; font-weight: bold">undefined</span> ); <span style="color: #60a0b0; font-style: italic">// true</span>
</pre></div>

`;

export const breakFunctionCode = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> showPrimes(n) {

  <span style="color: #007020; font-weight: bold">for</span> (<span style="color: #007020; font-weight: bold">let</span> i <span style="color: #666666">=</span> <span style="color: #40a070">2</span>; i <span style="color: #666666">&lt;</span> n; i<span style="color: #666666">++</span>) {
    <span style="color: #007020; font-weight: bold">if</span> (<span style="color: #666666">!</span>isPrime(i)) <span style="color: #007020; font-weight: bold">continue</span>;

    alert(i);  <span style="color: #60a0b0; font-style: italic">// a prime</span>
  }
}

<span style="color: #007020; font-weight: bold">function</span> isPrime(n) {
  <span style="color: #007020; font-weight: bold">for</span> (<span style="color: #007020; font-weight: bold">let</span> i <span style="color: #666666">=</span> <span style="color: #40a070">2</span>; i <span style="color: #666666">&lt;</span> n; i<span style="color: #666666">++</span>) {
    <span style="color: #007020; font-weight: bold">if</span> ( n <span style="color: #666666">%</span> i <span style="color: #666666">==</span> <span style="color: #40a070">0</span>) <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
  }
  <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>;
}
</pre></div>
`;