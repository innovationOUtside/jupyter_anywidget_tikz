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

