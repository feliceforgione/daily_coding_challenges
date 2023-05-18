/* Create urlify function to create url safe links from a blog title. only lowercase letters are allowed and spaces should be replaced with dashes */

const urlify = (text) => {
  // Remove punctuation
  text = text.replace(/[^\w\s-]/g, "");

  // Convert to lowercase
  text = text.toLowerCase();

  // Replace spaces with hyphens
  text = text.replace(/\s+/g, "-");

  return text;
};

const blogTitle = "Hello World!";

console.log(urlify(blogTitle));
