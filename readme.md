# PayPal Example

Payment example with PayPal

## Install

Install dependencies:

```bash
$ npm install
```

## Build

Build vendors and scripts with `gulp`:

```bash
$ npm install -g gulp
$ gulp webpack
```

Or with `webpack` CLI:

```bash
$ npm install -g webpack
$ webpack
```

## Run

```bash
$ npm start
```

## Development

Using `nodemon` with `babel-node` to watch server files

```bash
$ DEBUG=paypal-* nodemon --ignore public/ --exec npm run babel-node -- server.js
```

Watch public files with `webpack`

```bash
$ webpack --watch
```
