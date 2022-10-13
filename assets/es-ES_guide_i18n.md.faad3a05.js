import{o,c as l,b as a,a as t,e,d as n,_ as p}from"./app.829438bf.js";const i=e(`<h1 id="internacionalizacion" tabindex="-1">Internacionalizaci\xF3n <a class="header-anchor vp-link" href="#internacionalizacion" aria-hidden="true">#</a></h1><p>Element Plus components are using English <strong>by default</strong>, if you wish you use other languages, you can get you answer by keep reading.</p><h2 id="configuracion-global" tabindex="-1">Configuraci\xF3n global <a class="header-anchor vp-link" href="#configuracion-global" aria-hidden="true">#</a></h2><p>Element Plus proporciona configuraciones globales</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/dist/locale/zh-cn.mjs&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  locale<span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor vp-link" href="#configprovider" aria-hidden="true">#</a></h2><p>Element Plus tambi\xE9n proporciona un componente Vue <a href="/en-US/component/config-provider.html" class="vp-link">ConfigProvider</a> para establecer globalmente la configuraci\xF3n regional y otros ajustes.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

  <span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/dist/locale/zh-cn.mjs&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ElConfigProvider<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> zhCn<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="uso-de-un-cdn" tabindex="-1">Uso de un CDN <a class="header-anchor vp-link" href="#uso-de-un-cdn" aria-hidden="true">#</a></h2><p>Si est\xE1 utilizando Element Plus a trav\xE9s de CDN, entonces necesita hacer lo siguiente. Volvamos a tomar al servicio &quot;unpkg&quot; como ejemplo:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/locale/zh-cn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locale</span><span class="token operator">:</span> ElementPlusLocaleZhCn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Aqu\xED puede encontrar toda la documentaci\xF3n del <a href="/en-US/component/config-provider.html" class="vp-link">ConfigProvider</a></p>`,12),c={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},u=n("Idiomas disponibles"),r=e('<ul class="language-list"><li>Chino simplificado (zh-cn)</li><li>Ingl\xE9s Americano (en)</li><li>Azerbaijani (az)</li><li>Alem\xE1n (de)</li><li>Portugu\xE9s (pt)</li><li>Espa\xF1ol (es)</li><li>Dan\xE9s (da)</li><li>Franc\xE9s (fr)</li><li>Noruego (nb-NO)</li><li>Chino tradicional (zh-tw)</li><li>Italiano (it)</li><li>Coreano (ko)</li><li>Japon\xE9s (ja)</li><li>Holand\xE9s (nl)</li><li>Vietnamita (vi)</li><li>Ruso (ru)</li><li>Turco (tr)</li><li>Portugu\xE9s brasile\xF1o (pt-br)</li><li>Farsi (fa)</li><li>Tailand\xE9s (th)</li><li>Indonesio (id)</li><li>B\xFAlgaro (bg)</li><li>Pashto (pa)</li><li>Polaco (pl)</li><li>Finland\xE9s (fi)</li><li>Sueco (sv)</li><li>Griego (el)</li><li>Eslovaco (sk)</li><li>Catal\xE1n (ca)</li><li>Checo (cs)</li><li>Ucraniano (uk)</li><li>Turco (tk)</li><li>Tamil (ta)</li><li>Let\xF3n (lv)</li><li>Africano (af)</li><li>Estonio (et)</li><li>Eslovaco (sl)</li><li>\xC1rabe (ar)</li><li>Hebreo (he)</li><li>Lituano (lt)</li><li>Mongol (mn)</li><li>Kazakh (kk)</li><li>H\xFAngaro (hu)</li><li>Rumano (ro)</li><li>Kurdo (ku)</li><li>Uighur (ug-cn)</li><li>Khmer (km)</li><li>Serbio (sr)</li><li>Vasco (eu)</li><li>Kyrgyz (ky)</li><li>Armenio (hy-am)</li><li>Croata (hr)</li><li>Esperanto (eo)</li><li>Bengal\xED (bn)</li></ul>',1),k=n("Si necesita cualquier otro idioma, "),d={href:"https://github.com/element-plus/element-plus/pulls",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},g=n("PR"),m=n(" siempre es bienvenido, solo necesitas a\xF1adir un archivo de idioma en "),_={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},h=n("aqu\xED"),f=n("."),E='{"title":"Internacionalizaci\xF3n","description":"","frontmatter":{"title":"Internacionalizaci\xF3n","lang":"es-ES"},"headers":[{"level":2,"title":"Configuraci\xF3n global","slug":"configuracion-global"},{"level":2,"title":"ConfigProvider","slug":"configprovider"},{"level":2,"title":"Uso de un CDN","slug":"uso-de-un-cdn"}],"relativePath":"es-ES/guide/i18n.md","lastUpdated":null}',v={},z=Object.assign(v,{__name:"i18n",setup(b){return(y,C)=>{const s=p;return o(),l("div",null,[i,a("p",null,[a("a",c,[u,t(s,{class:"link-icon"})])]),r,a("p",null,[k,a("a",d,[g,t(s,{class:"link-icon"})]),m,a("a",_,[h,t(s,{class:"link-icon"})]),f])])}}});export{E as __pageData,z as default};
