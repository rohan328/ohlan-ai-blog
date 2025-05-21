export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.13e913e3.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const page = () => import('../../chunks/pages/_slug_.astro.af7a3006.mjs').then(n => n._);

export { page };
