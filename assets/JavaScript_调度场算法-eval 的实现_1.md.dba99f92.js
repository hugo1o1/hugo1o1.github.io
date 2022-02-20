import{_ as n,c as a,o as e,a as t}from"./app.6741d607.js";var s="/assets/Shunting_yard.95d0ae1b.svg";const _='{"title":"shunting yard algorithm \u8C03\u5EA6\u573A\u7B97\u6CD5","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/\u8C03\u5EA6\u573A\u7B97\u6CD5-eval \u7684\u5B9E\u73B0/1.md","lastUpdated":null}',o={},r=t('<h4 id="shunting-yard-algorithm-\u8C03\u5EA6\u573A\u7B97\u6CD5" tabindex="-1">shunting yard algorithm \u8C03\u5EA6\u573A\u7B97\u6CD5 <a class="header-anchor" href="#shunting-yard-algorithm-\u8C03\u5EA6\u573A\u7B97\u6CD5" aria-hidden="true">#</a></h4><p><img src="'+s+`" alt=""></p><h5 id="eval-\u6296\u673A\u7075\u5B9E\u73B0" tabindex="-1">eval \u6296\u673A\u7075\u5B9E\u73B0 <a class="header-anchor" href="#eval-\u6296\u673A\u7075\u5B9E\u73B0" aria-hidden="true">#</a></h5><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">_eval</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>\u53C2\u8003\uFF1A<a href="https://zhuanlan.zhihu.com/p/147623236" target="_blank" rel="noopener noreferrer">\u8C03\u5EA6\u573A\u7B97\u6CD5</a></p>`,7),p=[r];function c(u,i,l,d,f,h){return e(),a("div",null,p)}var g=n(o,[["render",c]]);export{_ as __pageData,g as default};
