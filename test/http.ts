
import {text, ParsedAsText} from 'body-parser';
import {createServer, IncomingMessage, ServerResponse} from 'http';

const rawParser = text();

// Create server
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    rawParser(req, res, (err?: any) => {
        const parsedReq = <IncomingMessage & ParsedAsText>req;
        res.end('Hello, ' + parsedReq.body);
    });
});

// Listen
server.listen(3000);
