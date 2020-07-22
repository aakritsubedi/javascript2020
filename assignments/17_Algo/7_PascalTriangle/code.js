export const pascalTriangleRecursiveCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> pascalTriangle <span style="color: #666666">=</span> lineNumber <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">if</span> (lineNumber <span style="color: #666666">===</span> <span style="color: #40a070">0</span>) {
    <span style="color: #007020; font-weight: bold">return</span> [<span style="color: #40a070">1</span>];
  }

  <span style="color: #007020; font-weight: bold">const</span> currentLineSize <span style="color: #666666">=</span> lineNumber <span style="color: #666666">+</span> <span style="color: #40a070">1</span>;
  <span style="color: #007020; font-weight: bold">const</span> previousLineSize <span style="color: #666666">=</span> currentLineSize <span style="color: #666666">-</span> <span style="color: #40a070">1</span>;

  <span style="color: #60a0b0; font-style: italic">// Create container for current line values.</span>
  <span style="color: #007020; font-weight: bold">const</span> currentLine <span style="color: #666666">=</span> [];

  <span style="color: #60a0b0; font-style: italic">// We&#39;ll calculate current line based on previous one.</span>
  <span style="color: #007020; font-weight: bold">const</span> previousLine <span style="color: #666666">=</span> pascalTriangle(lineNumber <span style="color: #666666">-</span> <span style="color: #40a070">1</span>);

  <span style="color: #60a0b0; font-style: italic">// Let&#39;s go through all elements of current line except the first and</span>
  <span style="color: #60a0b0; font-style: italic">// last one (since they were and will be filled with 1&#39;s) and calculate</span>
  <span style="color: #60a0b0; font-style: italic">// current coefficient based on previous line.</span>
  <span style="color: #007020; font-weight: bold">for</span> (<span style="color: #007020; font-weight: bold">let</span> numIndex <span style="color: #666666">=</span> <span style="color: #40a070">0</span>; numIndex <span style="color: #666666">&lt;</span> currentLineSize; numIndex <span style="color: #666666">+=</span> <span style="color: #40a070">1</span>) {
    <span style="color: #007020; font-weight: bold">const</span> leftCoefficient <span style="color: #666666">=</span> (numIndex <span style="color: #666666">-</span> <span style="color: #40a070">1</span>) <span style="color: #666666">&gt;=</span> <span style="color: #40a070">0</span> <span style="color: #666666">?</span> previousLine[numIndex <span style="color: #666666">-</span> <span style="color: #40a070">1</span>] <span style="color: #666666">:</span> <span style="color: #40a070">0</span>;
    <span style="color: #007020; font-weight: bold">const</span> rightCoefficient <span style="color: #666666">=</span> numIndex <span style="color: #666666">&lt;</span> previousLineSize <span style="color: #666666">?</span> previousLine[numIndex] <span style="color: #666666">:</span> <span style="color: #40a070">0</span>;

    currentLine[numIndex] <span style="color: #666666">=</span> leftCoefficient <span style="color: #666666">+</span> rightCoefficient;
  }

  <span style="color: #007020; font-weight: bold">return</span> currentLine;
}

console.log(pascalTriangle(<span style="color: #40a070">5</span>)); <span style="color: #60a0b0; font-style: italic">//[ 1, 5, 10, 10, 5, 1 ]</span>
console.log(pascalTriangle(<span style="color: #40a070">10</span>)); <span style="color: #60a0b0; font-style: italic">//[ 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1 ]</span>
</pre></div>
`;

export const pascalTriangleCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> pascalTriangle <span style="color: #666666">=</span> (lineNumber) <span style="color: #666666">=&gt;</span> {
  <span style="color: #007020; font-weight: bold">const</span> currentLine <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>];

  <span style="color: #007020; font-weight: bold">const</span> currentLineSize <span style="color: #666666">=</span> lineNumber <span style="color: #666666">+</span> <span style="color: #40a070">1</span>;

  <span style="color: #007020; font-weight: bold">for</span> (<span style="color: #007020; font-weight: bold">let</span> numIndex <span style="color: #666666">=</span> <span style="color: #40a070">1</span>; numIndex <span style="color: #666666">&lt;</span> currentLineSize; numIndex <span style="color: #666666">+=</span> <span style="color: #40a070">1</span>) {
    currentLine[numIndex] <span style="color: #666666">=</span> (currentLine[numIndex <span style="color: #666666">-</span> <span style="color: #40a070">1</span>] <span style="color: #666666">*</span> (lineNumber <span style="color: #666666">-</span> numIndex <span style="color: #666666">+</span> <span style="color: #40a070">1</span>)) <span style="color: #666666">/</span> numIndex;
  }

  <span style="color: #007020; font-weight: bold">return</span> currentLine;
};
</pre></div>

`;