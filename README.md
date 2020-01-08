# `tiled-loader`

This is a webpack loader that loads XML tile maps and tile sets from [Tiled](https://www.mapeditor.org/).

It marshals the XML into a JSON format, and `require`s any `image` or `tileset` nodes with a `source` attribute, so that they go through webpack's normal loading mechanism (eg `file-loader`).

The JSON format that the XML gets converted into can be described using this type:

```ts
interface Element {
  tagName: string;

  // Child elements and text nodes
  children: Array<Element | string>;

  // Element attributes are converted into object properties
  [attributeName: string]: string | number;
}
```

## Usage

```js
// webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.xml$/i,
        use: ["tiled-loader"],
      },
    ],
  },
};
```

```js
const tileset = require("./tileset.xml");
const map = require("./map.xml");

console.log(tileset);
// { tagName: "tileset", ... }
console.log(map);
// { tagName: "map", ... }
```

## License

MIT
