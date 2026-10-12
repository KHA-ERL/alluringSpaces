import { defineField, defineType } from "sanity";

const urlValidation = (Rule) =>
  Rule.uri({
    scheme: ["http", "https"],
    allowRelative: false,
  });

export const socialsType = defineType({
  name: "socials",
  title: "Socials",
  type: "document",
  fields: [
    defineField({
      name: "tiktokUrl",
      title: "TikTok URL",
      type: "url",
      validation: urlValidation,
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      validation: urlValidation,
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      validation: urlValidation,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Socials",
        subtitle: "Footer social media links",
      };
    },
  },
});
