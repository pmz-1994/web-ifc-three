module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['airbnb-base', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'prettier', 'unused-imports'],
    ignorePatterns: [
        '**/dist/*',
        '**/node_modules/*',
        '**/*.json',
        '**/*.test.ts',
        '**/*.config.js'
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ],
        indent: 'off',
        // 'no-shadow': 'off',
        'lines-between-class-members': 'off',
        'linebreak-style': 'off',
        'arrow-body-style': 'off',
        'prefer-destructuring': 'off',
        'no-console': 'off',
        'no-param-reassign': 'off',
        'eol-last': 'off',
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        'no-return-assign': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
        'no-prototype-builtins': 'off',
        'no-await-in-loop': 'off',
        // 'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
        ],
        'class-methods-use-this': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never'
            }
        ],
        'import/prefer-default-export': 'off',
        'no-plusplus': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
            }
        }
    },
    overrides: [
        {
            files: ['*.spec.ts'],
            env: {
                jest: true
            }
        }
    ]
};
