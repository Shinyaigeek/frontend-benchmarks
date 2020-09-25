import { getBundleSize } from "./lib/getBundleSize/main";
import { TARGET } from "./vars";

TARGET.forEach((pk) => {
    console.log(getBundleSize(pk) + "B")
})