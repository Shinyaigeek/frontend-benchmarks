import fs from "fs";
import path from "path";
import { Command } from "commander";

const main = () => {
  const program = new Command();
  program.option("-p, --package <type>", "package name");

  program.parse(process.argv);

  const { package: packageName } = program;

  console.log(packageName);

  if (!packageName) {
    throw new Error("this should not be null");
  }

  const files = (() => {
    try {
      return fs.readdirSync(path.join(__dirname, `../../${packageName}`));
    } catch (e) {
      throw new Error(`${packageName} package does not exist.`);
    }
  })();

  if(files.includes("webpack.config.js")) {
      throw new Error("there is already webpack.config.js");
  }

  const boilerplate = fs.readFileSync(
    path.join(__dirname, "./webpack.boilerplate.js"),
    "utf-8"
  );

  fs.writeFileSync(path.join(__dirname, `../../${packageName}/webpack.config.js`), boilerplate);
  console.log(`Conglaturation 🎉 ${packageName}/webpack.config.js is successfully made!!`)
};

main();
