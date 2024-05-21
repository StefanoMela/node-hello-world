const http = require("http");
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

const tips = process.env.TIPS.split(',');

function getRandom() {
    let randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
}

http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }
    res.writeHead(200, {
        "Content-type": "text/html;charset=utf-8"
    });
    res.end(`<h1>Try: ${getRandom()}</h1>`);
})
    .listen(port, host, () => {
        console.log(`Server avviato su http://${host}:${port}`);
    })