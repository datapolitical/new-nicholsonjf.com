module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({'dist/assets': "assets"})
    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true
    }
}