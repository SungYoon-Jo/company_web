const http = require('http');
const fs = require('fs');

const app = http.createServer( (req, res) => {
    let url = req.url;

    if (url === '/'){
        url = '/index.html';
    }

    if (url === '/favicon.ico') { 
        res.writeHead(404);
        res.end();
        return;
    }

    try{
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    }
    catch (err) {
        console.log(err);
        res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
        res.end(err.message);
    }
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});