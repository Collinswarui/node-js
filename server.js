const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type':'text/html'});
    const quer = url.parse(req.url, true).query;
    const txt = quer.year + " " + quer.month;
    res.end(txt);
});

server.listen(8080, () =>{
    console.log('The server is up and running')
});
