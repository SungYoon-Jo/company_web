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

    // res.writeHead(302, {'Location':'http://example.com'});
    // res.end();

    // fs.readFile('./index.html', (err, data) => {
    //     res.writeHead(200);
    //     res.end(data);
    // });

    // fs.readFile('./index.html', (err, data) => {

    //     if (err) throw err;

    //     res.writeHead(200);
    //     res.end(data);
    // });

    fs.readFile('./index.html2', (err, data) => {


        if (err) {
            console.log(err);
            res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
            // res.end(err.message);
            throw err;
        }

        else {
            res.writeHead(200);
            res.end(data);
        }

    });

});

app.listen(3000, () => {
    console.log('listening on port 3000');

});