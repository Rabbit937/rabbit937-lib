import { existsSync, mkdirSync, writeFileSync } from "fs";
import { generateDtsBundle } from 'dts-bundle-generator'
import { resolve } from "path";

export async function buildTypes({ name, rootPath }) {
    const filePath = resolve(rootPath, `./src/index.ts`)
    const options = [   
        {
            filePath,
            output: {
                noBanner: true
            }
        }
    ]

    const dtses = generateDtsBundle(options, {
        preferredConfigPath: resolve(rootPath, `./tsconfig.json`)
    })

    if (!Array.isArray(dtses) || !dtses.length) return;

    const outDir = resolve(rootPath, `./types`)
    !existsSync(outDir) && mkdirSync(outDir)

    const dts = dtses[0]
    const output = resolve(outDir, `./index.d.ts`)
    writeFileSync(output, dts)

}