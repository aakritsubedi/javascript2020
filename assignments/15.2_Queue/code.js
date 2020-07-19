export const queueImplementationCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #4070a0">&quot;use strict&quot;</span>;
<span style="color: #60a0b0; font-style: italic">//Queue Implementation using array</span>

module.exports <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">class</span> Queue {
  constructor(size) {
    <span style="color: #007020; font-weight: bold">this</span>.size <span style="color: #666666">=</span> size; <span style="color: #60a0b0; font-style: italic">//the size of queue</span>
    <span style="color: #007020; font-weight: bold">this</span>.items <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> <span style="color: #007020">Array</span>(<span style="color: #40a070">0</span>); <span style="color: #60a0b0; font-style: italic">//declare the array</span>
    <span style="color: #007020; font-weight: bold">this</span>.front <span style="color: #666666">=</span> <span style="color: #40a070">0</span>; <span style="color: #60a0b0; font-style: italic">//top</span>
    <span style="color: #007020; font-weight: bold">this</span>.rear <span style="color: #666666">=</span> <span style="color: #40a070">0</span>; <span style="color: #60a0b0; font-style: italic">//bottom</span>
  }

  <span style="color: #60a0b0; font-style: italic">//getSize: return the size of a queue</span>
  getSize() {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.items.length;
  }

  <span style="color: #60a0b0; font-style: italic">//getCapacity: return the full size of queue</span>
  getCapacity() {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.size;
  }

  <span style="color: #60a0b0; font-style: italic">//isFull: returns true if queue is full</span>
  isFull(){
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.size <span style="color: #666666">&lt;</span> (<span style="color: #007020; font-weight: bold">this</span>.getCapacity() <span style="color: #666666">-</span> <span style="color: #40a070">1</span>) <span style="color: #666666">?</span> <span style="color: #007020; font-weight: bold">true</span> <span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>; 
  }

  <span style="color: #60a0b0; font-style: italic">// Enqueue: Addition of element at rear</span>
  enqueue(element) {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #666666">!</span><span style="color: #007020; font-weight: bold">this</span>.isFull()) {
      <span style="color: #007020; font-weight: bold">this</span>.items.push(element); <span style="color: #60a0b0; font-style: italic">//insert at the rear of the element</span>
      <span style="color: #007020; font-weight: bold">this</span>.rear<span style="color: #666666">++</span>;
    }
    <span style="color: #007020; font-weight: bold">else</span> {
      console.log(<span style="color: #4070a0">&#39;Queue is full.&#39;</span>);
    }
    
    <span style="color: #007020; font-weight: bold">return</span>; 
  }

  <span style="color: #60a0b0; font-style: italic">//isEmpty: return true if queue is empty</span>
  isEmpty() {
    <span style="color: #007020; font-weight: bold">return</span> (<span style="color: #007020; font-weight: bold">this</span>.front <span style="color: #666666">==</span> <span style="color: #007020; font-weight: bold">this</span>.rear) <span style="color: #666666">?</span> <span style="color: #007020; font-weight: bold">true</span> <span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>
  }

  <span style="color: #60a0b0; font-style: italic">// Dequeue: Deletion of element at front</span>
  dequeue() {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #666666">!</span><span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #007020; font-weight: bold">this</span>.rear<span style="color: #666666">--</span>;
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.items.shift(); <span style="color: #60a0b0; font-style: italic">//reduce the size of an array by one and return the removed first element</span>
    }
    <span style="color: #007020; font-weight: bold">else</span> {
      console.log(<span style="color: #4070a0">&#39;The queue is empty.&#39;</span>);
    }

    <span style="color: #007020; font-weight: bold">return</span>;
  }

  <span style="color: #60a0b0; font-style: italic">//front: display the first element of queue</span>
  getFirst() {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #666666">!</span><span style="color: #007020; font-weight: bold">this</span>.isEmpty) {
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.items[<span style="color: #40a070">0</span>];
    }
    <span style="color: #007020; font-weight: bold">else</span> {
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">null</span>;
    }
  }

  <span style="color: #60a0b0; font-style: italic">//display All element</span>
  displayAll() {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      console.log(<span style="color: #4070a0">&#39;The queue is empty&#39;</span>);
    }

    <span style="color: #60a0b0; font-style: italic">//traverse front to rear</span>
    <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">this</span>.front; i<span style="color: #666666">&lt;</span><span style="color: #007020; font-weight: bold">this</span>.rear; i<span style="color: #666666">++</span>){
      console.log(<span style="border: 1px solid #FF0000">\`</span>The element at position<span style="color: #666666">:</span> \${i<span style="color: #666666">+</span><span style="color: #40a070">1</span>}<span style="color: #666666">:</span> is \${<span style="color: #007020; font-weight: bold">this</span>.items[i]}<span style="border: 1px solid #FF0000">\`</span>);
    }

    <span style="color: #007020; font-weight: bold">return</span>;
  }
};
</pre></div>
`;

export const exampleOneCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">const</span> Queue <span style="color: #666666">=</span> require(<span style="color: #4070a0">&#39;./queue&#39;</span>);

<span style="color: #007020; font-weight: bold">let</span> q1 <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> Queue(<span style="color: #40a070">10</span>); <span style="color: #60a0b0; font-style: italic">//initilize the queue of size 10</span>

console.log(q1.isEmpty()); <span style="color: #60a0b0; font-style: italic">//true</span>
console.log(q1.getCapacity()); <span style="color: #60a0b0; font-style: italic">//10</span>

q1.enqueue(<span style="color: #40a070">5</span>);
q1.enqueue(<span style="color: #40a070">10</span>);
q1.enqueue(<span style="color: #40a070">15</span>);

q1.displayAll(); <span style="color: #60a0b0; font-style: italic">//5,10,15</span>
console.log(<span style="color: #4070a0">&#39;&#39;</span>);

q1.dequeue();
q1.displayAll(); <span style="color: #60a0b0; font-style: italic">//10,15</span>
</pre></div>
`;

export const findBinCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #4070a0">&quot;use-strict&quot;</span>;
<span style="color: #007020; font-weight: bold">const</span> Queue <span style="color: #666666">=</span> require(<span style="color: #4070a0">&#39;./queue&#39;</span>);

<span style="color: #60a0b0; font-style: italic">// findBin(n)</span>
<span style="color: #007020; font-weight: bold">let</span> findBin <span style="color: #666666">=</span> n <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> results <span style="color: #666666">=</span> [];
  <span style="color: #007020; font-weight: bold">let</span> myQueue <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> Queue(n);

  <span style="color: #007020; font-weight: bold">let</span> v1,v2;
  myQueue.enqueue(<span style="color: #4070a0">&#39;1&#39;</span>); <span style="color: #60a0b0; font-style: italic">//insert the first element</span>
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;</span>n; i<span style="color: #666666">++</span>){
    results.push(myQueue.dequeue());

    v1 <span style="color: #666666">=</span> results[i] <span style="color: #666666">+</span> <span style="color: #4070a0">&quot;0&quot;</span>;
    v2 <span style="color: #666666">=</span> results[i] <span style="color: #666666">+</span> <span style="color: #4070a0">&quot;1&quot;</span>;

    myQueue.enqueue(v1);
    myQueue.enqueue(v2);
  }

  <span style="color: #007020; font-weight: bold">return</span> results;
}

<span style="color: #60a0b0; font-style: italic">//Binary Calculator</span>
<span style="color: #007020; font-weight: bold">let</span> binaryCalulator <span style="color: #666666">=</span> n <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> results <span style="color: #666666">=</span> findBin(n);

  <span style="color: #007020; font-weight: bold">return</span> results.pop();
}

console.log(findBin(<span style="color: #40a070">10</span>)); <span style="color: #60a0b0; font-style: italic">//[ &#39;1&#39;, &#39;10&#39;, &#39;11&#39;, &#39;100&#39;, &#39;101&#39;, &#39;110&#39;, &#39;111&#39;, &#39;1000&#39;, &#39;1001&#39;, &#39;1010&#39; ]</span>

console.log(<span style="border: 1px solid #FF0000">\`</span>The converted value is \${binaryCalulator(<span style="color: #40a070">25</span>)}<span style="border: 1px solid #FF0000">\`</span>); <span style="color: #60a0b0; font-style: italic">//The converted value is 11001</span>
</pre></div>
`;