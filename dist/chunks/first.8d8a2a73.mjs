import { h as createVNode, F as Fragment, i as spreadAttributes } from './astro.13e913e3.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>This is a temporary placeholder post. Real AI-generated articles will appear here soon.</p>");

				const frontmatter = {"title":"Welcome Post","slug":"welcome-post","pubDate":"2025-05-21","description":"Placeholder post until real ones are generated"};
				const file = "C:/Users/ohlan/Downloads/ohlan-ai-blog/src/content/posts/first.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis is a temporary placeholder post. Real AI-generated articles will appear here soon.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
