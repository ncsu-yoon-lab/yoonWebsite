import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // your existing Next.js & TS presets:
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",

    // any other presets/plugins you already had, e.g.:
    // "plugin:jsx-a11y/recommended",

    // --- add Prettier integration here: ---
    "plugin:prettier/recommended", // runs Prettier as an ESLint rule & turns off conflicts
    "prettier"                    // disables any remaining ESLint formatting rules
  ),

  // (you can still add custom rules here, e.g.)
];
