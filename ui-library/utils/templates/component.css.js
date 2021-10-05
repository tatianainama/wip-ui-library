const camelToKebab = (str) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

module.exports = (componentName) => ({
  content: `
    .${camelToKebab(componentName)} {
    }
  `,
  extension: `.css`,
});
