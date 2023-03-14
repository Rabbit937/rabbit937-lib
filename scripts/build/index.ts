import { dirname, resolve } from 'path';
import { buildLibrary } from './lib'
import { fileURLToPath } from 'url';
import { buildTypes } from './dts';

import { BuildOptions } from './types';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);


async function run() {
    const name = "utils"
    const rootPath = resolve(__dirname, `../../`)
    const options: BuildOptions = { name, rootPath }

    await buildLibrary(options);
    await buildTypes(options);
}

run().catch((e) => {
    console.error(e);
})