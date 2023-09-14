const esbuild = require('esbuild');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats('js');

  eleventyConfig.addExtension('js', {
    outputFileExtension: 'js',
    compile: async (content, fullPath) => {
      if (path.basename(fullPath) !== `index.js`) {
        return;
      }

      return async () => {
        let output = await esbuild.build({
          target: 'es2020',
          entryPoints: [fullPath],
          minify: isProduction,
          bundle: true,
          write: false,
          sourcemap: !isProduction,
        });

        return output.outputFiles[0].text;
      };
    },
  });
};
