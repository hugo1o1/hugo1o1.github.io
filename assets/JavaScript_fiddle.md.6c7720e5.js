import{_ as e,c as o,o as r,a as t}from"./app.8538473e.js";const y='{"title":"fiddle","description":"","frontmatter":{},"headers":[{"level":3,"title":"fiddle","slug":"fiddle"}],"relativePath":"JavaScript/fiddle.md","lastUpdated":1646059216000}',s={},a=t('<h3 id="fiddle" tabindex="-1">fiddle <a class="header-anchor" href="#fiddle" aria-hidden="true">#</a></h3><h5 id="tilde-vs-caret-in-package-json" tabindex="-1">tilde(~) vs caret(^) in package.json <a class="header-anchor" href="#tilde-vs-caret-in-package-json" aria-hidden="true">#</a></h5><p>See the <a href="https://docs.npmjs.com/cli/v7/configuring-npm/package-json#dependencies" target="_blank" rel="noopener noreferrer">NPM docs</a> and <a href="https://github.com/npm/node-semver#versions" target="_blank" rel="noopener noreferrer">semver</a> docs:</p><ul><li><p>~version \u201CApproximately equivalent to version\u201D, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to &lt;1.3.0.</p></li><li><p>^version \u201CCompatible with version\u201D, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to 3.0.0</p></li></ul><h5 id="esxpress-es6-example" tabindex="-1">esxpress-es6-example <a class="header-anchor" href="#esxpress-es6-example" aria-hidden="true">#</a></h5><p><a href="https://github.com/jcunanan05/express-es6-sample/tree/master" target="_blank" rel="noopener noreferrer">github</a><a href="https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/" target="_blank" rel="noopener noreferrer">How to enable ES6 (and beyond) syntax with Node and Express</a></p><h5 id="monorepo-vs-multirepo" tabindex="-1">Monorepo vs Multirepo <a class="header-anchor" href="#monorepo-vs-multirepo" aria-hidden="true">#</a></h5><p>A monorepo keeps everything in one repository. A multirepo (multiple repositories) typically has one repository for each project. The more projects, the more repositories. A multirepo is also known as polyrepo.</p><p>So, which one is better? Should you keep everything together in one repository? Or should you divide it up into multiple repositories?</p><p>Monorepo Is Usually Best For\u2026</p><ul><li><p>Visibility Using a single repository gives you visibility into your code and assets for every project. This helps you manage dependencies.</p></li><li><p>Collaboration A single repository makes it easier to collaborate. That\u2019s because everyone can access the code, files, and assets. So, developers can share and reuse assets.</p></li><li><p>Speed Using a single repository can help you accelerate development. For instance, you can make atomic changes (one action to make a change across multiple projects).</p></li></ul><p>Multirepo Is Usually Best For\u2026</p><ul><li><p>Git Projects Managing a monorepo at scale in Git would never work. As the repository gets bigger, a monorepo in Git becomes a huge problem. So if you have teams using Git, it\u2019s best to have multiple repositories.</p></li><li><p>Open Source or Third Party Projects In some version control systems, you\u2019ll need multiple repositories to use open source projects or work with third party teams. Then you can ensure that third party developers only have access to the project they&#39;re working on.</p></li></ul>',13),i=[a];function n(l,p,d,c,h,u){return r(),o("div",null,i)}var v=e(s,[["render",n]]);export{y as __pageData,v as default};