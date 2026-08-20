/**
 * Test helper: load the browser-global database (data.js) into Node.
 *
 * data.js is a classic browser script that assigns `const LOST_SOULS_DATA = {...}`
 * with no exports (it cannot gain an `export` because the page loads it as a
 * plain <script>). We therefore evaluate the file text in a Function scope and
 * return the object it defines.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.resolve(here, '../../data.js');

const dataSource = readFileSync(dataPath, 'utf8');
const LOST_SOULS_DATA = new Function(`${dataSource}\n;return LOST_SOULS_DATA;`)();

export { LOST_SOULS_DATA };
