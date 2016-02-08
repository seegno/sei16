
/**
 * Module dependencies.
 */

import { colors } from 'src/client/constants/colors';
import { forEach } from 'lodash';

/**
 * Export `getColorCode`.
 */

export function getColorCode(value) {
  let code = 0;

  forEach(value, (substring) => {
    code += substring.charCodeAt(0);
  });

  const index = code % 16;

  return colors[index];
}
