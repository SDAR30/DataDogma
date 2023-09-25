import { makeSource, defineDocumentType} from '@contentlayer/source-files'

const Doc = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: '**/**/*.md',
    fields: {
      title: {
        type: 'string',
        required: true,
      },
      publishAt: {
        type: 'date',
        required: true,
      },
      updatedAt: {
        type: 'date',
      },
      description: {
        type: 'string',
        required: true,
      },
      image: {
        type: 'string',
        required: false,
      },
      isPublished: {
        type: 'boolean',
        required: true,
      },
      author: {
        type: 'string',
        required: true
      },
      tags: {
        type: 'list',
        of: {type: 'string'}
      },
    },
  }))

export default makeSource({
    contentDirPath: 'content',
})