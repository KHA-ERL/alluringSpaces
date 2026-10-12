import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "replace-with-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "alluring-spaces",
  title: "Alluring Spaces",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Environment")
              .id("environment")
              .child(S.document().schemaType("environment").documentId("environment")),
            S.listItem()
              .title("Socials")
              .id("socials")
              .child(S.document().schemaType("socials").documentId("socials")),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => !["environment", "socials"].includes(item.getId())),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
