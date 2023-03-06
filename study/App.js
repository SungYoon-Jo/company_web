const http = require('http');

 const app = http.createServer( (req, res) => {
    
    let url = req.url;

    if (url === '/') {
        url = '/index.html';
    }

    // 아직 없음
    if (url === '/favicon.ico') { 
        res.writeHead(404);
        res.end();
        return;
    }

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

    // res.end('hi enjoy day? 좋아요');

    // res.end(template);

    // console.log(__dirname);

});

 app.listen(3000, () => {
    console.log('start server');
 });