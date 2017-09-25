# react-starter

React Starter is a web app boilerplate using React, Styled Components, Webpack, Babel.

## Install

```
git clone https://github.com/ruanmer/react-starter
yarn install
```

## Commands

#### Start

```
yarn start
```

Runs your application (from the `dist` directory) in the browser (http://localhost:3000). You need to generate a `dist` first.

#### Dev

```
yarn dev
```

Runs your application in the browser (http://localhost:9000). Auto-compile & auto-reload the server after any file changes within the `src` directory.

#### Build

```
yarn build
```

Compiles all files (set `NODE.ENV=development`). Output is sent to the `dist` directory.

#### Release

```
yarn release
```

Compiles all files (set `NODE.ENV=production`). Output is sent to the `dist` directory.

#### Bundle Analyzer

```
yarn release --analyze
```

Compiles all files and runs bundle analyzer in the browser (http://localhost:8888).

#### Tests

```
yarn test
yarn test:watch
yarn test:coverage
```

#### Linters

```
yarn lint
```

## Features

* [react-router](https://github.com/ReactTraining/react-router)
* [Code Splitting](https://reacttraining.com/react-router/web/guides/code-splitting)
* [styled-components](https://github.com/styled-components/styled-components)
* ES2015 (ES6) and ES2016 (ES7) support
* [ESLint](http://eslint.org/)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](http://airbnb.io/enzyme/)
* [Webpack Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer)
