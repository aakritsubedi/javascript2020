export const conditionalStatementCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">if</span> (a condition evaluates to True)<span style="color: #666666">:</span>
then <span style="color: #007020; font-weight: bold">do</span> these things only <span style="color: #007020; font-weight: bold">for</span> True
<span style="color: #007020; font-weight: bold">else</span><span style="color: #666666">:</span>
otherwise <span style="color: #007020; font-weight: bold">do</span> these things only <span style="color: #007020; font-weight: bold">for</span> False.
</pre></div>
`;

export const ifSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">if</span> (condition) {
  <span style="color: #60a0b0; font-style: italic">//  block of code to be executed if the condition is true</span>
}
</pre></div>
`;
export const ifExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> condition <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">true</span>
<span style="color: #007020; font-weight: bold">if</span> condition<span style="color: #666666">:</span>
    print(<span style="color: #4070a0">&quot;condition met&quot;</span>)

<span style="color: #007020; font-weight: bold">if</span> not condition<span style="color: #666666">:</span>
    print(<span style="color: #4070a0">&quot;condition not met&quot;</span>)

direction <span style="color: #666666">=</span> <span style="color: #666666">-</span><span style="color: #40a070">30</span>
<span style="color: #007020; font-weight: bold">if</span> direction <span style="color: #666666">&gt;</span> <span style="color: #40a070">0</span> <span style="color: #666666">:</span>
    turtle.forward(direction)
<span style="color: #007020; font-weight: bold">else</span><span style="color: #666666">:</span>
    turtle.left(<span style="color: #40a070">180</span>)
    turtle.forward(<span style="color: #666666">-</span>direction)
</pre></div>
`;

export const elseSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">if</span> (condition) {
  <span style="color: #60a0b0; font-style: italic">//  block of code to be executed if the condition is true</span>
} <span style="color: #007020; font-weight: bold">else</span> {
  <span style="color: #60a0b0; font-style: italic">//  block of code to be executed if the condition is false</span>
}
</pre></div>
`;
export const elseExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> name <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Admin&#39;</span>;
<span style="color: #007020; font-weight: bold">let</span> greeting <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>;
<span style="color: #007020; font-weight: bold">if</span> (name <span style="color: #666666">===</span> <span style="color: #4070a0">&#39;Admin&#39;</span>) {
  greeting <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Good Morning Admin&quot;</span>;
} <span style="color: #007020; font-weight: bold">else</span> {
  greeting <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Good Morning Guest&quot;</span>;
}
</pre></div>
`;

export const elseIfSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">if</span> (condition1) {
  <span style="color: #60a0b0; font-style: italic">//  block of code to be executed if condition1 is true</span>
} <span style="color: #007020; font-weight: bold">else</span> <span style="color: #007020; font-weight: bold">if</span> (condition2) {
  <span style="color: #60a0b0; font-style: italic">//  block of code to be executed if the condition1 is false and condition2 is true</span>
} <span style="color: #007020; font-weight: bold">else</span> {
  <span style="color: #60a0b0; font-style: italic">//  block of code to be executed if the condition1 is false and condition2 is false</span>
}
</pre></div>
`;
export const elseIfExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">if</span> (time <span style="color: #666666">&lt;</span> <span style="color: #40a070">10</span>) {
  greeting <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Good morning&quot;</span>;
} <span style="color: #007020; font-weight: bold">else</span> <span style="color: #007020; font-weight: bold">if</span> (time <span style="color: #666666">&lt;</span> <span style="color: #40a070">20</span>) {
  greeting <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Good day&quot;</span>;
} <span style="color: #007020; font-weight: bold">else</span> {
  greeting <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Good evening&quot;</span>;
}
</pre></div>
`;

export const example1Code = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//check no is positive</span>
<span style="color: #007020; font-weight: bold">let</span> no <span style="color: #666666">=</span> <span style="color: #40a070">5</span>;
<span style="color: #007020; font-weight: bold">if</span>(no <span style="color: #666666">&gt;</span> <span style="color: #40a070">0</span>){
  console.log(<span style="border: 1px solid #FF0000">\`</span>The no. \${no} is positive no.<span style="border: 1px solid #FF0000">\`</span>);
}
</pre></div>
`;

export const example2Code = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//check no is positive</span>
<span style="color: #007020; font-weight: bold">let</span> no <span style="color: #666666">=</span> <span style="color: #40a070">-6</span>;
<span style="color: #007020; font-weight: bold">if</span>(no <span style="color: #666666">&gt;</span> <span style="color: #40a070">0</span>){
  console.log(<span style="border: 1px solid #FF0000">\`</span>The no. \${no} is positive no.<span style="border: 1px solid #FF0000">\`</span>);
}
<span style="color: #007020; font-weight: bold">else</span> {
  console.log(<span style="border: 1px solid #FF0000">\`</span>The no. \${no} is negative no.<span style="border: 1px solid #FF0000">\`</span>);
}<span style="color: #60a0b0; font-style: italic">//return other no. negative</span>
</pre></div>
`;

export const example3Code = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//check no is positive</span>
<span style="color: #007020; font-weight: bold">let</span> no <span style="color: #666666">=</span> <span style="color: #40a070">0</span>;
<span style="color: #007020; font-weight: bold">if</span>(no <span style="color: #666666">&gt;</span> <span style="color: #40a070">0</span>){
  console.log(<span style="border: 1px solid #FF0000">\`</span>The no. \${no} is positive no.<span style="border: 1px solid #FF0000">\`</span>);
}
<span style="color: #007020; font-weight: bold">else</span> <span style="color: #007020; font-weight: bold">if</span>(no <span style="color: #666666">&lt;</span> <span style="color: #40a070">0</span>)  {
  console.log(<span style="border: 1px solid #FF0000">\`</span>The no. \${no} is negative no.<span style="border: 1px solid #FF0000">\`</span>);
}<span style="color: #60a0b0; font-style: italic">//check weather no. is negative</span>
<span style="color: #007020; font-weight: bold">else</span> {
  console.log(<span style="border: 1px solid #FF0000">\`</span>The no. zero.<span style="border: 1px solid #FF0000">\`</span>);
} <span style="color: #60a0b0; font-style: italic">//else the no. is zero</span>
</pre></div>
`;

export const taskOneCode =  `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> username <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;admin&#39;</span>;
<span style="color: #007020; font-weight: bold">let</span> password <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;guest123@&#39;</span>;

<span style="color: #007020; font-weight: bold">if</span>(username <span style="color: #666666">===</span> <span style="color: #4070a0">&#39;admin&#39;</span> <span style="color: #666666">&amp;</span> password <span style="color: #666666">===</span> <span style="color: #4070a0">&#39;guest123@&#39;</span>) {
  console.log(<span style="color: #4070a0">&#39;Welcome Admin&#39;</span>);
}
<span style="color: #007020; font-weight: bold">else</span> {
 console.log(<span style="color: #4070a0">&#39;Invalid username or password&#39;</span>);
}
</pre></div>
`;  
export const taskTwoCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> fruits <span style="color: #666666">=</span> [<span style="color: #4070a0">&#39;banana&#39;</span>,<span style="color: #4070a0">&#39;apple&#39;</span>,<span style="color: #4070a0">&#39;orange&#39;</span>,<span style="color: #4070a0">&#39;pineapple&#39;</span>,<span style="color: #4070a0">&#39;berry&#39;</span>];
<span style="color: #007020; font-weight: bold">let</span> vegetables <span style="color: #666666">=</span> [<span style="color: #4070a0">&#39;cauliflower&#39;</span>,<span style="color: #4070a0">&#39;broccoli&#39;</span>,<span style="color: #4070a0">&#39;cabbage&#39;</span>,<span style="color: #4070a0">&#39;peas&#39;</span>, <span style="color: #4070a0">&#39;Lavender&#39;</span>];
<span style="color: #007020; font-weight: bold">let</span> myFav <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;banana&#39;</span>;

<span style="color: #007020; font-weight: bold">if</span>(fruits.includes(myFav)){
  console.log(<span style="color: #4070a0">&#39;You love fruits&#39;</span>);
}
<span style="color: #007020; font-weight: bold">else</span> <span style="color: #007020; font-weight: bold">if</span>(vegetables.includes(myFav)) {
  console.log(<span style="color: #4070a0">&#39;You love vegetables&#39;</span>);
}
<span style="color: #007020; font-weight: bold">else</span> {
  console.log(<span style="color: #4070a0">&#39;Our list has insufficent data to predict your choice...&#39;</span>);
}
</pre></div>
`;

export const switchSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">switch</span>(expression) {
  <span style="color: #007020; font-weight: bold">case</span> x<span style="color: #666666">:</span>
    <span style="color: #60a0b0; font-style: italic">// code block</span>
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">case</span> y<span style="color: #666666">:</span>
    <span style="color: #60a0b0; font-style: italic">// code block</span>
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">default</span><span style="color: #666666">:</span>
    <span style="color: #60a0b0; font-style: italic">// code block</span>
}
</pre></div>
`;
export const switchExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">switch</span> (<span style="color: #007020; font-weight: bold">new</span> <span style="color: #007020">Date</span>().getDay()) {
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #40a070">0</span><span style="color: #666666">:</span>
    day <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Sunday&quot;</span>;
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #40a070">1</span><span style="color: #666666">:</span>
    day <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Monday&quot;</span>;
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #40a070">2</span><span style="color: #666666">:</span>
     day <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Tuesday&quot;</span>;
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #40a070">3</span><span style="color: #666666">:</span>
    day <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Wednesday&quot;</span>;
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #40a070">4</span><span style="color: #666666">:</span>
    day <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Thursday&quot;</span>;
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #40a070">5</span><span style="color: #666666">:</span>
    day <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Friday&quot;</span>;
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #40a070">6</span><span style="color: #666666">:</span>
    day <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;Saturday&quot;</span>;
}
</pre></div>
`;

export const switchExampleOneCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">const</span> expr <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;Papayas&#39;</span>;
<span style="color: #007020; font-weight: bold">switch</span> (expr) {
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #4070a0">&#39;Oranges&#39;</span><span style="color: #666666">:</span>
    console.log(<span style="color: #4070a0">&#39;Oranges are $0.59 a pound.&#39;</span>);
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #4070a0">&#39;Mangoes&#39;</span><span style="color: #666666">:</span>
  <span style="color: #007020; font-weight: bold">case</span> <span style="color: #4070a0">&#39;Papayas&#39;</span><span style="color: #666666">:</span>
    console.log(<span style="color: #4070a0">&#39;Mangoes and papayas are $2.79 a pound.&#39;</span>);
    <span style="color: #60a0b0; font-style: italic">// expected output: &quot;Mangoes and papayas are $2.79 a pound.&quot;</span>
    <span style="color: #007020; font-weight: bold">break</span>;
  <span style="color: #007020; font-weight: bold">default</span><span style="color: #666666">:</span>
    console.log(<span style="border: 1px solid #FF0000">\`</span>Sorry, we are out of \${expr}.<span style="border: 1px solid #FF0000">\`</span>);
}
</pre></div>
`;