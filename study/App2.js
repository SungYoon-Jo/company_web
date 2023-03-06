const http = require('http');

const templatehtml = (title) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <h2>good day~</h2>
    </body>
    </html>
`

};

const app = http.createServer((req, res) => {
    let url = req.url;
    if (url === '/') {
        url = 'index.html';
    }

    if (url === '/favicon.ico') { 
        res.writeHead(404);
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8'});

    const template = templatehtml('main');
    res.end(template);
});

app.listen(3000, () => {
    console.log('listening on');
});