import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "publishing", title: "Publishing" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Project title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "publishing",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
      options: {
        list: ["Residential", "Bedroom", "Dining", "Styling", "Commercial", "Full home"],
      },
    }),
    defineField({ name: "location", title: "Location", type: "string", group: "content" }),
    defineField({ name: "year", title: "Year", type: "string", group: "content" }),
    defineField({
      name: "summary",
      title: "Short summary",
      type: "text",
      rows: 3,
      group: "content",
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Project photo gallery",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alternative text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "clips",
      title: "Short compressed clips",
      description: "Use this only for short lightweight clips. Add longer videos as social/video links below.",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "file",
              title: "Clip file",
              type: "file",
              options: {
                accept: "video/mp4,video/webm,video/quicktime",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
          preview: {
            select: { title: "caption" },
            prepare: ({ title }) => ({ title: title || "Short project clip" }),
          },
        }),
      ],
    }),
    defineField({
      name: "externalVideoUrl",
      title: "YouTube, Instagram, or TikTok link",
      description: "Use this for longer project videos so the social platform handles hosting and reach.",
      type: "url",
      group: "media",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    }),
    defineField({
      name: "body",
      title: "Project notes",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "featured",
      title: "Feature on homepage",
      type: "boolean",
      group: "publishing",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
});
