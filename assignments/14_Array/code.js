export const arrayConstructorCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">var</span> my_array <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> <span style="color: #007020">Array</span>(<span style="color: #40a070">1</span>,<span style="color: #40a070">3</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">4</span>)
console.log(my_array)
</pre></div>
`;
export const arrayLiteralCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">var</span> my_array <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">3</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">4</span>]
console.log(my_array)
</pre></div>
`;

export const accessingArrayCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">var</span> my_array <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">3</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">4</span>]
<span style="color: #007020; font-weight: bold">var</span> my_element <span style="color: #666666">=</span> my_array[<span style="color: #40a070">3</span>]
console.log(my_element)
</pre></div>
`;

export const arrayModifyCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">var</span> my_array <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">3</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">4</span>]
console.log(my_array[<span style="color: #40a070">2</span>])
my_array[<span style="color: #40a070">2</span>] <span style="color: #666666">=</span> <span style="color: #40a070">0</span>
console.log(my_array[<span style="color: #40a070">2</span>])
</pre></div>
`;

export const arrayIsObjectCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">var</span> my_array <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">3</span>,<span style="color: #40a070">4</span>,<span style="color: #40a070">5</span>]
console.log(<span style="color: #007020; font-weight: bold">typeof</span> my_array) <span style="color: #60a0b0; font-style: italic">//Objects</span>
</pre></div>
`;

export const arrayAddRemoveMethodCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> array1 <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">3</span>];
<span style="color: #007020; font-weight: bold">let</span> array2 <span style="color: #666666">=</span> [<span style="color: #40a070">4</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">6</span>];

<span style="color: #60a0b0; font-style: italic">//arr.push(...items)</span>
array1.push(...array2);
console.log(array1); <span style="color: #60a0b0; font-style: italic">//[1,2,3,4,5,6];</span>

array1.push(<span style="color: #40a070">7</span>);
console.log(array1); <span style="color: #60a0b0; font-style: italic">//[1,2,3,4,5,6,7];</span>

<span style="color: #60a0b0; font-style: italic">//arr.pop()</span>
array1.pop(); <span style="color: #60a0b0; font-style: italic">//[1,2,3,4,5,6];</span>
array1.pop(); <span style="color: #60a0b0; font-style: italic">//[1,2,3,4,5];</span>
<span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>;i<span style="color: #666666">&lt;</span><span style="color: #40a070">2</span>; i<span style="color: #666666">++</span>){
  array1.pop();
} 
console.log(array1); <span style="color: #60a0b0; font-style: italic">//[1,2,3]</span>

<span style="color: #60a0b0; font-style: italic">//arr.shift()</span>
array1.shift(); 
console.log(array1); <span style="color: #60a0b0; font-style: italic">//[2,3]</span>

<span style="color: #60a0b0; font-style: italic">//arr.unshift(...item)</span>
array1.unshift(<span style="color: #40a070">1</span>); <span style="color: #60a0b0; font-style: italic">//[1,2,3]</span>
array1.unshift(...array2); 
console.log(array1); <span style="color: #60a0b0; font-style: italic">//[4,5,6,1,2,3]</span>

<span style="color: #60a0b0; font-style: italic">//arr.splice(index, howMany, item1, ... itemN)</span>
array1.splice(<span style="color: #40a070">1</span>,<span style="color: #40a070">3</span>); <span style="color: #60a0b0; font-style: italic">// starts from index 1 and remove successive 3 items</span>
console.log(array1); <span style="color: #60a0b0; font-style: italic">//[ 4, 2, 3 ]</span>

array1.splice(<span style="color: #40a070">1</span>,<span style="color: #40a070">0</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">6</span>,<span style="color: #40a070">1</span>); <span style="color: #60a0b0; font-style: italic">//from index 1 remove 0element and add 5,6,1</span>
console.log(array1); <span style="color: #60a0b0; font-style: italic">//[4,5,6,1,2,3]</span>

<span style="color: #60a0b0; font-style: italic">//arr.slice(start,end)</span>
array1.splice(<span style="color: #40a070">0</span>,<span style="color: #40a070">3</span>);
console.log(array1); <span style="color: #60a0b0; font-style: italic">//[1,2,3]</span>

<span style="color: #60a0b0; font-style: italic">//arr.concat(arr1, arr2...)</span>
<span style="color: #007020; font-weight: bold">let</span> array3 <span style="color: #666666">=</span> array1.concat(array2);
console.log(array3);<span style="color: #60a0b0; font-style: italic">//[1,2,3,4,5,6]</span>
</pre></div>
`; 

export const arrayForeachSyntaxCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">arr.forEach(<span style="color: #007020; font-weight: bold">function</span>(item, index, array) {
  <span style="color: #60a0b0; font-style: italic">// ... do something with item</span>
});
</pre></div>
`;

export const arrayForeachExampleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//Declare the array</span>
<span style="color: #007020; font-weight: bold">let</span> fruits <span style="color: #666666">=</span>  [<span style="color: #4070a0">&quot;apples&quot;</span>, <span style="color: #4070a0">&quot;oranges&quot;</span>, <span style="color: #4070a0">&quot;mango&quot;</span>, <span style="color: #4070a0">&#39;banana&#39;</span>, <span style="color: #4070a0">&#39;watermelon&#39;</span>, <span style="color: #4070a0">&#39;gauva&#39;</span>];

<span style="color: #60a0b0; font-style: italic">//arr.foreach(item =&gt; {})</span>

fruits.forEach((item, index, array) <span style="color: #666666">=&gt;</span> {
  console.log(<span style="border: 1px solid #FF0000">\`</span>S.N.<span style="color: #666666">:</span> \${index<span style="color: #666666">+</span><span style="color: #40a070">1</span>} Item<span style="color: #666666">:</span> \${item.toUpperCase()}<span style="border: 1px solid #FF0000">\`</span>);
})
</pre></div>
`;

export const searchingOneCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//1. indexOf/lastIndexOf and includes</span>
<span style="color: #007020; font-weight: bold">let</span> arr <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>, <span style="color: #40a070">0</span>, <span style="color: #007020; font-weight: bold">false</span>, <span style="color: #40a070">1</span>, <span style="color: #40a070">2</span>, <span style="color: #40a070">1</span>, <span style="color: #40a070">3</span>, <span style="color: #007020; font-weight: bold">NaN</span>];

console.log( arr.indexOf(<span style="color: #40a070">0</span>) ); <span style="color: #60a0b0; font-style: italic">// 1</span>
console.log( arr.indexOf(<span style="color: #007020; font-weight: bold">false</span>) ); <span style="color: #60a0b0; font-style: italic">// 2</span>
console.log( arr.indexOf(<span style="color: #007020; font-weight: bold">null</span>) ); <span style="color: #60a0b0; font-style: italic">// -1</span>
console.log( arr.lastIndexOf(<span style="color: #40a070">1</span>)); <span style="color: #60a0b0; font-style: italic">//5</span>
console.log( arr.indexOf(<span style="color: #007020; font-weight: bold">NaN</span>) ); <span style="color: #60a0b0; font-style: italic">// -1 (should be 7, but === equality doesn&#39;t work for NaN)</span>

console.log( arr.includes(<span style="color: #40a070">1</span>) ); <span style="color: #60a0b0; font-style: italic">// true</span>
console.log( arr.includes(<span style="color: #007020; font-weight: bold">NaN</span>) );<span style="color: #60a0b0; font-style: italic">// true (correct)</span>
</pre></div>
`;

export const searchingTwoCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> age <span style="color: #666666">=</span> [<span style="color: #40a070">10</span>, <span style="color: #40a070">12</span>, <span style="color: #40a070">15</span>, <span style="color: #40a070">18</span>, <span style="color: #40a070">20</span>, <span style="color: #40a070">22</span>, <span style="color: #40a070">16</span>, <span style="color: #40a070">5</span>];
<span style="color: #007020; font-weight: bold">let</span> checkAdult <span style="color: #666666">=</span> value <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">return</span> value <span style="color: #666666">&gt;=</span> <span style="color: #40a070">18</span> <span style="color: #666666">?</span> <span style="color: #007020; font-weight: bold">true</span><span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>; 
}
<span style="color: #007020; font-weight: bold">let</span> adult <span style="color: #666666">=</span> age.findIndex(checkAdult);
console.log(adult);<span style="color: #60a0b0; font-style: italic">//3, indexOf first one to return true i.e 18</span>

<span style="color: #60a0b0; font-style: italic">// if true is returned, item is returned and iteration is stopped</span>
<span style="color: #60a0b0; font-style: italic">// for falsy scenario returns undefined</span>
<span style="color: #007020; font-weight: bold">let</span> result <span style="color: #666666">=</span> age.find(checkAdult);
console.log(result); <span style="color: #60a0b0; font-style: italic">//18, value of first one to return true</span>
</pre></div>
`;
export const searchingThreeCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> age <span style="color: #666666">=</span> [<span style="color: #40a070">10</span>, <span style="color: #40a070">12</span>, <span style="color: #40a070">15</span>, <span style="color: #40a070">18</span>, <span style="color: #40a070">20</span>, <span style="color: #40a070">22</span>, <span style="color: #40a070">16</span>, <span style="color: #40a070">5</span>];
<span style="color: #007020; font-weight: bold">let</span> checkAdult <span style="color: #666666">=</span> value <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">return</span> value <span style="color: #666666">&gt;=</span> <span style="color: #40a070">18</span> <span style="color: #666666">?</span> <span style="color: #007020; font-weight: bold">true</span><span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>; 
}

<span style="color: #007020; font-weight: bold">let</span> results <span style="color: #666666">=</span> age.filter(checkAdult);
console.log(results);<span style="color: #60a0b0; font-style: italic">//[ 18, 20, 22 ]</span>
</pre></div>
`; 