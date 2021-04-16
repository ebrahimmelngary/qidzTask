export const KEY_EXTRACTOR = (item: any, index: {toString: () => any}) =>
  item + index.toString();
