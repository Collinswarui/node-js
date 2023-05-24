const http = require('http');

const server = http.createServer((req, res)=> {
    res.write("Hello you");
    res.end();
});

server.listen(3000, () =>{
    console.log('The server is up and running')
});
