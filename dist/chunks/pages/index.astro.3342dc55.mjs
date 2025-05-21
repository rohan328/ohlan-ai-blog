/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro.13e913e3.mjs';
import { g as getCollection, $ as $$Layout } from './_slug_.astro.af7a3006.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const $$Astro = createAstro("https://wire.ohlan.me");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Ohlan AI Blog" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<h1>Ohlan AI Blog</h1>
  <p>Automatically generated articles about AI tools, SaaS apps, and crypto trends.</p>

  <ul>
    ${posts.length === 0 ? renderTemplate`<li>No posts yet. Check back tomorrow!</li>` : posts.map((post) => renderTemplate`<li>
          <a${addAttribute(`/posts/${post.slug}/`, "href")}>${post.data.title}</a>
        </li>`)}
  </ul>
` })}`;
}, "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
