export default {
  name: 'introduction',
  title: 'Introduction',
  type: 'document',
  fields: [
      {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'title',
          title: 'Title',
          type: 'string',
      },
      {
          name: 'foundedOn',
          title: 'FoundedOn',
          type: 'string',
      },
      {
          name: 'subheader',
          title: 'Subheader',
          type: 'string',
      },
      {
          name: 'introParagraph',
          title: 'IntroParagraph',
          type: 'text',
      }
  ],
};