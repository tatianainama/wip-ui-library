import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: ["src/index.js"],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [".jsx", ".js"] }),
    babel({
      extensions: [".jsx", ".js"],
      exclude: "node_modules/**",
    }),
    commonjs(),
    postcss(),
  ],
};
