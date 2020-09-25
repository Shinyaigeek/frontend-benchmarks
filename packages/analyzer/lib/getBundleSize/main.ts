import path from "path";
import fs from "fs";
import { BUNDLE, TARGET } from "../../vars";

export const getBundleSize = (target:string) => {
    return fs.statSync(path.join(__dirname, `../../../${target}/${BUNDLE}`)).size;
}