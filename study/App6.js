const http = require('http');
const url = require('url');
const fs = require('fs');

const templateHtml = (title, menuList, clientPathname, data) => {
    return `
        <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>

                <style>
                    a {text-decoration: none;}
                    ul > li {list-style: none; display: inline-block; margin-left: -40px; margin-right: 60px; font-size: 0.9rem}
                    ul > li:last-child {border: 0px solid}
                    
                </style>

            </head>
            <body>
                <div style="border:0px solid; width 85%; magin0 auto">
                    <h3 style="margin: 30px 0">hiih my website</h3>
                    <hr>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        ${menuList}
                    </ul>
                    <hr>
                    <p style="color: blue">Navigation : [${clientPathname}] Page</p>
                    <div style="margin-top: 40px">
                        ${data}
                    </div>
                </div>
            </body>
        </html>
    `
}

const app = http.createServer((req, res)=> {
    const clientUrl = req.url;
    // console.log(clientUrl); 

    if (url === '/favicon.ico') { 
        res.writeHead(404);
        res.end();
        return;
    }

    const addr = clientUrl;
    const clientQuery = url.parse(addr, true).query;
    const clientPathname = url.parse(addr, true).pathname;

    if (clientPathname === '/') {
        txtFileName = 'main'
    }
    else {
        txtFileName = clientPathname.replace('/','');
    }
    // console.log(txtFileName)

    let menu = ['main','about','service'];
    let ismenu = menu.indexOf(txtFileName);
    console.log(ismenu);

    if ( ismenu < 0) {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('no page<br />');
        res.write('<a href="/"> go main page</a>')
        res.end();
    }
    else {
        fs.readFile(`txt/${txtFileName}.txt`,'utf-8',(err, data) => {
            if (err) throw err;

            let menuList = '';
            for(i=0; i<menu.length; i++) {
                menuList += `<li><a href="/${menu[i]}">${menu[i].toUpperCase()}</a></li>`;
            }

            const title = txtFileName.toUpperCase();
            const template = templateHtml(title, menuList, clientPathname, data);

            res.writeHead(200);
            res.end(template);
        });

    }
 

});

app.listen(3000, () => {
    console.log('listening on port 3000');
});