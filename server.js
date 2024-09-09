const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-type','text/html');
    console.log("req from client");

    res.write('<h1>Hello Workd</h1>')
    res.end();
})

server.listen(3000,'localhost',() => {
    console.log("server listing on port 3000");
});