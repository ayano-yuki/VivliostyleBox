module.exports = {
  title: 'mybook',
  author: 'ayano-yuki',
  size: 'A5',
  language: 'ja',
  theme: 'theme/theme.css',
  toc: true,
  tocTitle: '目次',
  entry: [
    'content/01-frontmatter.md',
    'content/example.md',
    `content/99-colophon.md`,
  ],
  entryContext: '.',
  baseUrl: '.',
};