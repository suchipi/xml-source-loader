const parseXML = require("./parseXML");

const tileset = `
<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.2" tiledversion="1.3.1" name="RPG Nature" tilewidth="32" tileheight="32" tilecount="180" columns="20">
  <image source="./RPG Nature.png" width="641" height="288"/>
</tileset>
`;

test("parseXML - tileset", () => {
  expect(parseXML(tileset)).toMatchInlineSnapshot(`
    "module.exports = {
      tagName: \\"tileset\\",
      \\"version\\": 1.2,
      \\"tiledversion\\": \\"1.3.1\\",
      \\"name\\": \\"RPG Nature\\",
      \\"tilewidth\\": 32,
      \\"tileheight\\": 32,
      \\"tilecount\\": 180,
      \\"columns\\": 20,
      children: [{
        tagName: \\"image\\",
        \\"source\\": typeof require(\\"./RPG Nature.png\\") === \\"object\\" && require(\\"./RPG Nature.png\\") != null && require(\\"./RPG Nature.png\\").__esModule && {}.hasOwnProperty.call(require(\\"./RPG Nature.png\\"), \\"default\\") ? require(\\"./RPG Nature.png\\").default : require(\\"./RPG Nature.png\\"),
        \\"width\\": 641,
        \\"height\\": 288
      }]
    };"
  `);
});

const map = `
<?xml version="1.0" encoding="UTF-8"?>
<map version="1.2" tiledversion="1.3.1" orientation="orthogonal" renderorder="left-down" compressionlevel="-1" width="10" height="10" tilewidth="32" tileheight="32" infinite="0" nextlayerid="4" nextobjectid="4">
 <tileset firstgid="1" source="tiled-RPG Nature.xml"/>
 <layer id="1" name="Tile Layer 1" width="10" height="10">
  <data encoding="csv">
41,41,41,83,43,61,85,41,41,41,
41,41,41,83,43,81,41,41,41,41,
41,64,102,103,43,81,41,41,41,41,
41,83,43,43,43,81,41,69,107,70,
41,84,62,62,63,81,41,88,42,86,
41,41,41,41,83,81,41,89,67,90,
41,41,41,41,84,85,41,41,41,41,
41,41,41,41,41,41,41,41,41,41,
41,41,41,41,41,41,41,41,41,41,
41,41,41,41,41,41,41,41,41,41
</data>
 </layer>
 <layer id="2" name="Tile Layer 2" width="10" height="10">
  <data encoding="csv">
0,0,0,0,0,0,0,0,0,0,
0,0,1,0,0,0,0,4,0,0,
0,0,21,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,3,0,
0,0,0,0,0,22,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,5,0,0,79,80,0,
0,23,0,0,0,0,0,99,100,0,
0,0,0,24,0,0,0,24,0,0,
0,0,0,0,0,0,0,0,0,0
</data>
 </layer>
 <objectgroup id="3" name="Object Layer 1">
  <object id="1" name="Label" x="225.062" y="76.5996" width="89.5469" height="18.8438">
   <text fontfamily="Helvetica" wrap="1">Hello World</text>
  </object>
  <object id="2" name="Rectangle" x="66.5535" y="192.417" width="57.4986" height="61.1205"/>
  <object id="3" name="Bush" gid="22" x="55.0809" y="154.993" width="32" height="32"/>
 </objectgroup>
</map>
`;

test("parseXML - map", () => {
  expect(parseXML(map)).toMatchInlineSnapshot(`
    "module.exports = {
      tagName: \\"map\\",
      \\"version\\": 1.2,
      \\"tiledversion\\": \\"1.3.1\\",
      \\"orientation\\": \\"orthogonal\\",
      \\"renderorder\\": \\"left-down\\",
      \\"compressionlevel\\": -1,
      \\"width\\": 10,
      \\"height\\": 10,
      \\"tilewidth\\": 32,
      \\"tileheight\\": 32,
      \\"infinite\\": 0,
      \\"nextlayerid\\": 4,
      \\"nextobjectid\\": 4,
      children: [{
        tagName: \\"tileset\\",
        \\"firstgid\\": 1,
        \\"source\\": typeof require(\\"./tiled-RPG Nature.xml\\") === \\"object\\" && require(\\"./tiled-RPG Nature.xml\\") != null && require(\\"./tiled-RPG Nature.xml\\").__esModule && {}.hasOwnProperty.call(require(\\"./tiled-RPG Nature.xml\\"), \\"default\\") ? require(\\"./tiled-RPG Nature.xml\\").default : require(\\"./tiled-RPG Nature.xml\\")
      }, {
        tagName: \\"layer\\",
        \\"id\\": 1,
        \\"name\\": \\"Tile Layer 1\\",
        \\"width\\": 10,
        \\"height\\": 10,
        children: [{
          tagName: \\"data\\",
          \\"encoding\\": \\"csv\\",
          children: [\\"\\\\n41,41,41,83,43,61,85,41,41,41,\\\\n41,41,41,83,43,81,41,41,41,41,\\\\n41,64,102,103,43,81,41,41,41,41,\\\\n41,83,43,43,43,81,41,69,107,70,\\\\n41,84,62,62,63,81,41,88,42,86,\\\\n41,41,41,41,83,81,41,89,67,90,\\\\n41,41,41,41,84,85,41,41,41,41,\\\\n41,41,41,41,41,41,41,41,41,41,\\\\n41,41,41,41,41,41,41,41,41,41,\\\\n41,41,41,41,41,41,41,41,41,41\\\\n\\"]
        }]
      }, {
        tagName: \\"layer\\",
        \\"id\\": 2,
        \\"name\\": \\"Tile Layer 2\\",
        \\"width\\": 10,
        \\"height\\": 10,
        children: [{
          tagName: \\"data\\",
          \\"encoding\\": \\"csv\\",
          children: [\\"\\\\n0,0,0,0,0,0,0,0,0,0,\\\\n0,0,1,0,0,0,0,4,0,0,\\\\n0,0,21,0,0,0,0,0,0,0,\\\\n0,0,0,0,0,0,0,0,3,0,\\\\n0,0,0,0,0,22,0,0,0,0,\\\\n0,0,0,0,0,0,0,0,0,0,\\\\n0,0,0,0,5,0,0,79,80,0,\\\\n0,23,0,0,0,0,0,99,100,0,\\\\n0,0,0,24,0,0,0,24,0,0,\\\\n0,0,0,0,0,0,0,0,0,0\\\\n\\"]
        }]
      }, {
        tagName: \\"objectgroup\\",
        \\"id\\": 3,
        \\"name\\": \\"Object Layer 1\\",
        children: [{
          tagName: \\"object\\",
          \\"id\\": 1,
          \\"name\\": \\"Label\\",
          \\"x\\": 225.062,
          \\"y\\": 76.5996,
          \\"width\\": 89.5469,
          \\"height\\": 18.8438,
          children: [{
            tagName: \\"text\\",
            \\"fontfamily\\": \\"Helvetica\\",
            \\"wrap\\": 1,
            children: [\\"Hello World\\"]
          }]
        }, {
          tagName: \\"object\\",
          \\"id\\": 2,
          \\"name\\": \\"Rectangle\\",
          \\"x\\": 66.5535,
          \\"y\\": 192.417,
          \\"width\\": 57.4986,
          \\"height\\": 61.1205
        }, {
          tagName: \\"object\\",
          \\"id\\": 3,
          \\"name\\": \\"Bush\\",
          \\"gid\\": 22,
          \\"x\\": 55.0809,
          \\"y\\": 154.993,
          \\"width\\": 32,
          \\"height\\": 32
        }]
      }]
    };"
  `);
});
