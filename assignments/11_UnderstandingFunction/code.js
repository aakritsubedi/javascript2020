export const addSimpleWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//Definition of a function add</span>
<span style="color: #007020; font-weight: bold">function</span> add() {
  <span style="color: #007020; font-weight: bold">let</span> a <span style="color: #666666">=</span> <span style="color: #40a070">5</span>;
  <span style="color: #007020; font-weight: bold">let</span> b <span style="color: #666666">=</span> <span style="color: #40a070">6</span>;
  <span style="color: #007020; font-weight: bold">let</span> result <span style="color: #666666">=</span> a <span style="color: #666666">+</span> b;
  console.log(<span style="color: #4070a0">&#39;The required result is &#39;</span><span style="color: #666666">+</span> result);
}

<span style="color: #60a0b0; font-style: italic">//calling a function add</span>
add(); <span style="color: #60a0b0; font-style: italic">//The required result is 11</span>
add(); <span style="color: #60a0b0; font-style: italic">//The required result is 11</span>
<span style="color: #60a0b0; font-style: italic">//The result is always 11</span>
</pre></div>
`;

export const parameterWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//Definition of a function addition </span>
<span style="color: #007020; font-weight: bold">function</span> addition(a,b) {
  <span style="color: #007020; font-weight: bold">let</span> result <span style="color: #666666">=</span> a <span style="color: #666666">+</span> b;
  console.log(<span style="color: #4070a0">&#39;The required result is &#39;</span><span style="color: #666666">+</span> result);
}

<span style="color: #60a0b0; font-style: italic">//calling a function addtion(5,6), addition(8,12) ...</span>
addition(<span style="color: #40a070">5</span>,<span style="color: #40a070">6</span>); <span style="color: #60a0b0; font-style: italic">//The required result is 11</span>
addition(<span style="color: #40a070">8</span>,<span style="color: #40a070">12</span>); <span style="color: #60a0b0; font-style: italic">//The required result is 20</span>
<span style="color: #60a0b0; font-style: italic">//The result depends on the parameter passed</span>
</pre></div>
`;

export const defaultWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//calling the addition function above</span>
addition(); <span style="color: #60a0b0; font-style: italic">//The required result is NaN</span>

<span style="color: #60a0b0; font-style: italic">//defining the default parameter function</span>
<span style="color: #007020; font-weight: bold">function</span> sum(a<span style="color: #666666">=</span><span style="color: #40a070">6</span>,b<span style="color: #666666">=</span><span style="color: #40a070">5</span>) {
  <span style="color: #007020; font-weight: bold">let</span> result <span style="color: #666666">=</span> a <span style="color: #666666">+</span> b;
  console.log(<span style="color: #4070a0">&#39;The required result is &#39;</span><span style="color: #666666">+</span> result);
}

sum(); <span style="color: #60a0b0; font-style: italic">//The required result is 11</span>
sum(<span style="color: #40a070">8</span>,<span style="color: #40a070">16</span>); <span style="color: #60a0b0; font-style: italic">//The required result is 24</span>
sum(<span style="color: #40a070">8</span>); <span style="color: #60a0b0; font-style: italic">//The required result is 13, here a=8</span>
sum(b<span style="color: #666666">=</span><span style="color: #40a070">8</span>); <span style="color: #60a0b0; font-style: italic">//The required result is 13</span>
sum(a<span style="color: #666666">=</span><span style="color: #40a070">9</span>); <span style="color: #60a0b0; font-style: italic">//The required result is 14</span>
</pre></div>
`;

export const returnWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//defining the function that returns the result</span>
<span style="color: #007020; font-weight: bold">function</span> summation(a,b<span style="color: #666666">=</span><span style="color: #40a070">8</span>) {
  <span style="color: #007020; font-weight: bold">let</span> result <span style="color: #666666">=</span> a <span style="color: #666666">+</span> b;
  
  <span style="color: #007020; font-weight: bold">return</span> result;
}

console.log(<span style="color: #4070a0">&#39;The required result is &#39;</span>, summation(<span style="color: #40a070">8</span>)); <span style="color: #60a0b0; font-style: italic">//The required result is 16</span>
<span style="color: #60a0b0; font-style: italic">//Also can be assigned in the variable</span>
<span style="color: #007020; font-weight: bold">let</span> result1 <span style="color: #666666">=</span> summation(<span style="color: #40a070">5</span>,<span style="color: #40a070">15</span>);
console.log(<span style="color: #4070a0">&#39;The required result is &#39;</span>, result1); <span style="color: #60a0b0; font-style: italic">//The required result is 20</span>

<span style="color: #60a0b0; font-style: italic">//Use result directly in conditional or other statements</span>
<span style="color: #007020; font-weight: bold">if</span>(summation(<span style="color: #40a070">5</span>,<span style="color: #40a070">5</span>) <span style="color: #666666">&gt;=</span> <span style="color: #40a070">10</span>) {
  console.log(<span style="color: #4070a0">&#39;The result is greater than 10.&#39;</span>);
  <span style="color: #60a0b0; font-style: italic">//also use the result1 assigned in above step anywhere in the main program</span>
  <span style="color: #007020; font-weight: bold">if</span>(result1 <span style="color: #666666">&gt;</span> <span style="color: #40a070">25</span>){
    console.log(<span style="color: #4070a0">&#39;The previous result is greater than 25&#39;</span>);
  }
  <span style="color: #007020; font-weight: bold">else</span>{
    console.log(<span style="color: #4070a0">&#39;The previous result is less than 25&#39;</span>);
  }
}
</pre></div>
`;

export const returnBestWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//The summation function can be simplied as </span>
<span style="color: #007020; font-weight: bold">function</span> summation(a,b<span style="color: #666666">=</span><span style="color: #40a070">8</span>){
  <span style="color: #007020; font-weight: bold">return</span> a<span style="color: #666666">+</span>b;
}
</pre></div>
`;

export const validCitizenshipNoCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//Set of an eligible citizenship number</span>
<span style="color: #007020; font-weight: bold">const</span> validCitizenshipNo <span style="color: #666666">=</span> [<span style="color: #4070a0">&#39;123795&#39;</span>,<span style="color: #4070a0">&#39;125963&#39;</span>,<span style="color: #4070a0">&#39;199533&#39;</span>,<span style="color: #4070a0">&#39;156996&#39;</span>,<span style="color: #4070a0">&#39;125639&#39;</span>];
</pre></div>
`;

export const voteSimpleWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//defining the function to check voters eligibility</span>
<span style="color: #007020; font-weight: bold">function</span> checkVoterEligibility() {
  <span style="color: #007020; font-weight: bold">let</span> myCitizenshipNo <span style="color: #666666">=</span> <span style="color: #4070a0">&#39;125963&#39;</span>;
  <span style="color: #007020; font-weight: bold">let</span> myAge <span style="color: #666666">=</span> <span style="color: #40a070">23</span>;
  <span style="color: #007020; font-weight: bold">if</span>(validCitizenshipNo.includes(myCitizenshipNo) <span style="color: #666666">&amp;&amp;</span> myAge <span style="color: #666666">&gt;=</span> <span style="color: #40a070">18</span>){
    console.log(<span style="color: #4070a0">&#39;Hey!! You are eligible to cast vote.&#39;</span>);
  }
  <span style="color: #007020; font-weight: bold">else</span> {
    console.log(<span style="color: #4070a0">&#39;Hey!! You are not eligible to cast vote.&#39;</span>);
  }
}

<span style="color: #60a0b0; font-style: italic">//calling the function</span>
checkVoterEligibility(); <span style="color: #60a0b0; font-style: italic">//Hey!! You are eligible to cast vote.</span>
</pre></div>
`;

export const voteArgumentWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//defining the function to which receives the parameters</span>
<span style="color: #007020; font-weight: bold">function</span> checkVoterEligibility(myCitizenshipNo, myAge) {
  <span style="color: #007020; font-weight: bold">if</span>(validCitizenshipNo.includes(myCitizenshipNo) <span style="color: #666666">&amp;&amp;</span> myAge <span style="color: #666666">&gt;=</span> <span style="color: #40a070">18</span>){
    console.log(<span style="color: #4070a0">&#39;Hey!! You are eligible to cast vote.&#39;</span>);
  }
  <span style="color: #007020; font-weight: bold">else</span> {
    console.log(<span style="color: #4070a0">&#39;Hey!! You are not eligible to cast vote.&#39;</span>);
  }
}

<span style="color: #60a0b0; font-style: italic">//calling the function</span>
checkVoterEligibility(<span style="color: #4070a0">&#39;125963&#39;</span>,<span style="color: #40a070">23</span>); <span style="color: #60a0b0; font-style: italic">//Hey!! You are eligible to cast vote.</span>
checkVoterEligibility(<span style="color: #4070a0">&#39;125963&#39;</span>,<span style="color: #40a070">13</span>); <span style="color: #60a0b0; font-style: italic">//Hey!! You are not eligible to cast vote.</span>
</pre></div>
`;

export const voteDefaultWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//setting age to the default value</span>
<span style="color: #007020; font-weight: bold">function</span> checkVoterEligibility(myCitizenshipNo, myAge<span style="color: #666666">=</span><span style="color: #40a070">18</span>) {
  console.log(myAge);
  <span style="color: #007020; font-weight: bold">if</span>(validCitizenshipNo.includes(myCitizenshipNo) <span style="color: #666666">&amp;&amp;</span> myAge <span style="color: #666666">&gt;=</span> <span style="color: #40a070">18</span>){
    console.log(<span style="color: #4070a0">&#39;Hey!! You are eligible to cast vote.&#39;</span>);
  }
  <span style="color: #007020; font-weight: bold">else</span> {
    console.log(<span style="color: #4070a0">&#39;Hey!! You are not eligible to cast vote.&#39;</span>);
  }
}

<span style="color: #60a0b0; font-style: italic">//calling the function</span>
checkVoterEligibility(<span style="color: #4070a0">&#39;125963&#39;</span>); <span style="color: #60a0b0; font-style: italic">//Hey!! You are eligible to cast vote.</span>
checkVoterEligibility(<span style="color: #4070a0">&#39;125963&#39;</span>,<span style="color: #40a070">12</span>); <span style="color: #60a0b0; font-style: italic">//Hey!! You are not eligible to cast vote.</span>
</pre></div>
`;

export const voteReturnWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//function that return the weather user is eligible to cast vote or not</span>
<span style="color: #007020; font-weight: bold">function</span> checkVoterEligibility(myCitizenshipNo, myAge<span style="color: #666666">=</span><span style="color: #40a070">18</span>) {
  <span style="color: #007020; font-weight: bold">if</span>(validCitizenshipNo.includes(myCitizenshipNo) <span style="color: #666666">&amp;&amp;</span> myAge <span style="color: #666666">&gt;=</span> <span style="color: #40a070">18</span>){
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>;
  }
  <span style="color: #007020; font-weight: bold">else</span> {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
  }
}

<span style="color: #007020; font-weight: bold">let</span> isEligible <span style="color: #666666">=</span> checkVoterEligibility(<span style="color: #4070a0">&#39;125963&#39;</span>,<span style="color: #40a070">23</span>);
<span style="color: #007020; font-weight: bold">if</span>(isEligible){
  console.log(<span style="color: #4070a0">&#39;Hey!! You are eligible to cast vote.&#39;</span>); 
}
<span style="color: #007020; font-weight: bold">else</span> {
  console.log(<span style="color: #4070a0">&#39;Hey!! You are not eligible to cast vote.&#39;</span>);
}<span style="color: #60a0b0; font-style: italic">//Hey!! You are eligible to cast vote.</span>
</pre></div>
`;

export const voteReturnBestWayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">function</span> checkVoterEligibility(myCitizenshipNo, myAge<span style="color: #666666">=</span><span style="color: #40a070">18</span>) {
  <span style="color: #007020; font-weight: bold">return</span> (validCitizenshipNo.includes(myCitizenshipNo) <span style="color: #666666">&amp;&amp;</span> myAge <span style="color: #666666">&gt;=</span> <span style="color: #40a070">18</span>) <span style="color: #666666">?</span> <span style="color: #007020; font-weight: bold">true</span> <span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>;
}

console.log(<span style="color: #4070a0">&#39;Your voting status: &#39;</span>, checkVoterEligibility(<span style="color: #4070a0">&#39;125963&#39;</span>,<span style="color: #40a070">23</span>) <span style="color: #666666">?</span> <span style="color: #4070a0">&#39;valid&#39;</span> <span style="color: #666666">:</span> <span style="color: #4070a0">&#39;invalid&#39;</span>);
</pre></div>
`;