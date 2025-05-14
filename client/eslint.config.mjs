import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compat instance so we can still use legacy shareable configs:
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
    // Next.js core Web Vitals rules + TypeScript support
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',

        // Accessibility linting
        'plugin:jsx-a11y/recommended',

        // Prettier integration: runs Prettier as an ESLint rule and disables conflicting rules
        'plugin:prettier/recommended',
        'prettier',
    ),

    // Example custom rules—tweak as you like:
    {
        rules: {
            // Warn on unused variables but allow variables prefixed with _
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            // Enforce React Hooks rules
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
];
