# BUILD

Minimal instructions...

## Setup
`npm create anywidget@latest`

`npm install`

Uses: [`prinsss/node-tikzjax/tree/main`](https://github.com/prinsss/node-tikzjax/): `npm install --save node-tikzjax`
https://github.com/Duanyll/tikzjax-preview ?? uses simpler tikzjax

This is build for node, so we require polyfill? and esbuild.config.js

## Build

Install node packages: `npm install`

Build / package Typescript/JS: `npm run build`

Build Python package (into `dist/`): `hatch build`

Install package: `pip install --upgrade --force-reinstall --no-deps dist/jupyter_anywidget_tikz-0.0.0-py2.py3-none-any.whl`

Push to PyPi: `twine upload  dist/*0.0.0*` etc.
