import { existsSync, readJsonSync } from "fs-extra";
import { resolve } from "path";
import { BuildOptions } from "./types";

export function readBuildConfig({ rootPath, name }: BuildOptions) {
    const buildConfigFile = resolve(rootPath, `./packages/${name}/build.json`)

    if (existsSync(buildConfigFile)) {
        const buildConfig = readJsonSync(buildConfigFile);
        return buildConfig;
    }

    return {}

}