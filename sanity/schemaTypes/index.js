import { validation } from "sanity";

export const schema = {
  types: [
    {
      name: "post",
      type: "document",
      title: "Post",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "mainImage",
          title: "Main image",
          type: "image",
          options: {
            hotspot: true,
          },

          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility.",
            },
          ],
        },
        {
          name: "publishedAt",
          title: "Published at",
          type: "datetime",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "excerpt",
          title: "Excerpt",
          type: "text",
          rows: 4,
          description: "Brief summary for previews and SEO",
        },
        {
          name: "slug",
          title: "Slug",
          type: "text",
          rows: 4,
          description: "Url-friendly identifier",
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "seo",
          title: "SEO Settings",
          type: "object",
          fields: [
            {
              name: "metaTitle",
              title: "Meta Title",
              type: "string",
            },
            {
              name: "metaDescription",
              title: "Meta Description",
              type: "text",
              rows: 3,
            },
          ],
        },
      ],
    },
  ],
};
