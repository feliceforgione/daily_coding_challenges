/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

Dont use regular expressions
*/

function domainName(url) {
  if (url == null) return;

  if (url.includes("www")) return url.split("www.")[1].split(".")[0];
  if (url.includes("//")) return url.split("//")[1].split(".")[0];
  return url.split(".")[0];
}
