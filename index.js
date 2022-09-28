const http = require("http");
const fs = require("fs");

fs.writeFile("index.html", "<h1> Hello World </h1> \n<p> This is {Your Name}... </p>", (err) => {
    console.log(err);
})

http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(5000);