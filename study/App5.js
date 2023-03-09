const http = require('http');
const url = require('url');

const addr = 'http://localhost:3000/about/person?name=good&age=25';
const q1 = url.parse(addr, true);
console.log(q1);


const app = http.createServer( (req, res) => {

});

app.listen(300, () => {
    console.log('server listening on')
});