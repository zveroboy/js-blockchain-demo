/** @type { NodeJS.Process } */
// process.stdout.write('abc\n')
import {createHash} from 'node:crypto';

/** @param {string} input */
export function hash(input){
  const hasher = createHash('sha256');

  return hasher.update(input).digest('hex');
}
