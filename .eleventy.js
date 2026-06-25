module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    htmlTemplateEngine: "liquid",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    }
  };
};