/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BIjR_rCt.mjs';
import { $ as $$Layout, g as getCollection } from '../../chunks/_astro_content_6lh25Ta9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://wire.ohlan.me");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const Content = post.Component;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose prose-invert"> <h1 class="text-2xl font-bold">${post.data.title}</h1> <p class="text-sm text-gray-400">${post.data.pubDate.toDateString?.() ?? post.data.pubDate}</p> ${renderComponent($$result2, "Content", Content, {})} </article> ` })}`;
}, "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
