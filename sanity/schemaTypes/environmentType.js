import { defineField, defineType } from "sanity";

export const environmentType = defineType({
  name: "environment",
  title: "Environment",
  type: "document",
  fields: [
    defineField({
      name: "completedSpaces",
      title: "Completed spaces",
      type: "number",
      initialValue: 34,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "designAwards",
      title: "Design awards",
      type: "number",
      initialValue: 8,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "trustedArtisans",
      title: "Trusted artisans",
      type: "number",
      initialValue: 12,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "citiesServed",
      title: "Cities served",
      type: "number",
      initialValue: 4,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp number",
      description: "Use international format without the plus sign, for example 2348012345678.",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(/^\d{7,15}$/, {
          name: "international phone number",
          invert: false,
        }),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Environment",
        subtitle: "Stats and WhatsApp settings",
      };
    },
  },
});
