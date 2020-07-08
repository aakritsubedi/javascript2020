export const stringCoversionCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> value <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">true</span>;
alert(<span style="color: #007020; font-weight: bold">typeof</span> value); <span style="color: #60a0b0; font-style: italic">// boolean</span>

value <span style="color: #666666">=</span> <span style="color: #007020">String</span>(value); <span style="color: #60a0b0; font-style: italic">// now value is a string &quot;true&quot;</span>
alert(<span style="color: #007020; font-weight: bold">typeof</span> value); <span style="color: #60a0b0; font-style: italic">// string</span>
</pre></div>
`;

export const numericConversionCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">alert( <span style="color: #4070a0">&quot;6&quot;</span> <span style="color: #666666">/</span> <span style="color: #4070a0">&quot;2&quot;</span> ); <span style="color: #60a0b0; font-style: italic">// 3, strings are converted to numbers</span>

<span style="color: #007020; font-weight: bold">let</span> str <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;123&quot;</span>;
alert(<span style="color: #007020; font-weight: bold">typeof</span> str); <span style="color: #60a0b0; font-style: italic">// string</span>

<span style="color: #007020; font-weight: bold">let</span> num <span style="color: #666666">=</span> <span style="color: #007020">Number</span>(str); <span style="color: #60a0b0; font-style: italic">// becomes a number 123</span>

alert(<span style="color: #007020; font-weight: bold">typeof</span> num); <span style="color: #60a0b0; font-style: italic">// number</span>

<span style="color: #007020; font-weight: bold">let</span> age <span style="color: #666666">=</span> <span style="color: #007020">Number</span>(<span style="color: #4070a0">&quot;an arbitrary string instead of a number&quot;</span>);

alert(age); <span style="color: #60a0b0; font-style: italic">// NaN, conversion failed</span>
</pre></div>
`;

export const numericRulesCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">alert( <span style="color: #007020">Number</span>(<span style="color: #4070a0">&quot;   123   &quot;</span>) ); <span style="color: #60a0b0; font-style: italic">// 123</span>
alert( <span style="color: #007020">Number</span>(<span style="color: #4070a0">&quot;123z&quot;</span>) );      <span style="color: #60a0b0; font-style: italic">// NaN (error reading a number at &quot;z&quot;)</span>
alert( <span style="color: #007020">Number</span>(<span style="color: #007020; font-weight: bold">true</span>) );        <span style="color: #60a0b0; font-style: italic">// 1</span>
alert( <span style="color: #007020">Number</span>(<span style="color: #007020; font-weight: bold">false</span>) );       <span style="color: #60a0b0; font-style: italic">// 0</span>
</pre></div>
`;

export const booleanConversionCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">alert( <span style="color: #007020">Boolean</span>(<span style="color: #40a070">1</span>) ); <span style="color: #60a0b0; font-style: italic">// true</span>
alert( <span style="color: #007020">Boolean</span>(<span style="color: #40a070">0</span>) ); <span style="color: #60a0b0; font-style: italic">// false</span>

alert( <span style="color: #007020">Boolean</span>(<span style="color: #4070a0">&quot;hello&quot;</span>) ); <span style="color: #60a0b0; font-style: italic">// true</span>
alert( <span style="color: #007020">Boolean</span>(<span style="color: #4070a0">&quot;&quot;</span>) ); <span style="color: #60a0b0; font-style: italic">// false</span>

alert( <span style="color: #007020">Boolean</span>(<span style="color: #4070a0">&quot;0&quot;</span>) ); <span style="color: #60a0b0; font-style: italic">// true</span>
alert( <span style="color: #007020">Boolean</span>(<span style="color: #4070a0">&quot; &quot;</span>) ); <span style="color: #60a0b0; font-style: italic">// spaces, also true (any non-empty string is true)</span>
</pre></div>
`;