module.exports = {
  "parser": "@typescript-eslint/parser",

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "sourceType": "module",
    "project": "tsconfig.json",
    "tsconfigRootDir": __dirname,
    "ecmaVersion": 12,
    "createDefaultProgram": true,
  },
  "env": {
    "browser": true,
    "node": true,
    "es2021": true,
  },
  "settings": {
    "react": {
      "version": "detect",
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "react",
    "react-hooks",
    "jsx-a11y",
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "airbnb-typescript",
  ],
  "overrides": [
    {
      "files": ["src/**/*.js", "src/**/*.ts"],
    },
  ],
  "rules": {
    "import/newline-after-import": ["error", { "count": 1 }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          ["builtin", "external"],
          ["sibling", "parent", "index", "internal"],
        ],
      },
    ],
    "arrow-body-style": "warn",
    "max-len": ["error", {
      "code": 120,
      "tabWidth": 2,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }],
    "class-methods-use-this": "off",
    "global-require": "off",
    "max-classes-per-file": "warn",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "no-trailing-spaces": "error",
    "no-tabs": "off",
    "intend": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "space-before-blocks": "error",
    "arrow-spacing": "error",
    "eqeqeq": "error",
    "eol-last": ["error", "always"],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "no-else-return": "error",
    "no-undef-init": "error",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "default-case": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "export" },
    ],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/quotes": ["error", "double"],

    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/self-closing-comp": ["error", {
      "component": true,
    }],
    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never",
    }],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "some": ["nesting", "id"],
      },
    }],
  },
};
