import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "category",
        label: "Categories",
        path: "src/content/category",
        format: "md",
        fields: [
          {
            type: "string",
            name: "label",
            label: "Label",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            isTitle: false,
            required: true,
            description: "The slug must be the same as the tag name"
          }
        ],

      },
      {
        name: "page",
        label: "Pages",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "label",
            label: "Label",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            isTitle: false,
            required: true,
            description: "The slug must be the same as the tag name"
          }
        ],

      },
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        format: 'mdx',
        fields: [
          {
            type: "datetime",
            name: "date",
            label: "Date Posted",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Post",
            required: false,
          },
          {
            type: "image",
            name: "image",
            label: "Bild",
            required: false,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            isTitle: false,
            required: true,
          },
          {
            type: "reference",
            name: "category",
            label: "Category",
            collections: ['category'],
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
            required: false,
          },
          {
            type: "boolean",
            name: "intro",
            label: "Einleitung",
            required: false,
          },

          // array of tags tinacms
          {
            type: "string",
            list: true,
            name: "tags",
            label: "Tags",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: 'textarea',
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/${document._sys.filename}`,
        },
      },
    ],
  },
});
