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

## Configure

Create a `.paypalrc` file with your paypal credentials:

```json
{
  "paypal": {
    "client_id": "...",
    "client_secret": "..."
  }
}
```

## Test

With `babel-node` and --harmony flag, run:

```bash
$ npm start
```

Then, open http://localhost:3000

## Contribute

Using `nodemon` with `babel-node` to watch server files:

```bash
$ DEBUG=paypal-* nodemon --ignore public/ --exec npm run babel-node -- server.js
```

Watch public files with `webpack`:

```bash
$ webpack --watch
```
