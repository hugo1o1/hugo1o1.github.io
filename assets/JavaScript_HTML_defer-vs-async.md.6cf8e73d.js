import{_ as s,c as a,o as t,a as n}from"./app.8538473e.js";const g='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/HTML/defer-vs-async.md","lastUpdated":1646059216000}',o={},p=n(`<p>async \u548C defer \u90FD\u53EF\u4EE5\u8BA9 JavaScript \u5F02\u6B65\u52A0\u8F7D\uFF0C\u533A\u522B\u5728\u4E8E defer \u4FDD\u8BC1\u6267\u884C\u987A\u5E8F\uFF0C\u800C async \u8C01\u5148\u52A0\u8F7D\u597D\u8C01\u5148\u6267\u884C\u3002\u8FD9\u4E2A\u7279\u6027\u8868\u73B0\u5728 type=&quot;module&quot;\u7684&lt; script &gt; \u5143\u7D20\u8FD9\u91CC\u540C\u6837\u9002\u7528\u3002</p><div class="language-javascript"><pre><code>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;1.mjs&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;2.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


<span class="token operator">&lt;</span>script defer src<span class="token operator">=</span><span class="token string">&quot;3.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 2 1 3</span>
</code></pre></div>`,2),e=[p];function r(c,l,i,_,k,d){return t(),a("div",null,e)}var f=s(o,[["render",r]]);export{g as __pageData,f as default};
