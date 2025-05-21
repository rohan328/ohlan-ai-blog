/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as createCollectionToGlobResultMap, e as createGetCollection, f as renderComponent, m as maybeRenderHead } from '../astro.13e913e3.mjs';

const $$Astro$1 = createAstro("https://wire.ohlan.me");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="Automated AI blog">
  ${renderHead()}</head>
  <body class="bg-black text-white font-sans px-4 py-8">
    <main class="max-w-3xl mx-auto">
      ${Astro2.children}
    </main>
  </body>
</html>`;
}, "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/layouts/Layout.astro", void 0);

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/first.md": () => import('../first.d190e967.mjs'),"/src/content/posts/sample-post.md": () => import('../sample-post.5f93cf98.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"welcome-post":"/src/content/posts/first.md","sample-post":"/src/content/posts/sample-post.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/first.md": () => import('../first.22f33787.mjs'),"/src/content/posts/sample-post.md": () => import('../sample-post.0e42f446.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<article class="prose prose-invert">
    <h1 class="text-2xl font-bold">${post.data.title}</h1>
    <p class="text-sm text-gray-400">${post.data.pubDate.toDateString?.() ?? post.data.pubDate}</p>
    <div class="mt-4">
      ${renderComponent($$result2, "Content", Content, {})}
    </div>
  </article>
` })}`;
}, "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _slug_ as _, getCollection as g };
