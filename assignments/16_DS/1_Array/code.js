export const p1m1Code = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> numbers <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">4</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">10</span>,<span style="color: #40a070">6</span>,<span style="color: #40a070">3</span>];

<span style="color: #60a0b0; font-style: italic">//Simple Method</span>
<span style="color: #007020; font-weight: bold">let</span> removeEven <span style="color: #666666">=</span> arrOfNo <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> oddNoArray <span style="color: #666666">=</span> [];
  arrOfNo.forEach(no <span style="color: #666666">=&gt;</span> {
    <span style="color: #007020; font-weight: bold">if</span>(no<span style="color: #666666">%</span><span style="color: #40a070">2</span> <span style="color: #666666">!==</span> <span style="color: #40a070">0</span>){
      oddNoArray.push(no);
    }
  })

  <span style="color: #007020; font-weight: bold">return</span> oddNoArray;
}

<span style="color: #007020; font-weight: bold">let</span> oddNo <span style="color: #666666">=</span> removeEven(numbers);
console.log(oddNo); <span style="color: #60a0b0; font-style: italic">//[1, 5, 3]</span>
</pre></div>
`;
export const p1m2Code = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> numbers <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">4</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">10</span>,<span style="color: #40a070">6</span>,<span style="color: #40a070">3</span>];

<span style="color: #60a0b0; font-style: italic">//Using Filter Method</span>
<span style="color: #007020; font-weight: bold">let</span> oddNos <span style="color: #666666">=</span> numbers.filter(no <span style="color: #666666">=&gt;</span> (no<span style="color: #666666">%</span><span style="color: #40a070">2</span> <span style="color: #666666">!==</span> <span style="color: #40a070">0</span>));
console.log(oddNos); <span style="color: #60a0b0; font-style: italic">//[1, 5, 3]</span>
</pre></div>
`;

export const matMultiplicationCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> mat1 <span style="color: #666666">=</span> [
  [<span style="color: #40a070">1</span>, <span style="color: #40a070">2</span>, <span style="color: #40a070">3</span>],
  [<span style="color: #40a070">4</span>, <span style="color: #40a070">5</span>, <span style="color: #40a070">6</span>],
  [<span style="color: #40a070">7</span>, <span style="color: #40a070">8</span>, <span style="color: #40a070">9</span>]
] <span style="color: #60a0b0; font-style: italic">//first matrix of size 3*3</span>

<span style="color: #007020; font-weight: bold">let</span> mat2 <span style="color: #666666">=</span> [
  [<span style="color: #40a070">7</span>, <span style="color: #40a070">8</span>, <span style="color: #40a070">9</span>],
  [<span style="color: #40a070">4</span>, <span style="color: #40a070">5</span>, <span style="color: #40a070">6</span>],
  [<span style="color: #40a070">1</span>, <span style="color: #40a070">2</span>, <span style="color: #40a070">3</span>]
]<span style="color: #60a0b0; font-style: italic">//second matrix of size 3*3</span>

<span style="color: #007020; font-weight: bold">let</span> multiplyMatrix <span style="color: #666666">=</span> (matA, matB) <span style="color: #666666">=&gt;</span> {
  <span style="color: #60a0b0; font-style: italic">//for square matrix, multiplication is only possible if length of both array is same </span>
  <span style="color: #007020; font-weight: bold">if</span>(matA.length <span style="color: #666666">!==</span> matB.length) {
    <span style="color: #007020; font-weight: bold">return</span> <span style="color: #4070a0">&#39;Multiplication is not possible&#39;</span>;
  } 
  <span style="color: #007020; font-weight: bold">let</span> result <span style="color: #666666">=</span> []; <span style="color: #60a0b0; font-style: italic">//array to hold result</span>
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> x<span style="color: #666666">=</span><span style="color: #40a070">0</span>; x<span style="color: #666666">&lt;</span>matA.length; x<span style="color: #666666">++</span>){
    <span style="color: #007020; font-weight: bold">let</span> newRow <span style="color: #666666">=</span> []; <span style="color: #60a0b0; font-style: italic">//to add result</span>
    <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> y<span style="color: #666666">=</span><span style="color: #40a070">0</span>; y<span style="color: #666666">&lt;</span>matB.length; y<span style="color: #666666">++</span>){
      <span style="color: #007020; font-weight: bold">let</span> dotProduct <span style="color: #666666">=</span> <span style="color: #40a070">0</span>;
      <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;</span>matA[x].length; i<span style="color: #666666">++</span>){
        dotProduct <span style="color: #666666">+=</span> matA[x][i] <span style="color: #666666">*</span>  matB[i][y];
      }
      newRow.push(dotProduct);
    }
    result.push(newRow);
  }

  <span style="color: #007020; font-weight: bold">return</span> result;
}

<span style="color: #007020; font-weight: bold">const</span> prodAB <span style="color: #666666">=</span> multiplyMatrix(mat1, mat2);
console.log(prodAB); <span style="color: #60a0b0; font-style: italic">//[ [ 18, 24, 30 ], [ 54, 69, 84 ], [ 90, 114, 138 ] ]</span>
 
<span style="color: #007020; font-weight: bold">const</span> prodAB1 <span style="color: #666666">=</span> multiplyMatrix(mat1, [[<span style="color: #40a070">1</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">3</span>]]);
console.log(prodAB1); <span style="color: #60a0b0; font-style: italic">//Multiplication is not possible</span>
</pre></div>
`;

export const arraySortCode = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//Array of numbers in random order</span>
<span style="color: #007020; font-weight: bold">let</span> numbers <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">25</span>,<span style="color: #40a070">6</span>,<span style="color: #40a070">7</span>,<span style="color: #40a070">10</span>,<span style="color: #40a070">12</span>,<span style="color: #40a070">46</span>,<span style="color: #40a070">102</span>,<span style="color: #40a070">3</span>,<span style="color: #40a070">8</span>,<span style="color: #40a070">9</span>,<span style="color: #40a070">15</span>];
<span style="color: #007020; font-weight: bold">let</span> names<span style="color: #666666">=</span> [<span style="color: #4070a0">&#39;Suyog&#39;</span>,<span style="color: #4070a0">&#39;Utsav&#39;</span>,<span style="color: #4070a0">&#39;Aakrit&#39;</span>,<span style="color: #4070a0">&#39;Sadikshya&#39;</span>,<span style="color: #4070a0">&#39;Yukti&#39;</span>,<span style="color: #4070a0">&#39;Amrit&#39;</span>,<span style="color: #4070a0">&#39;Anish&#39;</span>,<span style="color: #4070a0">&#39;Samir&#39;</span>]

<span style="color: #007020; font-weight: bold">let</span> sortAsc <span style="color: #666666">=</span> no <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;</span>no.length; i<span style="color: #666666">++</span>){
    <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> j<span style="color: #666666">=</span><span style="color: #40a070">0</span>; j<span style="color: #666666">&lt;</span>no.length; j<span style="color: #666666">++</span>){
      <span style="color: #007020; font-weight: bold">if</span>(no[i] <span style="color: #666666">&lt;</span> no[j]){
        <span style="color: #60a0b0; font-style: italic">//swap</span>
        <span style="color: #007020; font-weight: bold">let</span> temp <span style="color: #666666">=</span> no[i];
        no[i] <span style="color: #666666">=</span> no[j];
        no[j] <span style="color: #666666">=</span> temp;
      }
    }
  }

  console.log(<span style="color: #4070a0">&#39;In ascending order: &#39;</span>, no);
}

<span style="color: #007020; font-weight: bold">let</span> sortDesc <span style="color: #666666">=</span> no <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;</span>no.length; i<span style="color: #666666">++</span>){
    <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> j<span style="color: #666666">=</span><span style="color: #40a070">0</span>; j<span style="color: #666666">&lt;</span>no.length; j<span style="color: #666666">++</span>){
      <span style="color: #007020; font-weight: bold">if</span>(no[i] <span style="color: #666666">&gt;</span> no[j]){
        <span style="color: #60a0b0; font-style: italic">//swap</span>
        <span style="color: #007020; font-weight: bold">let</span> temp <span style="color: #666666">=</span> no[i];
        no[i] <span style="color: #666666">=</span> no[j];
        no[j] <span style="color: #666666">=</span> temp;
      }
    }
  }

  console.log(<span style="color: #4070a0">&#39;In descending order: &#39;</span>, no);
}

<span style="color: #007020; font-weight: bold">let</span> sortArray <span style="color: #666666">=</span> (no, method, sortAsc, sortDesc) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">switch</span>(method){
    <span style="color: #007020; font-weight: bold">case</span> <span style="color: #4070a0">&#39;asc&#39;</span><span style="color: #666666">:</span>
    <span style="color: #007020; font-weight: bold">case</span> <span style="color: #4070a0">&#39;ASC&#39;</span><span style="color: #666666">:</span>
      sortAsc(no);
      <span style="color: #007020; font-weight: bold">break</span>;
    <span style="color: #007020; font-weight: bold">case</span> <span style="color: #4070a0">&#39;desc&#39;</span><span style="color: #666666">:</span>
    <span style="color: #007020; font-weight: bold">case</span> <span style="color: #4070a0">&#39;DESC&#39;</span><span style="color: #666666">:</span>
      sortDesc(no);
      <span style="color: #007020; font-weight: bold">break</span>;
    <span style="color: #007020; font-weight: bold">default</span><span style="color: #666666">:</span>
      <span style="color: #007020; font-weight: bold">return</span>(<span style="border: 1px solid #FF0000">\`</span>The \${method} is not supported. Use ASC<span style="color: #666666">/</span>asc to sort the array <span style="color: #007020; font-weight: bold">in</span> ascending order or DESC<span style="color: #666666">/</span>desc to sort the array <span style="color: #007020; font-weight: bold">in</span> descending order.<span style="border: 1px solid #FF0000">\`</span>);
  }
}

sortArray(numbers, <span style="color: #4070a0">&#39;asc&#39;</span>, sortAsc, sortDesc); <span style="color: #60a0b0; font-style: italic">//[ 1, 3, 6, 7, 8, 9, 10, 12, 15, 25, 46, 102 ]</span>
sortArray(numbers, <span style="color: #4070a0">&#39;desc&#39;</span>, sortAsc, sortDesc); <span style="color: #60a0b0; font-style: italic">//[ 102, 46, 25, 15, 12, 10, 9, 8, 7, 6, 3, 1 ]</span>

sortArray(names, <span style="color: #4070a0">&#39;asc&#39;</span>, sortAsc, sortDesc); <span style="color: #60a0b0; font-style: italic">//[ &#39;Aakrit&#39;,&#39;Amrit&#39;,&#39;Anish&#39;,&#39;Sadikshya&#39;,&#39;Samir&#39;,&#39;Suyog&#39;, &#39;Utsav&#39;,&#39;Yukti&#39;]</span>
sortArray(names, <span style="color: #4070a0">&#39;desc&#39;</span>, sortAsc, sortDesc); <span style="color: #60a0b0; font-style: italic">//[ &#39;Yukti&#39;,&#39;Utsav&#39;,&#39;Suyog&#39;,&#39;Samir&#39;,&#39;Sadikshya&#39;,&#39;Anish&#39;,&#39;Amrit&#39;,&#39;Aakrit&#39; ]</span>
</pre></div>
`;

export const filterMethodCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #60a0b0; font-style: italic">//Array of age </span>
<span style="color: #007020; font-weight: bold">let</span> ages <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">25</span>,<span style="color: #40a070">60</span>,<span style="color: #40a070">17</span>,<span style="color: #40a070">10</span>,<span style="color: #40a070">12</span>,<span style="color: #40a070">46</span>,<span style="color: #40a070">19</span>,<span style="color: #40a070">38</span>,<span style="color: #40a070">19</span>,<span style="color: #40a070">15</span>];

<span style="color: #60a0b0; font-style: italic">// Function to check Adult</span>
<span style="color: #007020; font-weight: bold">let</span> checkAdult <span style="color: #666666">=</span> value <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">return</span> value <span style="color: #666666">&gt;=</span><span style="color: #40a070">18</span> <span style="color: #666666">?</span>  <span style="color: #007020; font-weight: bold">true</span> <span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>;
}

<span style="color: #007020; font-weight: bold">let</span> filterMethod <span style="color: #666666">=</span> (arr, validate) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> isValid <span style="color: #666666">=</span> [];
  arr.forEach(item <span style="color: #666666">=&gt;</span> {
    <span style="color: #007020; font-weight: bold">if</span>(validate(item)){
      isValid.push(item);
    }
  });

  <span style="color: #007020; font-weight: bold">return</span> isValid;
}

<span style="color: #007020; font-weight: bold">let</span> adults <span style="color: #666666">=</span> filterMethod(ages, checkAdult);
console.log(adults);
</pre></div>
`;

export const arrayDuplicateCode = `<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> numbers <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">4</span>,<span style="color: #40a070">5</span>,<span style="color: #40a070">10</span>,<span style="color: #40a070">6</span>,<span style="color: #40a070">3</span>,<span style="color: #40a070">4</span>,<span style="color: #40a070">10</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">4</span>];

<span style="color: #60a0b0; font-style: italic">//to check weather array include or not</span>
<span style="color: #007020; font-weight: bold">let</span> includesOrNot <span style="color: #666666">=</span> (no, arr) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> flag <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">false</span>;
  <span style="color: #007020; font-weight: bold">for</span>(<span style="color: #007020; font-weight: bold">let</span> i<span style="color: #666666">=</span><span style="color: #40a070">0</span>; i<span style="color: #666666">&lt;</span>arr.length; i<span style="color: #666666">++</span>){
    flag <span style="color: #666666">=</span> (no <span style="color: #666666">===</span> arr[i]) <span style="color: #666666">?</span> <span style="color: #007020; font-weight: bold">true</span> <span style="color: #666666">:</span> <span style="color: #007020; font-weight: bold">false</span>;
    <span style="color: #007020; font-weight: bold">if</span>(flag){
      <span style="color: #007020; font-weight: bold">break</span>;
    }
  }

  <span style="color: #007020; font-weight: bold">return</span> flag;
} 

<span style="color: #007020; font-weight: bold">let</span> removeDuplicate <span style="color: #666666">=</span> (arr, isInArry) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">let</span> temp <span style="color: #666666">=</span> [];
  arr.forEach(element <span style="color: #666666">=&gt;</span> {
    <span style="color: #007020; font-weight: bold">if</span>(<span style="color: #666666">!</span>isInArry(element, temp)){      
      temp.push(element);
    } 
    
  })

  <span style="color: #007020; font-weight: bold">return</span> temp;
}

<span style="color: #007020; font-weight: bold">let</span> noDuplicate <span style="color: #666666">=</span> removeDuplicate(numbers, includesOrNot);
console.log(noDuplicate); <span style="color: #60a0b0; font-style: italic">//[ 1, 2, 4, 5, 10, 6, 3 ]</span>
</pre></div>
`;