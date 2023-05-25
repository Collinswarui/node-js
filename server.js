const http = require('http');

const server = http.createServer((req, res) =>{

const url = req.url;
const method = req.method;

if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form actin="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
    //console.log('server created');
    return res.end();
}
if(url === '/message'  && method==='POST'){
    const body=[];
    req.on('data', (chunk) =>{
        console.log(chunk);
        body.push(chunk);
    })
}
    
});
server.listen(3000)