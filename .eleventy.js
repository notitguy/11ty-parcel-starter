module.exports = function (eleventyConfig) {
    // copy files
    eleventyConfig.addPassthroughCopy("./src/assets/img");

    // override default config
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        
        dir: {
            input: "src",
            output: "dist"
        }
    };
};