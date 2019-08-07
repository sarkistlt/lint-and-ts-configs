##### `.eslintrc.js`

```js
module.exports = {
  extends: [
    './node_modules/lint-and-ts-configs/lib/eslint/base.js',
  ]
};

```

##### `.releaserc.js`

```js
module.exports = {
  extends: 'lint-and-ts-configs/lib/semantic/base',
  repositoryUrl: 'https://github.com/****/****.git',
};


```

##### `tsconfig.json`

```json
{
  "extends": "./node_modules/lint-and-ts-configs/lib/tsconfig/node.json",
  "compilerOptions": {
    "rootDir": ".",
    "baseUrl": ".",
    "paths": {
      "@helpers/*": ["src/helpers/*"],
      "@hooks/*": ["src/hooks/*"],
      "@app/*": ["src/*"]
    }
  },
  "include": ["typings/**/*", "src/**/*"],
  "exclude": [
    "node_modules",
    "**/node_modules/*",
    "build",
    "**/*.spec.ts",
    "**/*.test.ts"
  ]
}


```
