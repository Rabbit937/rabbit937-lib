import { build } from 'vite'
import type { UserConfig } from 'vite'
import banner from 'vite-plugin-banner'
import pkg from '../../package.json'
import { BuildOptions } from './types'

const viteConfig = ({ name, rootPath, externals }: BuildOptions): UserConfig => {
    const config: UserConfig = {
        build: {
            lib: {
                entry: './src/index.ts',
                name: name,
                formats: ['es', 'cjs', 'umd'],
                fileName: (format) => {
                    switch (format) {
                        case 'umd':
                            return 'index.min.js'
                        case 'cjs':
                            return 'index.cjs'
                        case 'es':
                            return 'index.mjs'
                        default:
                            return 'index.js'
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