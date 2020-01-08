declare namespace TiledLoader {
  interface Element {
    tagName: string;
    children: Array<Element | string>;
    [attributeName: string]: string | number;
  }
}
