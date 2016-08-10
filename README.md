# Typed body-parser
[![Build Status](https://travis-ci.org/felixfbecker/typed-body-parser.svg?branch=master)](https://travis-ci.org/felixfbecker/typed-body-parser)

Typescript Typings for [body-parser](https://github.com/expressjs/body-parser).

## Installation
```sh
typings install --save body-parser
```

## Usage

```ts
import express = require('express');
import {Request, Response} = require('express');
import {text, ParsedAsText} from 'body-parser';

const app = express();

app.post('/textdemo', text({limit: '1MB'}), (req: Request & ParsedAsText, res: Response) => {
    // req.body is now a string
    console.log(req.body.substr(3));
});

```

[More examples](./test/test.ts)

## Contributing
You can run the tests by running `npm run build` and then `npm run test`.


---------------------------------------

_Based on the typings by [Santi Albo](https://github.com/santialbo) on [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)_

