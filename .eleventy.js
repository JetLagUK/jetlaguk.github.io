module.exports = function(eleventyConfig) {
  // passthroughs if you add assets later
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
