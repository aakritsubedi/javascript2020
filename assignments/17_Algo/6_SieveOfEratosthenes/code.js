export const sieveOfEratosthenesCode = `<div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">let</span> primeUptoN <span style="color: #666666">=</span> (maxNumber) <span style="color: #666666">=&gt;</span> {
  <span style="color: #60a0b0; font-style: italic">//1. Create an array of size n+1 and assign all true except first two element</span>
  <span style="color: #007020; font-weight: bold">const</span> isPrime <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">new</span> <span style="color: #007020">Array</span>(maxNumber <span style="color: #666666">+</span> <span style="color: #40a070">1</span>).fill(<span style="color: #007020; font-weight: bold">true</span>);

  isPrime[<span style="color: #40a070">0</span>] <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">false</span>;
  isPrime[<span style="color: #40a070">1</span>] <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">false</span>;

  <span style="color: #007020; font-weight: bold">const</span> primes <span style="color: #666666">=</span> [];

  <span style="color: #007020; font-weight: bold">for</span> (<span style="color: #007020; font-weight: bold">let</span> number <span style="color: #666666">=</span> <span style="color: #40a070">2</span>; number <span style="color: #666666">&lt;=</span> maxNumber; number <span style="color: #666666">+=</span> <span style="color: #40a070">1</span>) {
    <span style="color: #007020; font-weight: bold">if</span> (isPrime[number] <span style="color: #666666">===</span> <span style="color: #007020; font-weight: bold">true</span>) {
      primes.push(number);

      <span style="color: #007020; font-weight: bold">let</span> nextNumber <span style="color: #666666">=</span> number <span style="color: #666666">*</span> number;

      <span style="color: #007020; font-weight: bold">while</span> (nextNumber <span style="color: #666666">&lt;=</span> maxNumber) {
        isPrime[nextNumber] <span style="color: #666666">=</span> <span style="color: #007020; font-weight: bold">false</span>;
        nextNumber <span style="color: #666666">+=</span> number;
      }
    }
  }

  <span style="color: #007020; font-weight: bold">return</span> primes;
};

console.log(primeUptoN(<span style="color: #40a070">100</span>)); 
<span style="color: #60a0b0; font-style: italic">// [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,</span>
<span style="color: #60a0b0; font-style: italic">// 59, 61, 67, 71, 73, 79, 83, 89, 97 ]</span>
</pre></div>
`;