module.exports = {
  title: 'mybook',
  author: 'ayano-yuki',
  size: 'shift',
  language: 'ja',
  theme: 'theme/theme.css',
  toc: true,
  toc: {
    title: '目次',
  },
  entry: [
    'content/01-frontmatter.md',
    'content/example.md',
    `content/99-colophon.md`,
  ],
  entryContext: '.',
  baseUrl: '.',
};