
import express = require('express');
import {Request, Response} = require('express');
import {raw, json, text, urlencoded, ParsedAsJson, ParsedAsText, ParsedRaw, ParsedAsUrlencoded} from 'body-parser';

const app = express();

app.post('/rawdemo', raw(), (req: Request & ParsedRaw, res: Response) => {
    console.log(req.body.readUint8());
});

app.post('/jsondemo', json(), (req: Request & ParsedAsJson, res: Response) => {
    console.log(req.body.whatever);
});

app.post('/textdemo', text(), (req: Request & ParsedAsText, res: Response) => {
    console.log(req.body.substr(3));
});

app.post('/urlencodeddemo', urlencoded(), (req: Request & ParsedAsUrlencoded, res: Response) => {
    console.log(req.body.whatever);
});
