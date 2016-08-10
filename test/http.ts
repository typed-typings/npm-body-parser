
import {text, ParsedAsText} from 'body-parser';
import {createServer, IncomingMessage, ServerResponse} from 'http';

const rawParser = text();

// Create server
const server = createServer((req: IncomingMessage & ParsedAsText, res: ServerResponse) => {
    rawParser(req, res, (err?: any) => {
        res.end('Hello, ' + req.body);
    });
});

// Listen
server.listen(3000);
