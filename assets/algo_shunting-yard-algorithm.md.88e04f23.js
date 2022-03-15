import{_ as n,c as a,o as t,a as e}from"./app.2f175e61.js";var s="/assets/Shunting_yard.95d0ae1b.svg";const g='{"title":"shunting yard algorithm \u8C03\u5EA6\u573A\u7B97\u6CD5","description":"","frontmatter":{},"headers":[],"relativePath":"algo/shunting-yard-algorithm.md","lastUpdated":1646059216000}',o={},r=e('<h4 id="shunting-yard-algorithm-\u8C03\u5EA6\u573A\u7B97\u6CD5" tabindex="-1">shunting yard algorithm \u8C03\u5EA6\u573A\u7B97\u6CD5 <a class="header-anchor" href="#shunting-yard-algorithm-\u8C03\u5EA6\u573A\u7B97\u6CD5" aria-hidden="true">#</a></h4><p>\u5982\u4F55\u8BA1\u7B97\u5F62\u5982 34+12\u20142 \u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\uFF1F</p><p><img src="'+s+`" alt=""></p><h5 id="eval-\u6296\u673A\u7075\u5B9E\u73B0" tabindex="-1">eval \u6296\u673A\u7075\u5B9E\u73B0 <a class="header-anchor" href="#eval-\u6296\u673A\u7075\u5B9E\u73B0" aria-hidden="true">#</a></h5><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">_eval</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&quot;return &quot;</span> <span class="token operator">+</span> fn<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">_eval</span><span class="token punctuation">(</span><span class="token string">&quot;12/5*9+9.4*2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 40.4</span>
</code></pre></div><h5 id="\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u8BA1\u7B97\u5668" tabindex="-1">\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u8BA1\u7B97\u5668 <a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u8BA1\u7B97\u5668" aria-hidden="true">#</a></h5><div class="language-"><pre><code>function calculate(input) {

  var f = {
    add: &#39;+&#39;,
    sub: &#39;-&#39;,
    div: &#39;/&#39;,
    mlt: &#39;*&#39;,
    mod: &#39;%&#39;,
    exp: &#39;^&#39;
  };

  // Create array for Order of Operation and precedence
  f.ooo = [
    [
      [f.mlt],
      [f.div],
      [f.mod],
      [f.exp]
    ],
    [
      [f.add],
      [f.sub]
    ]
  ];

  input = input.replace(/[^0-9%^*\\/()\\-+.]/g, &#39;&#39;); // clean up unnecessary characters

  var output;
  for (var i = 0, n = f.ooo.length; i &lt; n; i++) {

    // Regular Expression to look for operators between floating numbers or integers
    var re = new RegExp(&#39;(\\\\d+\\\\.?\\\\d*)([\\\\&#39; + f.ooo[i].join(&#39;\\\\&#39;) + &#39;])(\\\\d+\\\\.?\\\\d*)&#39;);
    re.lastIndex = 0; // take precautions and reset re starting pos

    // Loop while there is still calculation for level of precedence
    while (re.test(input)) {
      output = _calculate(RegExp.$1, RegExp.$2, RegExp.$3);
      if (isNaN(output) || !isFinite(output))
        return output; // exit early if not a number
      input = input.replace(re, output);
    }
  }

  return output;

  function _calculate(a, op, b) {
    a = a * 1;
    b = b * 1;
    switch (op) {
      case f.add:
        return a + b;
        break;
      case f.sub:
        return a - b;
        break;
      case f.div:
        return a / b;
        break;
      case f.mlt:
        return a * b;
        break;
      case f.mod:
        return a % b;
        break;
      case f.exp:
        return Math.pow(a, b);
        break;
      default:
        null;
    }
  }
}
</code></pre></div><p>\u53C2\u8003\uFF1A<a href="https://zhuanlan.zhihu.com/p/147623236" target="_blank" rel="noopener noreferrer">\u8C03\u5EA6\u573A\u7B97\u6CD5</a></p>`,8),p=[r];function c(u,i,l,d,h,f){return t(),a("div",null,p)}var _=n(o,[["render",c]]);export{g as __pageData,_ as default};
