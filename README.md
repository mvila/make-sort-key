# make-sort-key [![Build Status](https://travis-ci.org/mvila/make-sort-key.svg?branch=master)](https://travis-ci.org/mvila/make-sort-key)

Combine several strings to make one sort key.

The following transformations occur:

- inputs are lowercased,
- accents are removed,
- redundant spaces are removed,
- null, undefined or empty inputs are ignored,
- finally, resulting strings are concatenated with a space separator.

## Installation

```
npm install --save make-sort-key
```

## Examples

```javascript
import makeSortKey from 'make-sort-key';

console.log(makeSortKey('Dûpont', 'Jêàn')); // => dupont jean

console.log(makeSortKey('', '', 'Apple Computer')); // => apple computer

console.log(makeSortKey(undefined, 'John')); // => john
```

## License

MIT
