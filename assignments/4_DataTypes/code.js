export const dynamicallyTypedCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> message <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;hello&quot;</span>;
message <span style="color: #666666">=</span> <span style="color: #40a070">123456</span>;
</pre></div>
`;

export const stringCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> name <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Aakrit Subedi&quot;</span>;
<span style="color: #007020; font-weight: bold">let</span> email <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;aakritsubedi9@gmail.com &#39;</span>;
<span style="color: #007020; font-weight: bold">let</span> phrase <span style="color: #666666">=</span> <span style="border: 1px solid #FF0000">\`</span>My name is \${name}. My email address is \${email}.<span style="border: 1px solid #FF0000">\`</span>;
</pre></div>
`;

export const numberCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> n <span style="color: #666666">=</span> <span style="color: #40a070">123</span>;
n <span style="color: #666666">=</span> <span style="color: #40a070">12.345</span>;
</pre></div>
`;

export const bigIntCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">// the &quot;n&quot; at the end means it&#39;s a BigInt</span>
<span style="color: #007020; font-weight: bold">const</span> bigInt <span style="color: #666666">=</span> <span style="color: #40a070">1234567890123456789012345678901234567890</span>n;
</pre></div>
`;

export const booleanCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> isMale <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">true</span>; <span style="color: #60a0b0; font-style: italic">// yes, name field is checked</span>
<span style="color: #007020; font-weight: bold">let</span> isYoung <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">false</span>; <span style="color: #60a0b0; font-style: italic">// no, age field is not checked</span>

<span style="color: #007020; font-weight: bold">let</span> isGreater <span style="color: #666666">=</span> <span style="color: #40a070">4</span> <span style="color: #666666">&gt;</span> <span style="color: #40a070">1</span>;

alert( isGreater ); <span style="color: #60a0b0; font-style: italic">// true (the comparison result is &quot;yes&quot;)</span>
</pre></div>
`;

export const nullCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> age <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>;
</pre></div>
`;

export const undefinedCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> age;
alert(age); <span style="color: #60a0b0; font-style: italic">// shows &quot;undefined&quot;</span>

<span style="color: #007020; font-weight: bold">let</span> age <span style="color: #666666">=</span> <span style="color: #40a070">100</span>;
<span style="color: #60a0b0; font-style: italic">// change the value to undefined</span>
age <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">undefined</span>;
alert(age); <span style="color: #60a0b0; font-style: italic">// &quot;undefined&quot;</span>
</pre></div>
`;

export const objectCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> myInfo <span style="color: #666666">=</span> {
  name<span style="color: #666666">:</span> <span style="color: #4070a0">&#39;Aakrit Subedi&#39;</span>,
  contactNo<span style="color: #666666">:</span> <span style="color: #40a070">980</span>,
  email<span style="color: #666666">:</span> <span style="color: #4070a0">&#39;aakritsubedi9@gmail.com&#39;</span>,
  isStudent<span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>
}

<span style="color: #60a0b0; font-style: italic">//accessing the value</span>
console.log(<span style="color: #4070a0">&#39;My name is&#39;</span> <span style="color: #666666">+</span> myInfo.name);
alert(<span style="border: 1px solid #FF0000">\`</span>My email address is \${myInfo.email}<span style="border: 1px solid #FF0000">\`</span>);
</pre></div>
`;

export const typeofCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">typeof</span> <span style="color: #007020; font-weight: bold">undefined</span> <span style="color: #60a0b0; font-style: italic">// &quot;undefined&quot;</span>

<span style="color: #007020; font-weight: bold">typeof</span> <span style="color: #40a070">0</span> <span style="color: #60a0b0; font-style: italic">// &quot;number&quot;</span>

<span style="color: #007020; font-weight: bold">typeof</span> <span style="color: #40a070">10</span>n <span style="color: #60a0b0; font-style: italic">// &quot;bigint&quot;</span>

<span style="color: #007020; font-weight: bold">typeof</span> <span style="color: #007020; font-weight: bold">true</span> <span style="color: #60a0b0; font-style: italic">// &quot;boolean&quot;</span>

<span style="color: #007020; font-weight: bold">typeof</span> <span style="color: #4070a0">&quot;foo&quot;</span> <span style="color: #60a0b0; font-style: italic">// &quot;string&quot;</span>

<span style="color: #007020; font-weight: bold">typeof</span> Symbol(<span style="color: #4070a0">&quot;id&quot;</span>) <span style="color: #60a0b0; font-style: italic">// &quot;symbol&quot;</span>

<span style="color: #007020; font-weight: bold">typeof</span> <span style="color: #007020">Math</span> <span style="color: #60a0b0; font-style: italic">// &quot;object&quot;  (1)</span>

<span style="color: #007020; font-weight: bold">typeof</span> <span style="color: #007020; font-weight: bold">null</span> <span style="color: #60a0b0; font-style: italic">// &quot;object&quot;  (2)</span>

<span style="color: #007020; font-weight: bold">typeof</span> alert <span style="color: #60a0b0; font-style: italic">// &quot;function&quot;  (3)</span>
</pre></div>
`;