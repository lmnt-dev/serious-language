import { defineDocumentType, makeSource } from "contentlayer/source-files";
import fs from "fs";
import { mdToPdf } from "md-to-pdf";
import { downloadNameFromPath } from "./lib/pdf";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/*.md*`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the page",
      required: true,
    },
    pdf_heading: {
      type: "string",
      description: "Optional first level heading for PDF documents",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath.replace("/overview", "")}`,
    },
    pdf: {
      type: "string",
      resolve: async function (post) {
        if (post.body.code.indexOf('DownloadButton') < 0) return;
        const content = "# " + post.pdf_heading + "\n\n" + post.body.raw;
        const pdf = await mdToPdf({ content }).catch(console.error);
        if (pdf) {
          fs.writeFileSync(
            "public/" + downloadNameFromPath(post._raw.flattenedPath) + ".pdf",
            pdf.content
          );
        }
      },
    },
  },
}));

export const Section = defineDocumentType(() => ({
  name: "Section",
  contentType: "yaml",
  filePathPattern: "**/section.yaml",
  fields: {
    bg: {
      type: "string",
      default: "default",
    },
    bg_summary: {
      type: "string",
    },
    cta_title: {
      type: "string",
    },
    cta_text: {
      type: "string",
    },
    hero_title: {
      type: "string",
    },
    hero_text: {
      type: "string",
    },
    hide_help: {
      type: "boolean",
    },
    index_label: {
      type: "string",
      default: "Overview",
    },
    tabs: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    key: {
      type: "string",
      resolve: (string) => string._raw.sourceFileDir.split("/").at(-1),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page, Section],
});
