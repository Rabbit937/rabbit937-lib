import { build } from 'vite'
import type { UserConfig } from 'vite'
import banner from 'vite-plugin-banner'
import pkg from '../../package.json'
import { BuildOptions } from './types'
import { resolve } from 'path'

const viteConfig = ({ name, rootPath, externals }: BuildOptions): UserConfig => {
    const basePath = resolve(rootPath, `./packages/${name}`)
    const outDir = resolve(basePath, `./lib`)

    const config: UserConfig = {
        build: {
            outDir,
            lib: {
                entry: "packages/utils/src/index.ts",
                name: "rabbit937-lib",
                formats: ['es', 'cjs', 'umd'],
                fileName: (format) => {
                    switch (format) {
                        case 'es':
                            return 'index.mjs'
                        case 'cjs':
                            return 'index.cjs'
                        default:
                            return 'index.min.js'
                    }
                }
            },
        },
        plugins: [
            banner(
                `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`
            )
        ]
    }

    return config;
}

export async function buildLibrary(options: BuildOptions) {
    const config: UserConfig = viteConfig(options);
    await build(config)
}