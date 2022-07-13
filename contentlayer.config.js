import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `**/*.md*`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath.replace('/overview', '')}`,
    },
  },
}));

export const Section = defineDocumentType(() => ({
  name: 'Section',
  contentType: 'yaml',
  filePathPattern: '**/section.yaml',
  fields: {
    bg: {
      type: 'string',
      default: 'default',
    },
    bg_summary: {
      type: 'string',
    },
    cta_title: {
      type: 'string',
    },
    cta_text: {
      type: 'string',
    },
    hero_title: {
      type: 'string',
    },
    hero_text: {
      type: 'string',
    },
    hide_help: {
      type: 'boolean'
    },
    index_label: {
      type: 'string',
      default: 'Overview',
    },
    tabs: {
      type: 'list',
      of: { type: 'string' },
    }
  },
  computedFields: {
    key: {
      type: 'string',
      resolve: (string) => string._raw.sourceFileDir.split('/').at(-1),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Section],
});
