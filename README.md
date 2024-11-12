# jupyter_anywidget_tikz
Jupyter anywidget for running prinsss/node-tikzjax (tikz wasm)



Uses: [`prinsss/node-tikzjax/tree/main`](https://github.com/prinsss/node-tikzjax/tree/main): `npm install --save node-tikzjax`


Currently broken - node.js needs browserifying somehow...

Here's another approach that might work - use the simpler tikzjax script, load tikz code intot a script tag, then pick up the rendered svg? https://github.com/Duanyll/tikzjax-preview

https://tikzjax.com/

So recipe could be:

- add tikz code to script tag in template html
- load html into iframe - this renders the image
- somehow detect the svg is rendered in the iframe and then scrape it from the iframe

Chatgpt suggests:

1. Set Up a Mutation Observer in the Child Frame
In the child frame (i.e., the page within the iframe where the TikZ code is processed), you could use a MutationObserver to detect when the SVG elements are added to the DOM. When TikZJax renders and inserts the SVG, the observer can notify the parent window via postMessage.

2. Use postMessage to Notify the Parent
When the observer in the child iframe detects the addition of the SVG element, it can send a message to the parent window using window.parent.postMessage. This way, the parent window knows that the SVG rendering is complete and can proceed to access it.

3. Access and Extract the SVG Content from the Child Frame
Once notified, the parent window can then access the iframe’s document and retrieve the SVG element’s code. Note that this step only works if the iframe and the parent page are on the same origin; otherwise, it would be blocked by the browser’s same-origin policy.