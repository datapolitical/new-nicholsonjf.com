module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy(
        {
            'assets/images': 'assets/images',
            'dist/css': 'assets/css'
        }
    )
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        passthroughFileCopy: true
    }
}