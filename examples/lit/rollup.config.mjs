import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals";
import summary from "rollup-plugin-summary";
import typescript from "@rollup/plugin-typescript";

export default {
	plugins: [
		typescript({
			compilerOptions: {
				sourceMap: false,
			},
			outputToFilesystem: true,
		}),
		// Resolve bare module specifiers to relative paths
		resolve(),
		// Minify HTML template literals
		minifyHTML.default(),
		// Minify JS
		terser({
			ecma: 2022,
			module: true,
			warnings: true,
		}),
		// Print bundle summary
		summary(),
	],
	input: "src/index.ts",
	output: {
		file: "rollup/index.js",
		format: "es",
	},
	preserveEntrySignatures: "strict",
};
