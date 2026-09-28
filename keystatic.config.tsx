import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titel' } }),
        description: fields.text({
          label: 'Beschreibung',
          multiline: true,
          validation: { isRequired: true },
        }),
        pubDate: fields.date({
          label: 'Publikationsdatum',
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({ label: 'Aktualisiert am' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (p) => p.value,
        }),
        draft: fields.checkbox({ label: 'Entwurf', defaultValue: false }),
        heroImage: fields.image({
          label: 'Hero-Bild',
          directory: 'src/assets/blog',
          publicPath: '../../assets/blog/',
        }),
        heroImageAlt: fields.text({
          label: 'Bild-Alternativtext',
        }),
        youtubeId: fields.text({ label: 'YouTube-ID oder URL' }),
        content: fields.markdoc({ label: 'Inhalt', extension: 'md' }),
      },
    }),
  },
});
