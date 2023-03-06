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

    fs.readFile('./index.html', (err, data) => {
        res.writeHead(200);
        res.end(data);
    });


});

app.listen(3000, () => {
    console.log('listening on port 3000');

});