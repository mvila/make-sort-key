'use strict';

import deburr from 'lodash.deburr';

export function makeSortKey(...inputs) {
  let output = '';
  for (let input of inputs) {
    if (input == null) continue;
    if (typeof input !== 'string') throw new Error('Invalid input type');
    input = input.replace(/\s+/g, ' ');
    input = input.trim();
    if (!input) continue;
    if (output) output += ' ';
    output += input;
  }
  output = deburr(output);
  output = output.toLowerCase();
  return output;
}

export default makeSortKey;
