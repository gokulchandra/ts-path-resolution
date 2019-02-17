# ts-path-resolution
Sample Typescript server with Jest for running tests, configured to use aliases for path resolution. 

### Configures Typescript compiler to resolve alias to modules

Updating the [`tsconfig.json`](https://github.com/gokulchandra/ts-path-resolution/blob/master/tsconfig.json) to set the `baseUrl` and `paths` specifies to the Typescript transpiler how to resolve modules.

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"], // resolve all modules prefixed with `@/` from `src` directory
      "database": ["lib/database/index.ts"] // resolves references to database module 
    },
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./dist",
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "./src/**/*"
  ]
}
```

### Specifies to NodeJS runtime 

Use a npm module called `(module-alias)[https://www.npmjs.com/package/module-alias]`. Add the following to the beginning of the [`src/index.ts`](https://github.com/gokulchandra/ts-path-resolution/blob/master/src/index.ts) to register the module. 
`require('module-alias/register')`

We append a _moduleAliases to our [`package.json`](https://github.com/gokulchandra/ts-path-resolution/blob/master/package.json).

```json
  ...
  "_moduleAliases": {
    "@": "dist",
    "database": "dist/lib/database"
  }

```

### Configures module resolution within Jest to run tests

We use the `moduleNameMapper` property to specify module resolution using regular expressions and how to resolve matching paths in [jest.config.js](https://github.com/gokulchandra/ts-path-resolution/blob/master/jest.config.js).

```javascript
module.exports = {
  // other config  goes here
  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "database": "<rootDir>/src/lib/database"
  }
};
```