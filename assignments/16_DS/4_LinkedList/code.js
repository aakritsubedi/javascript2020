export const nodeCode =  `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #4070a0">&quot;use strict&quot;</span>;

module.exports <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">class</span> Node {
  constructor(data){
    <span style="color: #007020; font-weight: bold">this</span>.data <span style="color: #666666">=</span> data;
    <span style="color: #007020; font-weight: bold">this</span>.nextElement <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>;
  }
}
</pre></div>
`;

export const singleLinkedListCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #4070a0">&quot;use strict&quot;</span>;

<span style="color: #007020; font-weight: bold">const</span> Node <span style="color: #666666">=</span> require(<span style="color: #4070a0">&#39;./node&#39;</span>);

module.exports <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">class</span> LinkedList {
  constructor() {
    <span style="color: #007020; font-weight: bold">this</span>.head <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>;
  }

  <span style="color: #60a0b0; font-style: italic">//Insert At head</span>
  insertAtHead(element) {
    <span style="color: #007020; font-weight: bold">let</span> tempNode <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> Node(element);
    tempNode.nextElement <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.head;
    <span style="color: #007020; font-weight: bold">this</span>.head <span style="color: #666666">=</span> tempNode; 

    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>; <span style="color: #60a0b0; font-style: italic">//returns the updated list</span>
  }

  <span style="color: #60a0b0; font-style: italic">//isEmpty</span>
  isEmpty() {
    <span style="color: #007020; font-weight: bold">return</span> (<span style="color: #007020; font-weight: bold">this</span>.head <span style="color: #666666">==</span> <span style="color: #007020; font-weight: bold">null</span>) <span style="color: #666666">?</span> <span style="color: #007020; font-weight: bold">true</span> <span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>;
  }

  <span style="color: #60a0b0; font-style: italic">//displayAll: function to print all the list</span>
  displayAll() {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #666666">!</span><span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #007020; font-weight: bold">let</span> temp <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.head; 
      <span style="color: #007020; font-weight: bold">while</span>(temp <span style="color: #666666">!=</span> <span style="color: #007020; font-weight: bold">null</span>) {
        process.stdout.write(<span style="color: #007020">String</span>(temp.data));
        process.stdout.write(<span style="color: #4070a0">&#39; --&gt; &#39;</span>);
        temp <span style="color: #666666">=</span> temp.nextElement;
      }
      console.log(<span style="color: #4070a0">&quot;null&quot;</span>);
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>;
    }
    <span style="color: #007020; font-weight: bold">else</span> {
      console.log(<span style="color: #4070a0">&quot;The list is empty.&quot;</span>);
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
    }
  }

  <span style="color: #60a0b0; font-style: italic">//getHead: returns the head of the list</span>
  getHead() {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>.head;
  }

  <span style="color: #60a0b0; font-style: italic">//setHead: set new head element</span>
  setHead(head) {
    <span style="color: #007020; font-weight: bold">this</span>.head <span style="color: #666666">=</span> head;
    
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>;
  }

  <span style="color: #60a0b0; font-style: italic">//getListString</span>
  getListString() {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #666666">!</span><span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #007020; font-weight: bold">let</span> st <span style="color: #666666">=</span> <span style="color: #4070a0">&quot;&quot;</span>;
      <span style="color: #007020; font-weight: bold">let</span> temp <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.head; 
      <span style="color: #007020; font-weight: bold">while</span>(temp <span style="color: #666666">!=</span> <span style="color: #007020; font-weight: bold">null</span>) {
        st <span style="color: #666666">+=</span> <span style="color: #007020">String</span>(temp.data);
        st <span style="color: #666666">+=</span> <span style="color: #4070a0">&#39; --&gt; &#39;</span>;
        temp <span style="color: #666666">=</span> temp.nextElement;
      }
      st <span style="color: #666666">+=</span> <span style="color: #4070a0">&quot;null&quot;</span>;
      <span style="color: #007020; font-weight: bold">return</span> st;
    }
    <span style="color: #007020; font-weight: bold">else</span> {
      console.log(<span style="color: #4070a0">&quot;The list is empty.&quot;</span>);
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
    }
  }

  <span style="color: #60a0b0; font-style: italic">//Insert at tail</span>
  insertAtTail() {
    <span style="color: #60a0b0; font-style: italic">//Creating a new Node with data as newData</span>
    <span style="color: #007020; font-weight: bold">let</span> node <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> Node(newData);

    <span style="color: #60a0b0; font-style: italic">//check for case when list is empty</span>
    <span style="color: #007020; font-weight: bold">if</span> (<span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #60a0b0; font-style: italic">//Needs to Insert the new node at Head</span>
      <span style="color: #007020; font-weight: bold">this</span>.head <span style="color: #666666">=</span> node;
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>;
    }

    <span style="color: #60a0b0; font-style: italic">//Start from head</span>
    <span style="color: #007020; font-weight: bold">let</span> currentNode <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.head;

    <span style="color: #60a0b0; font-style: italic">//Iterate to the last element</span>
    <span style="color: #007020; font-weight: bold">while</span> (currentNode.nextElement <span style="color: #666666">!=</span> <span style="color: #007020; font-weight: bold">null</span>) {
      currentNode <span style="color: #666666">=</span> currentNode.nextElement;
    }

    <span style="color: #60a0b0; font-style: italic">//Make new node the nextElement of last node of list</span>
    currentNode.nextElement <span style="color: #666666">=</span> node;
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>;
  }

  <span style="color: #60a0b0; font-style: italic">//Search </span>
  search(value) {
    <span style="color: #60a0b0; font-style: italic">//Start from the first element</span>
    <span style="color: #007020; font-weight: bold">let</span> currentNode <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.head;

    <span style="color: #60a0b0; font-style: italic">//Traverse the list until you find the value or reach the end</span>
    <span style="color: #007020; font-weight: bold">while</span> (currentNode <span style="color: #666666">!=</span> <span style="color: #007020; font-weight: bold">null</span>) {
      <span style="color: #007020; font-weight: bold">if</span> (currentNode.data <span style="color: #666666">==</span> value) {
        <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>; <span style="color: #60a0b0; font-style: italic">//value found</span>
      }
      currentNode <span style="color: #666666">=</span> currentNode.nextElement
    }
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>; <span style="color: #60a0b0; font-style: italic">//value not found</span>
  }

  deleteAtHead() {
    <span style="color: #60a0b0; font-style: italic">//if list is empty, do nothing</span>
    <span style="color: #007020; font-weight: bold">if</span> (<span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>;
    }
    <span style="color: #60a0b0; font-style: italic">//Get the head and first element of the list</span>
    <span style="color: #007020; font-weight: bold">let</span> firstElement <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.head;

    <span style="color: #60a0b0; font-style: italic">//If list is not empty, link head to the nextElement of firstElement</span>
    <span style="color: #007020; font-weight: bold">this</span>.head <span style="color: #666666">=</span> firstElement.nextElement;

    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>;
  }
  deleteVal(value) {
    <span style="color: #007020; font-weight: bold">let</span> deleted <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>; <span style="color: #60a0b0; font-style: italic">//True or False</span>
    <span style="color: #60a0b0; font-style: italic">//Write code here</span>

    <span style="color: #60a0b0; font-style: italic">//if list is empty return false</span>
    <span style="color: #007020; font-weight: bold">if</span> (<span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">false</span>;
    }

    <span style="color: #60a0b0; font-style: italic">//else get pointer to head</span>
    <span style="color: #007020; font-weight: bold">let</span> currentNode <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.head;
    <span style="color: #60a0b0; font-style: italic">// if first node&#39;s is the node to be deleted, delete it and return true</span>
    <span style="color: #007020; font-weight: bold">if</span> (currentNode.data <span style="color: #666666">==</span> value) {
      <span style="color: #007020; font-weight: bold">this</span>.head <span style="color: #666666">=</span> currentNode.nextElement;
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>;
    }

    <span style="color: #60a0b0; font-style: italic">// else traverse the list</span>
    <span style="color: #007020; font-weight: bold">while</span> (currentNode.nextElement <span style="color: #666666">!=</span> <span style="color: #007020; font-weight: bold">null</span>) {
      <span style="color: #60a0b0; font-style: italic">// if a node whose next node has the value as data, is found, delete it from the list and return true</span>
      <span style="color: #007020; font-weight: bold">if</span> (currentNode.nextElement.data <span style="color: #666666">==</span> value) {
        currentNode.nextElement <span style="color: #666666">=</span> currentNode.nextElement.nextElement;
        <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">true</span>;
      }
      currentNode <span style="color: #666666">=</span> currentNode.nextElement;
    }
    <span style="color: #60a0b0; font-style: italic">//else node was not found, return false</span>
    deleted <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">false</span>;
    <span style="color: #007020; font-weight: bold">return</span> deleted;
  }

  deleteAtTail() {
    <span style="color: #60a0b0; font-style: italic">// check for the case when linked list is empty</span>
    <span style="color: #007020; font-weight: bold">if</span> (<span style="color: #007020; font-weight: bold">this</span>.isEmpty()) {
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>;
    }
    <span style="color: #60a0b0; font-style: italic">//if linked list is not empty, get the pointer to first node</span>
    <span style="color: #007020; font-weight: bold">let</span> firstNode <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">this</span>.head;
    <span style="color: #60a0b0; font-style: italic">//check for the corner case when linked list has only one element</span>
    <span style="color: #007020; font-weight: bold">if</span> (firstNode.nextElement <span style="color: #666666">==</span> <span style="color: #007020; font-weight: bold">null</span>) {
      <span style="color: #007020; font-weight: bold">this</span>.deleteAtHead();
      <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>;
    }
    <span style="color: #60a0b0; font-style: italic">//otherwise traverse to reach second last node</span>
    <span style="color: #007020; font-weight: bold">while</span> (firstNode.nextElement.nextElement <span style="color: #666666">!=</span> <span style="color: #007020; font-weight: bold">null</span>) {
      firstNode <span style="color: #666666">=</span> firstNode.nextElement;
    }
    <span style="color: #60a0b0; font-style: italic">//since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node</span>
    firstNode.nextElement <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>;
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020; font-weight: bold">this</span>;
  }
}
</pre></div>
`;

export const reverseListCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #4070a0">&quot;use strict&quot;</span>;
<span style="color: #007020; font-weight: bold">const</span> LinkedList <span style="color: #666666">=</span> require(<span style="color: #4070a0">&#39;./singleLinkedList.js&#39;</span>);
<span style="color: #007020; font-weight: bold">const</span> Node <span style="color: #666666">=</span> require(<span style="color: #4070a0">&#39;./node.js&#39;</span>);

<span style="color: #60a0b0; font-style: italic">//Access HeadNode =&gt; list.getHead()</span>
<span style="color: #60a0b0; font-style: italic">//Set the value of HeadNode =&gt; list.getHead()</span>
<span style="color: #60a0b0; font-style: italic">//Check if list is empty =&gt; list.isEmpty()</span>
<span style="color: #60a0b0; font-style: italic">//Insert at head =&gt; list.insertAtHead(value)</span>
<span style="color: #60a0b0; font-style: italic">//Delete at head =&gt; list.deleteAtHead()</span>
<span style="color: #60a0b0; font-style: italic">//Insert at tail =&gt; list.insertAtTail(value)</span>
<span style="color: #60a0b0; font-style: italic">//Search for element =&gt; list.search(value)</span>
<span style="color: #60a0b0; font-style: italic">//Delete by value =&gt; list.deleteVal(value)</span>
<span style="color: #60a0b0; font-style: italic">//Node class { data ; Node nextElement;}</span>

<span style="color: #007020; font-weight: bold">function</span> reverse(list) {
  <span style="color: #007020; font-weight: bold">let</span> previousNode <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>;
  <span style="color: #007020; font-weight: bold">let</span> currentNode <span style="color: #666666">=</span> list.getHead(); <span style="color: #60a0b0; font-style: italic">// The current node</span>
  <span style="color: #007020; font-weight: bold">let</span> nextNode <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">null</span>; <span style="color: #60a0b0; font-style: italic">// The next node in the list</span>

  <span style="color: #60a0b0; font-style: italic">//Reversal</span>
  <span style="color: #007020; font-weight: bold">while</span> (currentNode <span style="color: #666666">!=</span> <span style="color: #007020; font-weight: bold">null</span>) {
    nextNode <span style="color: #666666">=</span> currentNode.nextElement;
    currentNode.nextElement <span style="color: #666666">=</span> previousNode;
    previousNode <span style="color: #666666">=</span> currentNode;
    currentNode <span style="color: #666666">=</span> nextNode;
  }

  <span style="color: #60a0b0; font-style: italic">//Set the last element as the new head node</span>
  list.setHead(previousNode);

}

<span style="color: #007020; font-weight: bold">let</span> list <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> LinkedList();
list.insertAtHead(<span style="color: #40a070">4</span>);
list.insertAtHead(<span style="color: #40a070">9</span>);
list.insertAtHead(<span style="color: #40a070">6</span>);
list.insertAtHead(<span style="color: #40a070">1</span>);
list.insertAtHead(<span style="color: #40a070">0</span>);
list.displayAll(); <span style="color: #60a0b0; font-style: italic">//0 --&gt; 1 --&gt; 6 --&gt; 9 --&gt; 4 --&gt; null</span>
reverse(list);
list.displayAll(); <span style="color: #60a0b0; font-style: italic">//4 --&gt; 9 --&gt; 6 --&gt; 1 --&gt; 0 --&gt; null</span>
</pre></div>
`;