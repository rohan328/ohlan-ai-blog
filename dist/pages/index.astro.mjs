/* empty css                                 */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BIjR_rCt.mjs';
import { g as getCollection, $ as $$Layout } from '../chunks/_astro_content_6lh25Ta9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Ohlan AI Blog" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Ohlan AI Blog</h1> <p>Automatically generated articles about AI tools, SaaS apps, and crypto trends.</p> <ul> ${posts.length === 0 ? renderTemplate`<li>No posts yet. Check back tomorrow!</li>` : posts.map((post) => renderTemplate`<li> <a${addAttribute(`/posts/${post.slug}/`, "href")}>${post.data.title}</a> </li>`)} </ul> ` })}`;
}, "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
