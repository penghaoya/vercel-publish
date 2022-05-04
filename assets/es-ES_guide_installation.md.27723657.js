import{c as e,o as s,e as t,b as a,d as n}from"./app.2fbd2eb7.js";const p=t(`<h1 id="instalacion" tabindex="-1">Instalaci\xF3n <a class="header-anchor" href="#instalacion" aria-hidden="true">#</a></h1><h2 id="compatibilidad" tabindex="-1">Compatibilidad <a class="header-anchor" href="#compatibilidad" aria-hidden="true">#</a></h2><p>Element Plus puede ejecutarse en navegadores que soportan <a href="https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally" target="_blank" rel="noopener noreferrer">ES2018</a> y <a href="https://caniuse.com/resizeobserver" target="_blank" rel="noopener noreferrer">ResizeObserver</a>. Si realmente es neceario soportar navegadores desactualizados, por favor a\xF1ade <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a> y Polyfill ti mismo.</p><p>Dado que Vue3 ya no es compatible con IE11, ElementPlus no es compatible con IE11 ni con versiones anteriores anteriores.</p><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt=""></th></tr></thead><tbody><tr><td>Edge \u2265 79</td><td>Firefox \u2265 78</td><td>Chrome \u2265 64</td><td>Safari \u2265 12</td></tr></tbody></table><h3 id="version" tabindex="-1">Versi\xF3n <a class="header-anchor" href="#version" aria-hidden="true">#</a></h3><p>ElementPlus se encuentra actualmente en una iteraci\xF3n de desarrollo r\xE1pido:</p><p><a href="https://www.npmjs.org/package/element-plus" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/element-plus.svg?style=flat-square" alt=""></a></p><h2 id="gestor-de-paquetes" tabindex="-1">Gestor de paquetes <a class="header-anchor" href="#gestor-de-paquetes" aria-hidden="true">#</a></h2><p><strong>Se recomienda el uso del administrador de paquetes (NPM, <a href="https://classic.yarnpkg.com/lang/en/" target="_blank" rel="noopener noreferrer">Yarn</a>, <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>) para instalar Element Plus</strong>, pero tambi\xE9n puede utilizar otros gestores como <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> y <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack</a>.</p><div class="language-shell"><pre><code><span class="token comment"># Elige un gestor de paquetes que te guste.</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> element-plus --save

<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus

<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus
</code></pre></div><p>Si su entorno de red no es bueno, se recomienda utilizar un registro de r\xE9plica como <a href="https://github.com/cnpm/cnpm" target="_blank" rel="noopener noreferrer">cnpm</a> o <a href="https://registry.npmmirror.com/" target="_blank" rel="noopener noreferrer">Alibaba</a>.</p><h2 id="importar-en-el-navegador" tabindex="-1">Importar en el navegador <a class="header-anchor" href="#importar-en-el-navegador" aria-hidden="true">#</a></h2><p>Puede importar Element Plus directamente a las etiquetas HTML del navegador y utilizar la variable global <code>ElementPlus</code>.</p><p>Seg\xFAn los diferentes proveedores de <strong>CDN</strong> hay diferentes URLs de importaci\xF3n. Aqu\xED usamos <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg</a> y <a href="https://jsdelivr.com" target="_blank" rel="noopener noreferrer">jsDelivr</a> como ejemplo. Tambi\xE9n puede utilizar otros proveedores CDN.</p><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>::: consejo</p><p>We recommend using CDN to import Element Plus users to lock the version on the link address, so as not to be affected by incompatible updates when Element Plus is upgraded in the future. Por favor, consulte <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com</a> para ver c\xF3mo fijar una determinada versi\xF3n.</p><p>:::</p><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h2><p>Con CDN, podemos usar Element Plus f\xE1cilmente para escribir una p\xE1gina de Hola Mundo. <a href="https://codepen.io/iamkun/pen/YzWMaVr" target="_blank" rel="noopener noreferrer">Online Demo</a></p>`,24),o=a("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),r=a("p",null,[n("Si se ha instalado a trav\xE9s del gestor de paquetes y quiere usarlo con una herramienta de empaquetado, por favor lea la siguiente secci\xF3n: "),a("a",{href:"/en-US/guide/quickstart.html"},"Inicio r\xE1pido"),n(".")],-1),l=[p,o,r],k='{"title":"Instalaci\xF3n","description":"","frontmatter":{"title":"Instalaci\xF3n","lang":"es-ES"},"headers":[{"level":2,"title":"Compatibilidad","slug":"compatibilidad"},{"level":3,"title":"Versi\xF3n","slug":"version"},{"level":2,"title":"Gestor de paquetes","slug":"gestor-de-paquetes"},{"level":2,"title":"Importar en el navegador","slug":"importar-en-el-navegador"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hello World","slug":"hello-world"}],"relativePath":"es-ES/guide/installation.md","lastUpdated":null}',c={},g=Object.assign(c,{setup(i){return(u,d)=>(s(),e("div",null,l))}});export{k as __pageData,g as default};
