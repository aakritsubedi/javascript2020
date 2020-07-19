export const stackImplementationCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #4070a0">&quot;use strict&quot;</span>;
module.exports <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">class</span> Stack {
  constructor(size) {
    <span style="color: #007020; font-weight: bold">this</span>.size <span style="color: #666666">=</span> size;
    <span style="color: #007020; font-weight: bold">this</span>.items <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> <span style="color: #007020">Array</span>(<span style="color: #40a070">0</span>);
    <span style="color: #007020; font-weight: bold">this</span>.top <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>;
  }

  <span style="color: #60a0b0; font-style: italic">//isEmpty: return true if stack is empty </span>
  isEmpty() {
    <span style="color: #007020; font-weight: bold">return</span> (<span style="color: #007020; font-weight: bold">this</span>.items.length <span style="color: #666666">==</span> <span style="color: #40a070">0</span>) <span style="color: #666666">?</span> <span style="color: #007020; font-weight: bold">true</span> <span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>;
  }

  <span style="color: #60a0b0; font-style: italic">//getSize: returns the size of stack</span>
  getSize() {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.items.length;
  }

  <span style="color: #60a0b0; font-style: italic">//getTop: return the top of stack if not empty</span>
  getTop() {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #666666">!</span><span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.top;
    }
    <span style="color: #007020; font-weight: bold">else</span> {
      console.log(<span style="color: #4070a0">&#39;The stack is empty.&#39;</span>);
    }
  }

  <span style="color: #60a0b0; font-style: italic">//push: insert element top of stack</span>
  push(element) {
    <span style="color: #007020; font-weight: bold">this</span>.items.push(element);
    <span style="color: #007020; font-weight: bold">this</span>.top <span style="color: #666666">=</span> element;
  }

  <span style="color: #60a0b0; font-style: italic">//pop: remove the element from the top of stack</span>
  pop() {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #666666">!</span><span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #007020; font-weight: bold">this</span>.getSize() <span style="color: #666666">==</span> <span style="color: #40a070">1</span>){
        <span style="color: #007020; font-weight: bold">this</span>.top <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>;
        <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.items.pop();
      }
      <span style="color: #007020; font-weight: bold">else</span> {
        <span style="color: #007020; font-weight: bold">this</span>.top <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.items[<span style="color: #007020; font-weight: bold">this</span>.getSize() <span style="color: #666666">-</span> <span style="color: #40a070">2</span>];
        <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.items.pop();
      }
    }
    <span style="color: #007020; font-weight: bold">else</span> {
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">null</span>;
    }
  }
};
</pre></div>
`;

export const exampleOneCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">const</span> Stack <span style="color: #666666">=</span> require(<span style="color: #4070a0">&#39;./stack&#39;</span>);

<span style="color: #60a0b0; font-style: italic">// Creating stack of size 10</span>
<span style="color: #007020; font-weight: bold">let</span> s1 <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> Stack(<span style="color: #40a070">10</span>);

console.log(s1.isEmpty()); <span style="color: #60a0b0; font-style: italic">//true</span>
console.log(s1.getSize()); <span style="color: #60a0b0; font-style: italic">//0</span>

<span style="color: #60a0b0; font-style: italic">//Insert elements</span>
<span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;</span><span style="color: #40a070">10</span>; i<span style="color: #666666">++</span>){
  s1.push(i<span style="color: #666666">+</span><span style="color: #40a070">1</span>);
}

console.log(s1.getSize()); <span style="color: #60a0b0; font-style: italic">//10</span>

<span style="color: #60a0b0; font-style: italic">// Pop the element </span>
s1.pop(); <span style="color: #60a0b0; font-style: italic">//10</span>
s1.pop(); <span style="color: #60a0b0; font-style: italic">//9</span>

console.log(s1.getSize()); <span style="color: #60a0b0; font-style: italic">//8</span>
</pre></div>
`;

export const balancedParenthesisCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #4070a0">&quot;use strict&quot;</span>;

<span style="color: #007020; font-weight: bold">const</span> Stack <span style="color: #666666">=</span> require(<span style="color: #4070a0">&quot;./stack&quot;</span>);

<span style="color: #007020; font-weight: bold">function</span> isBalanced(exp) {
  <span style="color: #007020; font-weight: bold">let</span> myStack <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> Stack(<span style="color: #40a070">10</span>);

  <span style="color: #60a0b0; font-style: italic">//Iterate through the string exp</span>
  <span style="color: #007020; font-weight: bold">for</span> (<span style="color: #007020; font-weight: bold">let</span> i <span style="color: #666666">=</span> <span style="color: #40a070">0</span>; i <span style="color: #666666">&lt;</span> exp.length; i<span style="color: #666666">++</span>) {
    <span style="color: #60a0b0; font-style: italic">//for every closing parenthesis check for opening parenthesis</span>
    <span style="color: #007020; font-weight: bold">if</span> (exp[i] <span style="color: #666666">==</span> <span style="color: #4070a0">&quot;}&quot;</span> <span style="color: #666666">||</span> exp[i] <span style="color: #666666">==</span> <span style="color: #4070a0">&quot;]&quot;</span> <span style="color: #666666">||</span> exp[i] <span style="color: #666666">==</span> <span style="color: #4070a0">&quot;)&quot;</span>) {
      <span style="color: #007020; font-weight: bold">if</span> (exp.length <span style="color: #666666">==</span> <span style="color: #40a070">0</span>) {
        <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
      }

      <span style="color: #007020; font-weight: bold">let</span> output <span style="color: #666666">=</span> myStack.pop();
      <span style="color: #60a0b0; font-style: italic">//If you can&#39;t find the opening parentheses for any closing one then returns false.</span>
      <span style="color: #007020; font-weight: bold">if</span> (
        (exp[i] <span style="color: #666666">==</span> <span style="color: #4070a0">&quot;}&quot;</span> <span style="color: #666666">&amp;&amp;</span> output <span style="color: #666666">!=</span> <span style="color: #4070a0">&quot;{&quot;</span>) <span style="color: #666666">||</span>
        (exp[i] <span style="color: #666666">==</span> <span style="color: #4070a0">&quot;)&quot;</span> <span style="color: #666666">&amp;&amp;</span> output <span style="color: #666666">!=</span> <span style="color: #4070a0">&quot;(&quot;</span>) <span style="color: #666666">||</span>
        (exp[i] <span style="color: #666666">==</span> <span style="color: #4070a0">&quot;]&quot;</span> <span style="color: #666666">&amp;&amp;</span> output <span style="color: #666666">!=</span> <span style="color: #4070a0">&quot;[&quot;</span>)
      ) {
        <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
      }
    } <span style="color: #007020; font-weight: bold">else</span> {
      <span style="color: #60a0b0; font-style: italic">//For each opening parentheses, push it into stack</span>
      myStack.push(exp[i]);
    }
  }
  <span style="color: #60a0b0; font-style: italic">//after complete traversal of string exp, if there&#39;s any opening parentheses left</span>
  <span style="color: #60a0b0; font-style: italic">//in stack then also return false.</span>
  <span style="color: #007020; font-weight: bold">if</span> (myStack.isEmpty() <span style="color: #666666">==</span> <span style="color: #007020; font-weight: bold">false</span>) {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
  }
  <span style="color: #60a0b0; font-style: italic">//At the end return true if you haven&#39;t encountered any of the above false conditions.</span>
  <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>;
}

<span style="color: #007020; font-weight: bold">let</span> inputString <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;{[()]}&quot;</span>;
console.log(inputString);
console.log(isBalanced(inputString)); <span style="color: #60a0b0; font-style: italic">//true</span>

inputString <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;{[([({))]}}&quot;</span>;
console.log(inputString);
console.log(isBalanced(inputString)); <span style="color: #60a0b0; font-style: italic">//false</span>

inputString <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;[&quot;</span>;
console.log(inputString);
console.log(isBalanced(inputString)); <span style="color: #60a0b0; font-style: italic">//false</span>
</pre></div>
`;