- https://moz.com/learn/seo/alt-text

# Question:

- should use strong or b, i or em: b and strong same bold text, but strong defines text with strong importance and b is not, same for em and i. Screen reader will pronounce the words in em and strong

# Open Graph: https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/

# URL - Uniform Resource Locator

`scheme://prefix.domain:port/path/filename`
scheme - defines the type of Internet service (most common is http or https)
prefix - defines a domain prefix (default for http is www)
domain - defines the Internet domain name (like w3schools.com)
port - defines the port number at the host (default for http is 80)
path - defines a path at the server (If omitted: the root directory of the site)
filename - defines the name of a document or resource

# Favicon:

- icon in browser tab: <link rel="icon" type="image/x-icon" href="/images/favicon.ico">

# Alt:

- Adding alternative text to images on your site is a principle of web accessibility.Adding alternative text to images on your site is a principle of web accessibility.
- Alt attributes enable screen readers to read the information about on-page images for the benefit of a person with complete lack of sight, visually impaired, or who is otherwise unable to view the images on the page.
- Alt text will be displayed in place of an image if an image file cannot load.Alt text will be displayed in place of an image if an image file cannot load.
- Alt text provides better image context/descriptions to search engine crawlers, helping them to index and rank an image properly in image search. It also provides search engines with contextual information about the content on the page.

# Picture:

<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg" alt="Alt text">
</picture>

# Block, Inline and Inline-block

- Block: start on a new line, always takes up full width available
- Inline: does not start on a new line, only takes up as much width as necessary
- Inline-block
- Inline element cannot contain a block element
