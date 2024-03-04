const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it');
const mdContainer = require('markdown-it-container');
const { highlight } = require('./highlight');

const localMd = MarkdownIt();
const docRoot = path.resolve(__dirname, '../../', 'examples');

module.exports = {
  extendMarkdown: (md) => {
    md.use(mdContainer, 'demo', {
      validate(params) {
        return !!params.trim().match(/^demo\s*(.*)$/);
      },

      render(tokens, idx) {
        // const data = md.$data
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1 /* means the tag is opening */) {
          const description = m && m.length > 1 ? m[1] : '';
          const sourceFileToken = tokens[idx + 2];
          let source = '';
          const sourceFile = sourceFileToken.children?.[0].content ?? '';

          if (sourceFileToken.type === 'inline') {
            source = fs.readFileSync(
              path.resolve(docRoot, `${sourceFile}.vue`),
              'utf-8'
            );
          }

          if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

          return `<Demo source="${encodeURIComponent(
            highlight(source, 'vue')
          )}" path="${sourceFile}" raw-source="${encodeURIComponent(
            source
          )}" description="${encodeURIComponent(
            localMd.render(description)
          )}">`;
        } else {
          return '</Demo>';
        }
      },
    });
  },
};
