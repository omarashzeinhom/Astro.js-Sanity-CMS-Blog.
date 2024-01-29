# Astrojs Blog In typescript & react

-Built With [astro.build](https://astro.build/)

- [Demo](https://andgoedublog.netlify.app/)

## Setup

- Front End
- Add Your Own Sanity Project ID. in astro.config.mjs

```mjs
export default defineConfig({
  integrations: [
    sanity({
      projectId: "", //add your sanity project id here
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
    [react()],
    tailwind(),
  ],
  markdown: {
    smartypants: false,
    gfm: false,
    remarkPlugins: [],
    rehypePlugins: [],
    //syntaxHighlight: 'shiki',
  },
  components: {
    types: {
      unknown: "./src/pages/article/[...slug].astro",
    },
  },
});
```

- Back End
- Add Your Own Sanity Project ID. in sanity.config.ts

```ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  name: "default",
  title: "astroBackEnd",

  projectId: "", // Add Project ID Here
  dataset: "production",

  plugins: [deskTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
});
```

- Also in sanity.cli.ts

```ts
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "",
    dataset: "production",
  },
});
```

### Front End

- Start by

```bash
yarn run dev
```

- Deploy by `bash yarn build` and upload `./dist/` directory to [netlify](https://app.netlify.com)

### Back End

- Start by

```bash
yarn run dev
```

- Deployed Already on Sanity Just Make Sure to Make it production and also add the url of the website you deployed as authenticated to use.

#### References

- [A zero-JavaScript navigation menu for Tailwind CSS](https://www.brycewray.com/posts/2021/09/zero-javascript-navigation-menu-tailwind-css/)
- [ Tailwind CSS Social Media Icons & Buttons ](https://tailwind-elements.com/docs/standard/components/social-buttons/)
- [ Tailwind CSS Footer ](https://tailwind-elements.com/docs/standard/navigation/footer/)
- [sanity-astro-blog](https://www.sanity.io/guides/sanity-astro-blog)
- [littlesticks - astro-sanity-minimal-starter](https://github.com/littlesticks/astro-sanity-minimal-starter/tree/graphql)
- [guides/sanity-astro-blog](https://www.sanity.io/guides/sanity-astro-blog)
  [sanity-plugin-markdown](https://www.sanity.io/plugins/sanity-plugin-markdown)
