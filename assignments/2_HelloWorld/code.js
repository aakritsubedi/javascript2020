export const helloWorldCode = `<div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #000000">console</span><span style="color: #000000; font-weight: bold">.</span><span style="color: #000000">log</span><span style="color: #000000; font-weight: bold">(</span><span style="color: #4e9a06">&#39;Hello World&#39;</span><span style="color: #000000; font-weight: bold">);</span>
</pre></div>
  `;

export const scriptTagCode = `<div style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #ce5c00; font-weight: bold">&lt;!</span><span style="color: #000000">DOCTYPE</span> <span style="color: #000000">HTML</span><span style="color: #ce5c00; font-weight: bold">&gt;</span>
<span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #000000">html</span><span style="color: #ce5c00; font-weight: bold">&gt;</span>

<span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #000000">body</span><span style="color: #ce5c00; font-weight: bold">&gt;</span>

  <span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #000000">p</span><span style="color: #ce5c00; font-weight: bold">&gt;</span><span style="color: #000000">Before</span> <span style="color: #000000">the</span> <span style="color: #000000">script</span><span style="color: #000000; font-weight: bold">...</span><span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #a40000; border: 1px solid #ef2929">/p&gt;</span>

  <span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #000000">script</span><span style="color: #ce5c00; font-weight: bold">&gt;</span>
    <span style="color: #000000">alert</span><span style="color: #000000; font-weight: bold">(</span> <span style="color: #4e9a06">&#39;Hello, world!&#39;</span> <span style="color: #000000; font-weight: bold">);</span>
  <span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #a40000; border: 1px solid #ef2929">/script&gt;</span>

  <span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #000000">p</span><span style="color: #ce5c00; font-weight: bold">&gt;</span><span style="color: #000000; font-weight: bold">...</span><span style="color: #000000">After</span> <span style="color: #000000">the</span> <span style="color: #000000">script</span><span style="color: #000000; font-weight: bold">.</span><span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #a40000; border: 1px solid #ef2929">/p&gt;</span>

<span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #a40000; border: 1px solid #ef2929">/body&gt;</span>

<span style="color: #ce5c00; font-weight: bold">&lt;</span><span style="color: #a40000; border: 1px solid #ef2929">/html&gt;</span>
</pre></div>
`;

export const externalScriptCode1 = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #666666">&lt;</span>script src<span style="color: #666666">=</span><span style="color: #4070a0">&quot;/path/to/script.js&quot;</span><span style="color: #666666">&gt;&lt;</span><span style="border: 1px solid #FF0000">/script&gt;</span>
</pre></div>
`;

export const externalScriptCode2 = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #666666">&lt;</span>script src<span style="color: #666666">=</span><span style="color: #4070a0">&quot;https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js&quot;</span><span style="color: #666666">&gt;&lt;</span><span style="border: 1px solid #FF0000">/script&gt;</span>
</pre></div>
`;

export const multipleScriptCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #666666">&lt;</span>script src<span style="color: #666666">=</span><span style="color: #4070a0">&quot;/js/script1.js&quot;</span><span style="color: #666666">&gt;&lt;</span><span style="border: 1px solid #FF0000">/script&gt;</span>
<span style="color: #666666">&lt;</span>script src<span style="color: #666666">=</span><span style="color: #4070a0">&quot;/js/script2.js&quot;</span><span style="color: #666666">&gt;&lt;</span><span style="border: 1px solid #FF0000">/script&gt;</span>
<span style="color: #666666">&lt;</span>script src<span style="color: #666666">=</span><span style="color: #4070a0">&quot;https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js&quot;</span><span style="color: #666666">&gt;&lt;</span><span style="border: 1px solid #FF0000">/script&gt;</span>
...
</pre></div>
`;

export const wontWorkCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #666666">&lt;</span>script src<span style="color: #666666">=</span><span style="color: #4070a0">&quot;file.js&quot;</span><span style="color: #666666">&gt;</span>
alert(<span style="color: #40a070">1</span>); <span style="color: #60a0b0; font-style: italic">// the content is ignored, because src is set</span>
<span style="color: #666666">&lt;</span><span style="border: 1px solid #FF0000">/script&gt;</span>
</pre></div>
`;

export const multipleWorkingCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #666666">&lt;</span>script src<span style="color: #666666">=</span><span style="color: #4070a0">&quot;file.js&quot;</span><span style="color: #666666">&gt;&lt;</span><span style="border: 1px solid #FF0000">/script&gt;</span>
<span style="color: #666666">&lt;</span>script<span style="color: #666666">&gt;</span>
  alert(<span style="color: #40a070">1</span>);
<span style="color: #666666">&lt;</span><span style="border: 1px solid #FF0000">/script&gt;</span>
</pre></div>
`;