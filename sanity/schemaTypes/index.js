import { validation } from "sanity";

export const schema = {
  types: [
    // Post schema
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
          type: "slug",
          options: {
            source: "title",
            maxLength: 96,
          },
          validation: (Rule) => Rule.required(),
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
    // Press Release schema
    {
      name: "pressRelease",
      title: "Press Release",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 96,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "releaseType",
          title: "Release Type",
          type: "string",
          options: {
            list: [
              { title: "Press Release", value: "press-release" },
              { title: "Company Announcement", value: "company-announcement" },
              { title: "Corporate Statement", value: "corporate-statement" },
              { title: "Media Advisory", value: "media-advisory" },
            ],
          },
          initialValue: "press-release",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "publishedAt",
          title: "Published Date",
          type: "datetime",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "location",
          title: "Location",
          type: "string",
          description: "e.g., Accra, Ghana",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "excerpt",
          title: "Excerpt",
          type: "text",
          rows: 3,
          description: "Brief summary of the press release",
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "Quote", value: "blockquote" },
              ],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                ],
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                      {
                        name: "href",
                        type: "url",
                        title: "URL",
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  description: "Important for SEO and accessibility",
                },
                {
                  name: "caption",
                  type: "string",
                  title: "Caption",
                },
              ],
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "mediaContact",
          title: "Media Contact",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Job Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "email",
              title: "Email",
              type: "string",
              validation: (Rule) => Rule.required().email(),
            },
            {
              name: "phone",
              title: "Phone",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "featured",
          title: "Featured",
          type: "boolean",
          description: "Mark as featured press release",
          initialValue: false,
        },
        {
          name: "pdfFile",
          title: "PDF File",
          type: "file",
          description: "Upload a PDF version of the press release",
          options: {
            accept: "application/pdf",
          },
        },
        {
          name: "tags",
          title: "Tags",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        },
        {
          name: "seo",
          title: "SEO",
          type: "object",
          fields: [
            {
              name: "metaTitle",
              title: "Meta Title",
              type: "string",
              validation: (Rule) => Rule.max(60),
            },
            {
              name: "metaDescription",
              title: "Meta Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.max(160),
            },
          ],
        },
      ],
      preview: {
        select: {
          title: "title",
          date: "publishedAt",
          type: "releaseType",
        },
        prepare(selection) {
          const { title, date, type } = selection;
          const formattedDate = date
            ? new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No date";
          return {
            title: title,
            subtitle: `${type || "Press Release"} • ${formattedDate}`,
          };
        },
      },
    },
  ],
};
